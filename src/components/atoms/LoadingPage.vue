<template>
  <v-overlay v-model="loading" class="d-flex align-center justify-center">
    <v-progress-circular indeterminate size="64" />
  </v-overlay>
</template>

<script lang="ts">
import { useRootStore } from "@/store/root";
import { storeToRefs } from "pinia";

export default {
  name: "LoadingPage",
  data() {
    const rootStore = useRootStore();
    const { loading } = storeToRefs(rootStore);
    return {
      loading,
    };
  },
};
</script>
