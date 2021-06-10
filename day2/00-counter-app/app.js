const app = Vue.createApp({});

app.component("counter-item", {
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    getCounterResult() {
      return this.counter < 0
        ? "Counter NEGATİF"
        : this.counter > 0
        ? "Counter POZİTİF"
        : "Counter SIFIR";
    },
    alertClasses() {
      return {
        "alert-success": this.counter > 0,
        "alert-danger": this.counter < 0,
        "alert-warning": this.counter === 0,
      };
    },
  },
  template: `
<div>
  <h1 class="text-center">{{ counter }}</h1>
  <button @click="counter++" class="w-100 mb-1 btn btn-sm btn-success"> + </button>
  <button @click="counter--" class="w-100 btn btn-sm btn-danger"> - </button>
  <div :class="alertClasses" class="mt-2 alert"> {{ getCounterResult }} </div>
</div>  
  `,
});

app.component("app-header", {
  template: `
        <header>Vue ile Component Kullanımı</header>
    `,
});

app.mount("#app");
