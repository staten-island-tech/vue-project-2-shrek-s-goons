<template>
  <div @click="updatePoints(5)" class="Image">
    <!-- <div class="overlay">
      <div class="text">Hello World</div>
    </div> -->
    <img
      src="https://cdn3.whatculture.com/images/2016/11/2b8e454952845957-600x338.jpg"
    />
  </div>
</template>

<script>
export default {
  name: "Clicker",
  methods: {
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
<style>

</style>
