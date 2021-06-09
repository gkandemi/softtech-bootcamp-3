const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      customerList: [],
    };
  },
  beforeCreate() {
    console.log("beforeCreate Çalıştı...");
  },
  created() {
    console.log("created Çalıştı...");
  },
  beforeMount() {
    console.log("beforeMount Çalıştı...");
  },
  mounted() {
    console.log("mounted Çalıştı...");
    setTimeout(() => {
      this.customerList = ["Ahmet", "Felakettin", "iflasettin"];
    }, 1500);
    // setTimeout(() => {
    //   setInterval(() => {
    //     this.counter++;
    //   }, 1000);
    // }, 3000);
  },
  beforeUpdate() {
    console.log("beforeUpdate Çalıştı...");
  },
  updated() {
    console.log("updated Çalıştı...");
  },
  beforeUnmount() {},
  unmounted() {},
});

app.mount("#app");
