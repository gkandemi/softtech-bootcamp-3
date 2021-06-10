<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-4 offset-4 card p-0">
        <div class="card-header">TodoList</div>
        <div class="card-body">
          <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="todoText" />
            <button class="btn btn-sm btn-outline-primary" @click="addTodo">Ekle</button>
          </div>
          <ul class="list-group">
            <li v-for="item in itemList" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
              <span>{{ item.text }}</span>
              <button @click="deleteItem(item)" class="btn btn-sm btn-danger">Sil</button>
            </li>
          </ul>
          <small class="mt-1 d-flex justify-content-end">{{ itemList.length }} adet todo vardır..</small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      todoText: null,
      itemList: []
    };
  },
  mounted() {
    axios.get("http://localhost:3000/tasks").then(response => {
      this.itemList = response.data || [];
    });
  },
  methods: {
    addTodo() {
      axios.post("http://localhost:3000/tasks", { text: this.todoText, created_at: new Date() }).then(response => {
        console.log("response :>> ", response);
        this.itemList.push(response.data);
        this.todoText = null;
      });
    },
    deleteItem(item) {
      axios.delete(`http://localhost:3000/tasks/${item.id}`).then(response => {
        console.log(response);
        if (response.status === 200) {
          this.itemList = this.itemList.filter(i => i !== item);
        }
      });
    }
  }
};
</script>
