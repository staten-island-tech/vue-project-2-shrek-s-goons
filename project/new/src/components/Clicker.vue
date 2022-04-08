<template>
  <div @click="updatePoints(5)" id="farquaad">
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
<style scoped>
#farquaad {
  position: relative;
  border-radius: 5rem;
}

#farquaad:hover {
  background-image: url(https://media.prusaprinters.org/media/prints/121034/images/1172473_dda63251-6fae-4e99-bf24-14ab1995ec16/thumbs/cover/1280x960/png/shrekbotton_2022-jan-19_02-30-43pm-000_customized.webp)
    no-repeat;
}
</style>
