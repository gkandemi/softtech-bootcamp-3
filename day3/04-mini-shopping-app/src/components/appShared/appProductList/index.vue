<template>
  <div class="row mt-5">
    <list-item v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import ListItem from "@/components/appShared/appProductListItem";
export default {
  props: {
    items: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  components: {
    ListItem
  }
};
</script>
