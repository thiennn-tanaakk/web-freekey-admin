<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer floating permanent>
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            :active="'/' === $route.path"
            title="Home"
            value="home"
            @click="navigateTo('/')"
          />
          <v-list-item
            prepend-icon="mdi-forum"
            :active="'/about' === $route.path"
            title="About"
            value="about"
            @click="navigateTo('/about')"
          />
          <v-list-item
            class="mt-auto h-100"
            prepend-icon="mdi-logout"
            title="Logout"
            value="logout"
            @click="logout"
          />
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <slot name="main" />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { Auth } from "aws-amplify";
import { useRootStore } from "@/store/root";
import router, { RouteName } from "@/routes";

const rootStore = useRootStore();

export default {
  name: "Auth",
  // state
  data() {
    return {};
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
