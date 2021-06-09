const app = Vue.createApp({
  data() {
    return {
      coordX: 0,
      coordY: 0,
      fullName: "Defne Kandemir",
    };
  },
  methods: {
    showAlert(message, evt) {
      console.log(evt);
      alert(message);
    },
    getClientCoords(evt) {
      //   console.log(evt.offsetX, evt.offsetY);
      this.coordX = evt.offsetX;
      this.coordY = evt.offsetY;
    },
    inputChanged(event) {
      //   console.log(event.target.value);
      this.fullName = event.target.value;
    },
  },
});

app.mount("#app");
