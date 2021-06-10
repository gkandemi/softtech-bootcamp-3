<template>
  <List :items="items" @delete-item-event="$emit('delete-item-event', $event)" />
  <Summary />
</template>
<script>
import List from "@/components/List";
import Summary from "@/components/ListSectionSummary";
export default {
  props: ["info", "fullName", "items"],
  components: {
    Summary,
    List
  }
};
</script>
