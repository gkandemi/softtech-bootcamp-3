<template>
  <h1 class="bg-danger text-white">RED {{ customText }}</h1>
  <input type="text" />
</template>
<script>
export default {
  //   props: ["customText"],
  props: {
    customText: {
      type: String,
      required: false,
      default: "Component"
    }
  },
  mounted() {
    console.log("RED Mounted");
  },
  activated() {
    console.log("RED Activated");
  },
  deactivated() {
    console.log("RED Deactivated");
  }
};
</script>
