import { createApp } from "vue";
import "./style.scss";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { ja } from "vuetify/locale";

import router from "./routes";
import AppVue from "./App.vue";
import pinia from "./plugins/pinia";

// Plugins
import "@/plugins/veeValidate";
import "@/plugins/vuetify";
import "@/plugins/amplify";

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: "ja",
    fallback: "ja",
    messages: { ja },
  },
});

const app = createApp(AppVue);

app.use(router).use(pinia).use(vuetify).mount("#app");
