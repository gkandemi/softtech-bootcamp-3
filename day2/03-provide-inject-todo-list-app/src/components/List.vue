<template>
  <ul v-if="provideData.todoList.length > 0" class="list-group">
    <list-item v-for="item in provideData.todoList" :key="item.id" :todoItem="item" />
  </ul>
  <div v-else class="alert alert-warning">
    Henüz eklenmiş bir ToDo bilgisi bulunmamaktadır..
  </div>
</template>
<script>
import ListItem from "./ListItem.vue";
export default {
  components: {
    ListItem
  },
  // props: ["items"],
  inject: ["provideData", "deleteTodo"]
};
</script>
