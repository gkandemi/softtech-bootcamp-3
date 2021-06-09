const app = Vue.createApp({
  data() {
    return {
      todoValue: null,
      todoList: [],
    };
  },
  methods: {
    addItem() {
      this.todoList.push({
        id: new Date().getTime(),
        text: this.todoValue,
        completed: false,
      });
      this.todoValue = null;
    },
    deleteItem(item) {
      //   console.log(item);
      //   this.todoList = this.todoList.filter((i) => i !== item);
      this.todoList = this.todoList.filter((i) => i.id !== item.id);
    },
  },
});

app.mount("#app");
