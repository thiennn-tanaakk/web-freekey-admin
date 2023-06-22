<template>
  <Auth>
    <template #main> Home </template>
  </Auth>
</template>

<script lang="ts">
import Auth from "@/components/templates/Auth.vue";

export default {
  name: "App",
  components: {
    Auth,
  },
  // state
  data() {
    return {};
  },
  methods: {},
};
</script>
