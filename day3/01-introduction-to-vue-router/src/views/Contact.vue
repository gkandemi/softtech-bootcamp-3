<template>
  <div>
    <h1>İletişim</h1>
    <div class="mb-3">
      <label class="form-label">E-mail adresi</label>
      <input v-model="email" type="email" class="form-control" placeholder="name@example.com" />
    </div>
    <div class="mb-3">
      <label class="form-label">Açıklama</label>
      <textarea v-model="description" class="form-control" rows="3"></textarea>
    </div>
    <div class="mb-3">
      <button class="w-100 btn btn-sm btn-primary" @click="onSave">Kaydet</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      description: null
    };
  },
  methods: {
    onSave() {
      if (this.email !== null && this.description !== null) {
        this.$router.push("/");
      } else {
        alert("Lütfen eksik bilgileri doldurunuz..");
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    if (this.email !== null && this.description !== null) {
      next(true);
    } else {
      const selection = confirm("Kaydedilmemiş değişiklikleriniz var! Yine de çıkma istiyor musunuz?");
      next(selection);
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("BeforeRouteEnter...");
    console.log(to, from);
    next();
  },
  beforeCreate() {
    console.log("Before Create...");
  },
  created() {
    console.log("Created...");
  },
  mounted() {
    console.log("Mounted...");
  }
};
</script>
