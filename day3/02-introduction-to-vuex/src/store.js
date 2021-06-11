import { createStore } from "vuex";

const store = createStore({
  state: {
    fullName: "Gökhan Kandemir",
    companyName: "PureSOL",
    petList: ["Poğaça", "Larissa", "Küpeli"],
    user: {
      name: "gokhan",
      lname: "kandemir",
      username: "gkandemir",
      img: "...",
      password: "myPassword",
    },
  },
  mutations: {
    newPet(state, pet) {
      state.petList.push(pet);
    },
  },
  actions: {
    addNewPet({ commit }, pet) {
      setTimeout(() => {
        commit("newPet", pet);
      }, 1250);
    },
  },
  getters: {
    _getActiveUser(state) {
      return {
        name: state.user.name,
        lname: state.user.lname,
        username: state.user.username,
        img: state.user.img,
      };
    },
    _petList: (state) => state.petList,
  },
});

export default store;
