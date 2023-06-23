<template>
  <NonAuth>
    <!-- slot main -->
    <template #main>
      <div class="h-screen d-flex flex-column align-center justify-center">
        <div class="d-flex align-center justify-center mb-2">
          <span>ログイン</span>
        </div>
        <v-card class="py-10 px-10">
          <div class="d-flex flex-column align-center justify-center">
            <v-form @submit="onSubmit" style="width: 520px">
              <v-text-field v-bind="loginId" label="ログインID" />
              <v-text-field v-bind="password" label="パスワード" />
              <v-btn
                class="my-8"
                block
                color="info"
                type="submit"
                :disabled="isValidating || isSubmitting"
              >
                ログイン
              </v-btn>
            </v-form>
          </div>
        </v-card>
      </div>
      <Loading :show="loading" />
    </template>
  </NonAuth>
</template>

<script setup lang="ts">
import NonAuth from "@/components/templates/NonAuth.vue";
import Loading from "@/components/atoms/LoadingPage.vue";
import { useForm } from "vee-validate";
import { ref } from "vue";

// vee-validate
const { defineComponentBinds, handleSubmit, isValidating, isSubmitting } =
  useForm({
    validationSchema: {
      loginId: "required",
      password: "required|password",
    },
  });

// Refer to the docs for how to make advanced validation behaviors with dynamic configs
// TODO: Add link
const vuetifyConfig = (state: any) => ({
  props: {
    "error-messages": state.errors,
  },
});

const loginId = defineComponentBinds("loginId", vuetifyConfig);
const password = defineComponentBinds("password", vuetifyConfig);

// state
const loading = ref(false);

// methods
const onSubmit = handleSubmit((values) => {
  console.log("Submitted with", values);
});
</script>
