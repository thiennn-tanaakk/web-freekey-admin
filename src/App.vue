<template>
  <the-snackbar />
  <router-view />
</template>

<script lang="ts">
import TheSnackbar from "./components/atoms/TheSnackbar.vue";
export default {
  name: "App",
  components: { TheSnackbar },
};
</script>
