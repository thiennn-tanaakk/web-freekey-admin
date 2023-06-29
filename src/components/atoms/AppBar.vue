<template>
  <v-app-bar
    color="background"
    light
    flat
    outlined
    app
    height="64px"
    :class="isBackBtn ? '' : 'pl-8 gray600--text'"
  >
    <slot />
    <v-divider v-if="isBackBtn" inset diinser vertical class="mx-4"></v-divider>
    <v-toolbar-title>
      <slot name="title" class="font-weight-bold"
        ><span class="font-weight-bold">{{ pageTitle }}</span></slot
      >
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <slot name="action"></slot>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
  isSystemList: {
    type: Boolean,
    default: false,
  },
  hasSearchParam: {
    type: Boolean,
    default: false,
  },
});

const pageTitle = computed(() => {
  const title = route.meta.title;
  if (typeof title === "function") {
    return title() || "";
  }
  return title || "";
});

const isBackBtn = computed(() => {
  if (props.isSystemList) {
    return false;
  }
  return !route.meta.showsSearchArea;
});
</script>
<style lang="scss" scoped>
.v-divider--inset {
  margin-top: 12px;
  height: 30px;
}
.v-btn__background {
  background-color: var(--v-quaternary-base);
}
:deep(.square.v-btn:not(.v-btn--round).v-size--default) {
  min-width: 36px;
  padding: 0px;
}
:deep(.searchArea) {
  margin-right: 60px;
}
</style>
