<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        color="primary"
        class="menu"
        ref="nav"
        :width="275"
        app
        permanent
      >
        <v-list :opened="open" class="d-flex flex-column h-100">
          <!-- admin menu -->
          <span v-for="items in navigationMenuItems" :key="items.title">
            <NavigationMenuItem :menuItem="items" />
          </span>
          <v-list-item
            prepend-icon="mdi-logout"
            title="ログアウト"
            link
            class="mb-0 px-4 mt-auto"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <AppBar />
        <slot name="main" />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { Auth } from "aws-amplify";
import { useRootStore } from "@/store/root";
import router, { RouteName } from "@/routes";

import AppBar from "../atoms/AppBar.vue";
import NavigationMenuItem from "@/components/molecules/NavigationMenuItem.vue";

import { navigationMenuItems } from "@/utils/constants";

const rootStore = useRootStore();

export default {
  name: "Auth",
  components: {
    NavigationMenuItem,
    AppBar,
  },
  data() {
    return {
      minimizesNavigationDrawer: false,
      open: [],
    };
  },
  computed: {
    navigationMenuItems() {
      return navigationMenuItems;
    },
  },
  methods: {
    navigateTo(path: string) {
      this.$router.push(path);
    },
    async logout() {
      rootStore.setLoading(true);
      await Auth.signOut();
      rootStore.$reset();
      rootStore.showSuccess("Logged out");
      rootStore.setLoading(false);
      router.push({ name: RouteName.LOGIN });
    },
  },
};
</script>

<style lang="scss" scoped>
.menu::-webkit-scrollbar {
  display: none;
}
</style>
