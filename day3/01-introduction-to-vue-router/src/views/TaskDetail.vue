<template>
  <div>
    <pre>
    {{ $route.params.id }}
    {{ $route.params.content }}
    {{ taskDetail }}
  </pre
    >
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      taskDetail: null
    };
  },
  beforeRouteUpdate(to, from) {
    console.log(to, from);
    this.fetchTask(to.params.id);
  },
  methods: {
    fetchTask(taskID) {
      if (taskID) {
        axios.get(`http://localhost:3000/tasks/${taskID}`).then(task_response => {
          console.log(task_response);
          this.taskDetail = task_response.data;
        });
      }
    }
  },
  mounted() {
    console.log(this.$route);
    console.log(this.$route.params.content);
    console.log(this.$route.query.name);
    this.fetchTask(this.$route.params.id);
  }
};
</script>
