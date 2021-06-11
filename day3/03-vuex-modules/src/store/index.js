import { createStore } from "vuex";
import customer from "./modules/customer";
const store = createStore({
  state: {
    appVersion: 1,
    appName: "VuexModules",
    appReleaseDate: "14-02-2021",
  },
  mutations: {
    initModules() {
      console.log("GLOBAL initModules");
    },
  },
  modules: {
    myCustomer: customer,
  },
});

export default store;
