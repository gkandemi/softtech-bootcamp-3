<template>
  <div>
    <app-header />
    <app-header />
    <div class="container">
      <h1 class="text-center">{{ title }}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores
        incidunt est architecto amet necessitatibus autem sit doloribus
        obcaecati, laudantium excepturi ea, impedit vel sunt, consequuntur
        consequatur? Ea, eius labore.
      </p>
      <div class="row">
        <div class="col-2">
          <Counter />
        </div>
        <div class="col-2">
          <Counter />
        </div>
        <div class="col-2">
          <Counter />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "@/components/appHeader";
import Counter from "@/components/Counter";
export default {
  components: {
    // "my-header": appHeader,
    // appHeader : appHeader,
    appHeader,
    Counter,
  },
  data() {
    return {
      title: "Introduction to Vue CLI",
    };
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style>
h1 {
  color: purple;
}
</style>
