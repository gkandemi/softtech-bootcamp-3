<template>
  <small class="text-danger mt-1 d-flex justify-content-end">{{ uncompletedTasksCount }} adet tamamlanmamış todo vardır..</small>
  <small class="text-success mt-1 d-flex justify-content-end">{{ completedTasksCount }} adet tamamlanmış todo vardır..</small>
  <small class="font-weight-bold mt-1 d-flex justify-content-end">Toplam {{ totalCount }} adet todo vardır..</small>
</template>
<script>
export default {
  inject: ["provideData"],
  computed: {
    completedTasksCount() {
      return this.provideData.todoList.filter(t => t.completed).length || 0;
    },
    uncompletedTasksCount() {
      return this.provideData.todoList.filter(t => !t.completed).length || 0;
    },
    totalCount() {
      return this.provideData.todoList.length || 0;
    }
  }
};
</script>
