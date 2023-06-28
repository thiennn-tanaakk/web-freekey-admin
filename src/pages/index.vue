<template>
  <Auth>
    <template #main> {{ user?.username }} </template>
  </Auth>
</template>

<script lang="ts">
import Auth from "@/components/templates/Auth.vue";
import { useRootStore } from "@/store/root";
import { storeToRefs } from "pinia";

export default {
  name: "App",
  components: {
    Auth,
  },
  // state
  data() {
    const rootStore = useRootStore();
    const { user } = storeToRefs(rootStore);
    return {
      user,
    };
  },
  methods: {},
};
</script>
