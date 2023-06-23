<template>
  <v-overlay v-model="overlay" class="d-flex align-center justify-center">
    <v-progress-circular indeterminate size="64" />
  </v-overlay>
</template>

<script lang="ts">
export default {
  name: "LoadingPage",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      overlay: this.show,
    };
  },
};
</script>
