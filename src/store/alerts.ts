import { defineStore } from "pinia";

export interface Message {
  id: number;
  message: string;
  color: string;
}

/**
 * @name useAlertsStore
 * @description
 * This is a store for managing alerts.
 */
export const useAlertsStore = defineStore({
  id: "alerts",
  state: () => ({
    messages: [] as Message[],
    showsSnackbar: false,
  }),
  getters: {},
  actions: {
    $reset() {
      this.messages = [];
    },
    addMessage(message: string, color = "success") {
      const id = +new Date();
      this.messages = [
        ...this.messages,
        {
          id,
          message,
          color,
        },
      ];
      setTimeout(() => {
        this.removeMessage(id);
      }, 3000);
      this.showsSnackbar = true;
    },
    removeMessage(id: number) {
      this.messages = this.messages.filter((m) => m.id !== id);
      this.showsSnackbar = this.messages.length > 0;
    },
  },
});
