<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-6 offset-3 p-0 card">
        <div class="card-header">Yeni Ürün Ekle</div>
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label">Ürünün Adı</label>
            <input type="text" class="form-control" v-model="userData.name" placeholder="ürünün adını giriniz..." />
          </div>
          <div class="mb-3">
            <label class="form-label">Ürünün Fiyatı</label>
            <input type="text" class="form-control" v-model="userData.price" placeholder="ürünün fiyatını giriniz..." />
          </div>
          <div class="mb-3">
            <label class="form-label">Kategori</label>
            <select class="form-select" v-model="userData.category">
              <option v-for="c in categoryOptions" :key="c.id" :value="c.value">{{ c.text }}</option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label">Açıklama</label>
            <textarea class="form-control" v-model="userData.description" rows="3"></textarea>
          </div>
          <div class="d-flex justify-content-end align-items-center">
            <button class="btn btn-sm btn-secondary me-1" @click="cancel">İptal</button>
            <button class="btn btn-sm btn-primary" @click="onSave">Kaydet</button>
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
      categoryOptions: [
        { value: "mobilya", text: "Mobilya", id: 1 },
        { value: "elektronik", text: "Elektronik", id: 2 },
        { value: "teknoloji", text: "Teknoloji", id: 3 }
      ],
      userData: {
        name: null,
        price: 0,
        category: "",
        description: null
      }
    };
  },
  methods: {
    onSave() {
      if (confirm("Kayıt yapmak istiyor musunuz?")) {
        this.$appAxios.post("/products", this.userData).then(response => {
          console.log(response);
          if (response.status === 201) {
            this.$router.push("/product-list");
          }
        });
      }
    },
    cancel() {
      this.$router.push("/product-list");
    }
  }
};
</script>
