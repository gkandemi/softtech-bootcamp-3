<template>
  <ul v-if="items.length > 0" class="list-group">
    <li v-for="item in items" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
      <span>{{ item.text }}</span>
      <button @click="$emit('delete-item-event', item)" class="btn btn-sm btn-danger">
        Sil
      </button>
    </li>
  </ul>
  <div v-else class="alert alert-warning">
    Henüz eklenmiş bir ToDo bilgisi bulunmamaktadır..
  </div>
</template>
<script>
export default {
  props: ["items"]
};
</script>
