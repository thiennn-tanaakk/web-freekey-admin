<template>
  <v-form @submit="onSubmit" style="width: 520px">
    <v-text-field v-bind="loginId" label="ログインID" />
    <v-text-field type="password" v-bind="password" label="パスワード" />
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
</template>

<script setup lang="ts">
import { Auth } from "aws-amplify";
import { useForm } from "vee-validate";
import { useRootStore } from "@/store/root";

const emit = defineEmits(["success", "error", "finally"]);

// store
const rootStore = useRootStore();

// vee-validate

const {
  values,
  handleSubmit,
  defineComponentBinds,
  isValidating,
  isSubmitting,
} = useForm({
  validationSchema: {
    loginId: "required",
    password: "required|password",
  },
});

const vuetifyConfig = (state: any) => ({
  props: {
    "error-messages": state.errors,
  },
});

const loginId = defineComponentBinds("loginId", vuetifyConfig);
const password = defineComponentBinds("password", vuetifyConfig);

// methods
const onSubmit = (e: any) => {
  e.preventDefault();
  handleSubmit(async () => {
    rootStore.setLoading(true);
    try {
      const user = await Auth.signIn({
        username: values.loginId,
        password: values.password,
      });
      if (!user) {
        emit("error");
        return rootStore.showError("ログインに失敗しました。");
      }
      rootStore.setUser(user);
      emit("success");
    } catch (error: any) {
      const msg = error?.message || "ログインに失敗しました。";
      rootStore.showError(msg);
      emit("error");
    } finally {
      emit("finally");
      rootStore.setLoading(false);
    }
  })();
};
</script>

<script lang="ts">
export default {
  name: "ChangePasswordPage",
};
</script>
