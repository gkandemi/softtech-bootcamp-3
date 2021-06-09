const app = Vue.createApp({
  data() {
    return {
      itemList: ["Angular", "React", "Vue"],
      personal: {
        name: "Gokhan",
        lname: "Kandemir",
        email: "gokhan@puresol.io",
        age: 34,
      },
    };
  },
});

app.mount("#app");
