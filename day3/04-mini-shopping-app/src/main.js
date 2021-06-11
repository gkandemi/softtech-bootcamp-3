import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import appNavbar from "@/components/appShared/appNavbar";
import store from "./store";
import { appAxios } from "@/utils/appAxios";

const app = createApp(App);
app.component("appNavbar", appNavbar);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");
