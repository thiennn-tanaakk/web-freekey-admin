<template>
  <div>
    <QRCodeVue3 :value="qrString" />
  </div>
  <v-btn class="my-8" block color="info" type="button" @click="onSubmit">
    DONE
  </v-btn>
</template>

<script setup lang="ts">
import QRCodeVue3 from "qrcode-vue3";

import { useRootStore } from "@/store/root";

defineProps({
  qrString: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["success", "error", "finally"]);

// store
const rootStore = useRootStore();

// vee-validate

// state
// methods
const onSubmit = () => {
  rootStore.setLoading(true);
  try {
    // setup TOTP
    emit("success");
  } catch (error: any) {
    const msg = error?.message || "ログインに失敗しました。";
    rootStore.showError(msg);
    emit("error", error);
  } finally {
    rootStore.setLoading(false);
    emit("finally");
  }
};
</script>
