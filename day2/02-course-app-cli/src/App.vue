<template>
  <div>
    <app-header />
    <div class="container">
      <div class="row mt-5">
        <div class="col-4 offset-4 card p-0">
          <div class="card-header">TodoList</div>
          <div class="card-body">
            <AddSection @add-item-event="addTodo" />
            <ListSection
              :items="todoList"
              :info="myText"
              fullName="Felakettin Köseoğlu"
              @delete-item-event="deleteTodo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddSection from "@/components/AddSection";
import ListSection from "@/components/ListSection";
export default {
  components: {
    AddSection,
    ListSection,
  },
  data() {
    return {
      myText: "bu değer app.vue dosyası tarafından gönderilmiştir..",
      todoList: [
        { id: 1, text: "Todo1", completed: false },
        { id: 2, text: "Todo2", completed: false },
        { id: 3, text: "Todo3", completed: false },
        { id: 4, text: "Todo4", completed: false },
      ],
    };
  },
  methods: {
    addTodo(event) {
      this.todoList.push(event);
    },
    deleteTodo(todo) {
      this.todoList = this.todoList.filter((t) => t !== todo);
    },
  },
  mounted() {
    setTimeout(() => {
      this.todoList.push({
        id: 5,
        text: "Todo5",
        completed: false,
      });
    }, 3000);
  },
};
</script>
