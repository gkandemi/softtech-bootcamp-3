<template>
  <h1 class="bg-success text-white">GREEN Component</h1>
  <button class="btn btn-sm btn-danger" @click="$emit('change-tab-event', 'Red')">Sil..</button>
</template>
<script>
export default {
  mounted() {
    console.log("GREEN Mounted");
  }
};
</script>
