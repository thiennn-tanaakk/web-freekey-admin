<template>
  <v-list-item
    v-if="!menuItem?.children"
    :prepend-icon="menuItem?.icon"
    :title="menuItem?.title"
  />
  <v-list-group
    v-else
    :prepend-icon="isMenuOpen ? 'mdi-menu-right' : 'mdi-menu-down'"
    :value="menuItem?.title"
    collapse-icon=""
    expand-icon=""
    @click.stop="
      () => {
        isMenuOpen = !isMenuOpen;
      }
    "
  >
    <template v-slot:activator="{ props }">
      <v-list-item v-bind="props" :title="menuItem?.title"></v-list-item>
    </template>
    <v-divider />
    <NavigationMenuItem
      v-for="item in menuItem?.children"
      :key="item.title"
      :menuItem="item"
    />
    <v-divider />
  </v-list-group>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type { MenuItem } from "../../utils/constants";

export default {
  name: "NavigationMenuItem",
  props: {
    menuItem: Object as PropType<MenuItem>,
  },
  data() {
    return {
      isMenuOpen: true,
    };
  },
};
</script>

<style scoped lang="scss">
@use "@/styles/settings.scss";
:deep(.v-list-group__items) {
  display: block;
  $list-subheader-inset-padding-start: 0px;
}
</style>
