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
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <slot name="main" />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
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
  },
};
</script>
