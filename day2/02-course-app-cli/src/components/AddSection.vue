<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" v-model="todoText" />
    <button class="btn btn-sm btn-outline-primary" @click="addTodo">
      Ekle
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoText: null,
    };
  },
  methods: {
    addTodo() {
      this.$emit("add-item-event", {
        id: new Date().getTime(),
        text: this.todoText,
        completed: false,
      });
      this.todoText = null;
    },
  },
};
</script>
