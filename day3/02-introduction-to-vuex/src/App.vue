<template>
  <div class="container pt-5">
    <h1>Vuex</h1>
    {{ fullName }}
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quam
      magnam, blanditiis consectetur qui debitis voluptatem tenetur facilis
      delectus hic laboriosam velit eligendi neque nemo possimus deleniti?
      Corporis, quidem vero.
    </p>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in petList" :key="item">
        {{ item }}
      </li>
    </ul>
    <pre>
      {{ currentUser }}
    </pre>
    <button
      class="btn btn-sm btn-danger me-2"
      @click="newPet(new Date().getTime())"
    >
      Yeni Can Dostu Ekle
    </button>
    <button
      class="btn btn-sm btn-danger"
      @click="addNewPet('PET ' + new Date().getTime())"
    >
      Yeni Can Dostu Ekle 2
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  mounted() {
    // console.log(this.$store.state.fullName);
    // console.log(this.$store.state.petList);
    // console.log(this.$store.state.user);
    console.log(this.$store.getters.getActiveUser);
  },
  methods: {
    ...mapMutations(["newPet"]),
    ...mapActions(["addNewPet"]),
    newItem() {
      // this.$store.state.petList.push(new Date().getTime());
      this.$store.commit("newPet", new Date().getTime());
    },
    newActionItem() {
      // this.$store.state.petList.push(new Date().getTime());
      this.$store.dispatch("addNewPet", "PET " + new Date().getTime());
    },
  },
  // computed: mapGetters(["_petList", "_getActiveUser"]),
  computed: {
    // ...mapGetters(["_petList", "_getActiveUser"]),
    ...mapGetters({
      petList: "_petList",
      currentUser: "_getActiveUser",
    }),
    // customComputed(){
    // }
  },
};
</script>
