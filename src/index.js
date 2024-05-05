import "@babel/polyfill";
import "./index.html";
import "./js/common.js";
import "./css/main.css";
import "./scss/main.scss";
/* import { Vue } from "vue"; */
/* import * as Vue from "vue"; */
import App from "./components/App.vue";
import { createApp } from "vue";

export const eventBus = createApp(App);

createApp(App).mount("#app");
/* window.Vue = require("vue");
Vue.component("example-component", require("./components/Example.vue").default); */
