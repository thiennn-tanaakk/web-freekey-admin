<template>
  <v-snackbar
    v-model="store.showsSnackbar"
    timeout="-1"
    color="transparent"
    max-width="500"
    variant="text"
    left
  >
    <div class="d-flex flex-column">
      <div
        class="messagearea-inner mb-4"
        v-for="message in messages"
        :key="message.id"
      >
        <v-card class="d-flex align-center" :color="message.color">
          <div class="ml-2" v-html="message.message"></div>
          <v-spacer></v-spacer>
          <v-btn icon @click="noticeClose(message.id)" variant="plain">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card>
      </div>
    </div>
  </v-snackbar>
</template>

<script lang="ts">
import { useAlertsStore } from "@/store/alerts";
import { storeToRefs } from "pinia";

export default {
  name: "TheSnackbar",
  setup() {
    const store = useAlertsStore();
    return {
      store,
    };
  },
  data() {
    const store = useAlertsStore();
    const { messages } = storeToRefs(store);

    return {
      messages: messages,
      // showsSnackbar: store.showsSnackbar,
    };
  },
  methods: {
    noticeClose(id: number) {
      const store = useAlertsStore();
      store.removeMessage(id);
    },
  },
};
</script>
