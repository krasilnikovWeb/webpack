import "@babel/polyfill";
import "./index.html";
import "./js/common.js";
import "./css/main.css";
import "./scss/main.scss";
/* import { Vue } from "vue"; */
/* import * as Vue from "vue"; */
import App from "./components/App.vue";
import { createApp } from "vue";
import { createStore } from "vuex";
/* import store from "./store/index.js"; */
import example from "./store/example.js";

export const eventBus = createApp(App);

const store = createStore({
  state: {
    text: "Webpack",
  },
  mutations: {},
  actions: {},
  getters: {
    getText(state) {
      return state.text;
    },
  },
});

createApp(App).use(store).mount("#app");

/* eventBus.use(store); */

/* export default new Vuex.Store({
  modules: {
    example,
  },
}); */
/* const app = new Vue({ store, el: "#app" }); */
/* window.Vue = require("vue");
Vue.component("example-component", require("./components/Example.vue").default); */
