<template>
  <v-overlay v-model="props.show" class="d-flex align-center justify-center">
    <v-progress-circular indeterminate size="64" />
  </v-overlay>
</template>

<script setup lang="ts">
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
</script>
