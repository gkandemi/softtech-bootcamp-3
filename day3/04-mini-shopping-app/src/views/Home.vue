<template>
  <div class="container">
    <product-list v-if="filteredProductList.length > 0" :items="filteredProductList" />
    <div v-else class="mt-5 alert alert-warning">Henüz eklenmiş bir ürün bulunmamaktadır</div>
  </div>
</template>
<script>
import ProductList from "@/components/appShared/appProductList";
import { mapGetters } from "vuex";
export default {
  components: {
    ProductList
  },
  data() {
    return {
      productList: []
    };
  },
  mounted() {
    this.$appAxios.get("/products").then(product_list_response => {
      this.productList = product_list_response.data || [];
    });
  },
  computed: {
    ...mapGetters(["_userCart"]),
    filteredProductList() {
      return this.productList.filter(p => !this._userCart.find(c => c.id === p.id));
    }
  }
};
</script>
