import { createApp } from "vue";
import App from "./App.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Prices from "./components/Prices.vue";
import Contacts from "./components/Contacts.vue";
import Fueling from "./components/Fueling.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/prices", component: Prices },
  { path: "/contacts", component: Contacts },
  { path: "/fueling", component: Fueling },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(vuetify)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
