<template>
  <v-layout>
    <v-main>
      <slot name="main" />
    </v-main>
  </v-layout>
</template>

<script lang="ts">
export default {
  name: "NonAuth",
  // state
  data() {
    return {};
  },
  methods: {},
};
</script>
