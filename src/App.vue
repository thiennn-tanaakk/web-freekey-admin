<template>
  <TheSnackbar />
  <LoadingPage />
  <router-view />
</template>

<script lang="ts">
import TheSnackbar from "@/components/atoms/TheSnackbar.vue";
import LoadingPage from "@/components/atoms/LoadingPage.vue";

export default {
  name: "App",
  components: {
    TheSnackbar,
    LoadingPage,
  },
};
</script>
