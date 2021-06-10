<template>
  <List />
  <Summary />
</template>
<script>
import List from "@/components/List";
import Summary from "@/components/ListSectionSummary";
export default {
  components: {
    Summary,
    List
  }
};
</script>
