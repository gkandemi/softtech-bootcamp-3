const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {},
  computed: {
    getCounterResult() {
      console.log("Counter Çalıştı...");
      if (this.counter > 5) {
        return "Counter 5 den büyüktür";
      } else if (this.counter < 5) {
        return "Küçüktür";
      } else {
        return "Eşittir";
      }
    },
    getCounterResult2() {
      console.log("Counter 2 Çalıştı...");
      if (this.counter2 > 5) {
        return "Counter2 5 den büyüktür";
      } else if (this.counter2 < 5) {
        return "Küçüktür";
      } else {
        return "Eşittir";
      }
    },
  },
  watch: {
    counter(newValue, oldValue) {
      console.log(oldValue, newValue);
    },
    getCounterResult(newVal, oldVal) {
      console.log(newVal);
    },
  },
});

app.mount("#app");
