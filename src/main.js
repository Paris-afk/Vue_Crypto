import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "./assets/app.css";
import router from "@/router";
import { dollarFilter } from "@/filter";
import { percentFilter } from "./filter";
import { VueSpinners } from "@saeris/vue-spinners";

//aqui ponemos el nombre del filtro y la funcion que ejecutará
Vue.use(VueSpinners);
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
