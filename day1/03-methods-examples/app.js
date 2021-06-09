const app = Vue.createApp({
  data() {
    return {
      title: "Softtech Akademi | Bilginç Akademi | kablosuzkedi",
      items: ["gökhan", "defne", "handan"],
      newItemText: null,
    };
  },
  methods: {
    getSlicedItems(start, finish) {
      return this.items.slice(start, finish);
    },
    formatter() {
      return this.items.map((i) => "###-" + i + "-###");
    },
    myEvent(evt) {
      console.log(evt);
      if (evt.keyCode === 13) {
        this.items.push(evt.target.value);
      }
    },
  },
});

app.mount("#app");
