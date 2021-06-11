<template>
  <div class="mb-5 col-3">
    <div class="card" style="width: 18rem">
      <img :src="`https://picsum.photos/200?random=${item.id}`" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ item.name }}</h5>
        <p class="card-text">{{ item.description }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <a v-if="$route.name === 'Home'" class="btn btn-primary" @click="addToCart(item)">Sepete Ekle</a>
          <a v-if="$route.name === 'Cart'" class="btn btn-danger" @click="removeFromCart(item)">Sepetten Çıkar</a>
          <h5 class="card-title text-right">{{ itemPrice }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["item"],
  methods: {
    ...mapMutations(["addToCart", "removeFromCart"])
  },
  computed: {
    itemPrice() {
      return `${parseFloat(this.item.price).toFixed(2)}₺` || "-";
    }
  }
};
</script>
