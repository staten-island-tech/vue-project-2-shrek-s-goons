<template>
  <div></div>
</template>

<script>
import { useStore } from "vuex";
import Button from "../components/button.vue";
export default {
  components: Button,
  methods: {
    add: function () {
      console.log("yes");
    },
    updatePoints(points) {
      this.$store.commit("updatePoints", points);
    },
  },
  computed: {
    points() {
      return this.$store.state.points;
    },
  },
};
</script>

<style></style>
