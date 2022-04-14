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
/* .Image:hover .overlay {
  opacity: 1;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #008cba;
}
.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
} */
</style>
