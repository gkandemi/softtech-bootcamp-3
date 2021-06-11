<template>
  <div class="container">
    <product-list v-if="_userCart.length > 0" :items="_userCart" />
    <div v-else class="mt-5 alert alert-warning">Sepetinizde henüz eklenmiş bir ürün bulunmamaktadır</div>
  </div>
</template>
<script>
import ProductList from "@/components/appShared/appProductList";
import { mapGetters } from "vuex";
export default {
  components: {
    ProductList
  },
  computed: {
    ...mapGetters(["_userCart"])
  }
};
</script>
