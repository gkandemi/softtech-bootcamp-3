<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-8 offset-2 p-0 card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <span>Ürün Listesi</span>
          <router-link to="/new-product" class="btn btn-sm btn-primary">Ürün Ekle</router-link>
        </div>
        <div class="card-body">
          <table v-if="productList.length > 0" class="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Ürün Adı</th>
                <th scope="col">Kategori</th>
                <th scope="col">Fiyat</th>
                <th scope="col">Açıklama</th>
                <th scope="col">Sil</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in productList" :key="product.id">
                <th scope="row">{{ product.id }}</th>
                <td>{{ product.name }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.description }}</td>
                <td>
                  <button class="btn btn-sm btn-danger" @click="deleteItem(product)">Sil</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else class="alert alert-warning">
            Henüz eklenmiş bir ürün bulunmamaktadır..
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { appAxios } from "@/utils/appAxios";
export default {
  data() {
    return {
      productList: []
    };
  },
  mounted() {
    this.$appAxios.get("/products").then(product_list_response => {
      console.log(product_list_response);
      this.productList = product_list_response.data || [];
    });
  },
  methods: {
    deleteItem(product) {
      if (confirm("Bu işlem geri alınamayacaktır! Silmek istediğinizden emin misiniz?")) {
        this.$appAxios.delete(`/products/${product.id}`).then(delete_response => {
          console.log("delete_response :>> ", delete_response);
          if (delete_response.status === 200) {
            this.productList = this.productList.filter(p => p.id !== product.id);
          }
        });
      }
    }
  }
};
</script>
