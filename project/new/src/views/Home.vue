<template>
  <div>
    <Button @button-click="add">{{ points }}</Button>
  </div>
</template>

<script>
import Button from "../components/button.vue";
export default {
  components: Button,
  methods: {
    add: function () {
      console.log("yes");
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
