<template>
  <div>
    <h1 class="text-center">{{ counter }}</h1>
    <button @click="counter++" class="w-100 mb-1 btn btn-sm btn-success">
      +
    </button>
    <button @click="counter--" class="w-100 btn btn-sm btn-danger">-</button>
    <div :class="alertClasses" class="mt-2 alert">{{ getCounterResult }}</div>
  </div>
</template>

<script>
export default {
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
};
</script>
