<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col text-center">
        <div class="mb-3">
          <button @click="activeComponent = 'red'" class="btn btn-danger btn-sm me-2">
            Red
          </button>
          <button @click="activeComponent = 'green'" class="btn btn-success btn-sm me-2">
            Green
          </button>
          <button @click="activeComponent = 'blue'" class="btn btn-primary btn-sm">
            Blue
          </button>
        </div>

        <keep-alive>
          <component :is="activeComponent" customText="Bu benim custom textim.." @change-tab-event="activeComponent = $event" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import Red from "@/components/Red";
import Green from "@/components/Green";
import Blue from "@/components/Blue";
export default {
  components: {
    Red,
    Green,
    Blue
  },
  data() {
    return {
      activeComponent: "red"
    };
  }
};
</script>
