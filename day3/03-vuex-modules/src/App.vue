<template>
  <div class="container pt-2">
    <h3>Vuex Modules</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
      laudantium provident sed recusandae neque accusantium at! Quod et
      voluptatibus nulla soluta ipsam vero iusto expedita quo totam. Excepturi,
      nam atque.
    </p>

    <pre>
      {{ $store }}
    </pre>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.commit("initModules");
    this.$store.commit("myCustomer/initModules");
  },
};
</script>
