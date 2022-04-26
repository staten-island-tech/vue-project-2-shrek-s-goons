<template>
  <button @click="updatePoints(5), audio()" class="BTN">
  <img class="ROCK"
      src="https://res.cloudinary.com/teepublic/image/private/s--yCiRU3FK--/c_crop,x_10,y_10/c_fit,w_830/c_crop,g_north_west,h_1038,w_1038,x_-104,y_-128/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-215,y_-239/b_rgb:000000/c_limit,f_jpg,h_630,q_90,w_630/v1588017884/production/designs/9553847_0.jpg"
    />
  </button>
</template>

<script>
export default {
  name: "Clicker",
  methods: {
    updatePoints(points) {
      this.$store.commit("updatePoints", points);
    },
    audio(){
      console.log("YO");
    }
  },
  computed: {
    points() {
      return this.$store.state.points;
    },
  },
};
</script>
<style>
.ROCK{
  height: 400px;
}
.BTN {
  margin-left: 200px;
  font-size: 20px;
  border-radius: 20px;
  border: white solid 4px;
  background-color: white;
  transition: 0.5s;
}
.BTN:hover {
  transform: scale(1.1);
}
.BTN:active {
  transform: scale(0.9);
}
</style>
