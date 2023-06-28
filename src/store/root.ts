import { defineStore } from "pinia";
import { Auth } from "aws-amplify";

const configs = {
  timeout: 3000,
};

export interface Message {
  id: number;
  message: string;
  color: string;
}

export interface User {
  username: string;
  challengeName: "SOFTWARE_TOKEN_MFA" | "MFA_SETUP" | "NEW_PASSWORD_REQUIRED";
}

export const useRootStore = defineStore({
  id: "root",
  state: () => ({
    loading: false,
    error: "",
    users: [] as User[],
    user: null as User | null,
    messages: [] as Message[],
    showsSnackbar: false,
  }),
  getters: {},
  actions: {
    $reset() {
      this.loading = false;
      this.error = "";
      this.users = [];
      this.user = null;
      this.messages = [];
      this.showsSnackbar = false;
    },
    setLoading(loading: boolean) {
      this.loading = loading;
    },
    // user
    async getUser() {
      this.loading = true;
      try {
        await Auth.currentAuthenticatedUser()
          .then((user) => {
            this.setUser(user);
          })
          .catch(console.error);
      } catch (error) {
        this.error = "Error getting user";
      } finally {
        this.loading = false;
      }
    },
    setUser(user: User) {
      this.user = user;
    },
    // alerts
    showSuccess(message: string) {
      const id = +new Date();
      this.messages = [
        ...this.messages,
        {
          id,
          message,
          color: "success",
        },
      ];
      setTimeout(() => {
        this.removeMessage(id);
      }, configs.timeout);
      this.showsSnackbar = true;
    },
    showError(message: string) {
      const id = +new Date();
      this.messages = [
        ...this.messages,
        {
          id,
          message,
          color: "error",
        },
      ];
      setTimeout(() => {
        this.removeMessage(id);
      }, configs.timeout);
      this.showsSnackbar = true;
    },
    removeMessage(id: number) {
      this.messages = this.messages.filter((m) => m.id !== id);
      this.showsSnackbar = this.messages.length > 0;
    },
  },
});
