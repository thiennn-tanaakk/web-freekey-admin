import { createApp } from "vue";
import "./style.scss";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import router from "./routes";
import AppVue from "./App.vue";
import pinia from "./plugins/pinia";

// Plugins
import "@/plugins/veeValidate";
import "@/plugins/amplify";
import "@/plugins/dayjs";
import vuetify from "@/plugins/vuetify";

const app = createApp(AppVue);

app.use(router).use(pinia).use(vuetify).mount("#app");
