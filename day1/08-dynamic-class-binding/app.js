const app = Vue.createApp({
  data() {
    return {
      boxClass: "red",
      amount: 0,
      customerBalance: 100,
    };
  },
  computed: {
    customerInputClasses() {
      return {
        balanceError: this.amount > this.customerBalance,
        balanceSuccess: this.amount <= this.customerBalance,
      };
    },
  },
});

app.mount("#app");
