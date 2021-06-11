<template>
  <h1>Anasayfa</h1>
  <input type="text" class="form-control" @keydown.enter="showDetails" />
</template>
<script>
export default {
  methods: {
    showDetails(e) {
      //   e.target.value
      //   this.$router.push("/contact");
      //   this.$router.push({ name: "Contact" });
      //   this.$router.push("/task/555/singlepageapp?name=depde");
      this.$router.push({
        name: "TaskDetail",
        params: {
          id: e.target.value,
          content: "İflasettin"
        },
        query: {
          name: "softtech"
        }
      });
    }
  }
};
</script>
