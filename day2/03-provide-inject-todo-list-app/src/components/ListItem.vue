<template>
  <li :class="itemClasses" class="list-group-item d-flex justify-content-between align-items-center">
    <div class="form-check">
      <input v-model="item.completed" class="form-check-input" type="checkbox" value="" :id="`todo_item_${item.id}`" />
      <label class="form-check-label" :for="`todo_item_${item.id}`">
        {{ item.text }}
      </label>
    </div>
    <button @click="deleteTodo(item)" class="btn btn-sm btn-danger">
      Sil
    </button>
  </li>
</template>
<script>
export default {
  props: ["todoItem"],
  data() {
    return {
      item: {}
    };
  },
  mounted() {
    this.item = this.todoItem;
  },
  computed: {
    itemClasses() {
      return {
        uncompleted: !this.item.completed,
        completed: this.item.completed
      };
    }
  }
};
</script>
<style>
.uncompleted {
  background-color: #dc354533;
}
.completed {
  background-color: #1987542b;
}
</style>
