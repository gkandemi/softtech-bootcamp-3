const app = Vue.createApp({
  data() {
    return {
      itemText: null,
      searchText: null,
      itemList: [] || ["Elma", "Armut", "Kiraz"],
    };
  },
  methods: {
    addItem() {
      this.itemList.push(this.itemText);
      this.itemText = null;
    },
  },
  computed: {
    filteredItems() {
      return this.itemList.filter((i) => i.includes(this.searchText));
    },
    itemCount() {
      return this.itemList.length + " adet kayıt vardır";
    },
  },
});

app.mount("#app");
