import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import router from "./router/router";
import store from "./store/index";

// Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
