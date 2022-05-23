<template>
  <button @click="updatePoints(this.additiveValue)" class="BTN">
    <img
      class="ROCK"
      src="https://res.cloudinary.com/teepublic/image/private/s--yCiRU3FK--/c_crop,x_10,y_10/c_fit,w_830/c_crop,g_north_west,h_1038,w_1038,x_-104,y_-128/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-215,y_-239/b_rgb:000000/c_limit,f_jpg,h_630,q_90,w_630/v1588017884/production/designs/9553847_0.jpg"
    />
  </button>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  name: "Clicker",
  setup() {
    const any = ref([]);
    const store = useStore();

    return {
      any,
      user: computed(() => store.state.user),
      additiveValue: computed(() => store.state.additiveValue),
    };
  },
  methods: {
    updatePoints(points) {
      if (this.user) {
        this.$store.commit("updatePoints", points);
      } else {
        alert("Shrek Says Log In First");
      }
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
.ROCK {
  height: 500px;
}
.BTN {
  margin-left: 175px;
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
