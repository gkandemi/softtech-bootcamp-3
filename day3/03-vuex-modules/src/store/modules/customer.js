export default {
  namespaced: true,
  state: {
    customerName: "PureSOL",
    customerID: "123123",
  },
  mutations: {
    initModules() {
      console.log("Customer initModules");
    },
  },
  actions: {},
  getters: {},
};
