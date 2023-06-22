<template>
  <Auth>
    <template #main> About </template>
  </Auth>
</template>

<script lang="ts">
import Auth from "@/components/templates/Auth.vue";

export default {
  name: "About",
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
