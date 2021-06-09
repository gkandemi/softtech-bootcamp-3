const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    getCounterResult() {
      if (this.counter > 5) {
        return "Counter 5 den büyüktür";
      } else if (this.counter < 5) {
        return "Küçüktür";
      } else {
        return "Eşittir";
      }
      //   return this.counter > 5
      //     ? "Counter 5 den büyüktür"
      //     : this.counter < 5
      //     ? "Küçüktür"
      //     : "Eşittir";
    },
  },
});

app.mount("#app");
