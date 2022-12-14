import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HomePage from "./components/HomePage.vue";
import LoginPage from "./components/LoginPage.vue";

import { store } from "./store/store";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
Vue.use(VueRouter);

// Setting path with Router
const routes = [
  { name: "LoginPage", path: "/", component: LoginPage },
  { name: "HomePage", path: "/home", component: HomePage },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  store: store,
  render: (h) => h(App),
  router,
}).$mount("#app");
