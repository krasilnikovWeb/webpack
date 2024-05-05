import "@babel/polyfill";
import "./index.html";
import "./js/common.js";
import "./css/main.css";
import "./scss/main.scss";
/* import { Vue } from "vue"; */
/* import * as Vue from "vue"; */
import * as Vue from "vue";
import App from "./components/App.vue";

new Vue({
  el: "#app",
  render: (h) => h(App),
});

/* window.Vue = require("vue");
Vue.component("example-component", require("./components/Example.vue").default); */
