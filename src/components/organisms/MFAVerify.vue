<template>
  <v-form @submit="onSubmit" style="width: 520px">
    <div>
      <span class="font-weight-bold">E メール: </span>
      <span>{{ user?.username ?? "" }}</span>
    </div>
    <v-text-field v-bind="code" label="パスワード" />
    <v-btn
      class="my-8"
      block
      color="info"
      type="submit"
      :disabled="isValidating || isSubmitting"
    >
      サインイン
    </v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { Auth } from "aws-amplify";
import { useForm } from "vee-validate";
import { useRootStore } from "@/store/root";
import { storeToRefs } from "pinia";
import router, { RouteName } from "@/routes";

const emit = defineEmits(["success", "error", "finally"]);

// store
const rootStore = useRootStore();

const { user } = storeToRefs(rootStore);

// vee-validate
const {
  values,
  handleSubmit,
  defineComponentBinds,
  isValidating,
  isSubmitting,
} = useForm({
  validationSchema: {
    code: "required",
  },
});

const vuetifyConfig = (state: any) => ({
  props: {
    "error-messages": state.errors,
  },
});

const code = defineComponentBinds("code", vuetifyConfig);

// methods
const onSubmit = (e: any) => {
  e.preventDefault();
  handleSubmit(async () => {
    rootStore.setLoading(true);
    try {
      // await Auth.verifyTotpToken(user, values.code);
      await Auth.confirmSignIn(user.value, values.code, "SOFTWARE_TOKEN_MFA");
      router.push({ name: RouteName.HOME });
      emit("success", values.code);
    } catch (error: any) {
      const msg = error?.message || "ログインに失敗しました。";
      rootStore.showError(msg);
      emit("error", error);
    } finally {
      rootStore.setLoading(false);
      emit("finally");
    }
  })();
};
</script>
