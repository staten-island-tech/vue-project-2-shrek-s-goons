<template>
  <div></div>
</template>

<script>
import Button from "../components/button.vue";
export default {
  components: Button,
  setup() {
    const yes = "yes";
    console.log(store.state.user);
    store.commit("setUser", "yoshi");
    return {
      yes,
    };
  },
  methods: {},
  computed: {
    points() {
      return this.$store.state.points;
    },
  },
};
</script>

<style></style>
