<template>
  <NonAuth>
    <!-- slot main -->
    <template #main>
      <div class="h-screen d-flex flex-column align-center justify-center">
        <div class="d-flex align-center justify-center mb-2">
          <span>ログイン</span>
        </div>
        <v-card v-if="!challengeName" class="py-10 px-10">
          <div class="d-flex flex-column align-center justify-center">
            <LoginForm @success="onLoginSuccess" />
          </div>
        </v-card>
        <v-card
          v-if="challengeName === Challenge.MFA_SETUP"
          class="py-10 px-10"
        >
          <div>
            qrString: {{ qrString }}
            <QRCodeVue3 :value="qrString" />
          </div>
          <v-btn class="my-8" block color="info" type="button"> DONE </v-btn>
        </v-card>
        <v-card
          v-if="challengeName === Challenge.SOFTWARE_TOKEN_MFA"
          class="py-10 px-10"
        >
          <div class="d-flex flex-column align-center justify-center">
            <MFAVerify />
          </div>
        </v-card>
      </div>
    </template>
  </NonAuth>
</template>

<script setup lang="ts">
import NonAuth from "@/components/templates/NonAuth.vue";
import LoginForm from "@/components/organisms/LoginForm.vue";
import MFAVerify from "@/components/organisms/MFAVerify.vue";
import QRCodeVue3 from "qrcode-vue3";

import { ref } from "vue";
import { useRootStore } from "@/store/root";
import { Auth } from "aws-amplify";
import { storeToRefs } from "pinia";

import { Challenge } from "@/utils/constants";

const qrString = ref("");

const rootStore = useRootStore();

const { user: authenticatedUser } = storeToRefs(rootStore);

// state
const challengeName = ref("");

// methods
const mfaSetup = () => {
  if (!authenticatedUser.value) return null;
  return Auth.setupTOTP(authenticatedUser.value).then((code) => {
    qrString.value = `otpauth://totp/AWSCognito:${authenticatedUser.value?.username}?secret=${code}&issuer=AWSCognito`;
  });
};

const onLoginSuccess = async () => {
  rootStore.setLoading(true);
  challengeName.value = authenticatedUser.value?.challengeName ?? "";
  switch (authenticatedUser.value?.challengeName) {
    case "MFA_SETUP":
      await mfaSetup();
      break;
    case "SOFTWARE_TOKEN_MFA":
      break;
    case "NEW_PASSWORD_REQUIRED":
      break;
    default:
      break;
  }
  rootStore.setLoading(false);
};
</script>

<script lang="ts">
import { defineComponent } from "vue";
/**
 * @description
 * Step 1: Sign in
 * Step 2: Confirm sign in
 * Step 3: Input TOTP or (Set up TOTP & Confirm TOTP setup)
 */
export default defineComponent({
  name: "LoginPage",
});
</script>
