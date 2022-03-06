<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <img class="cardImage" :src="getImage" alt="" />
    <h3>${{ price }}</h3>
    <h4>Tier={{ tier }}</h4>
    <Button v-if="user" @button-click="$emit('add')">Add to Cart</Button>
  </div>
</template>

<script>
import Button from "../components/button.vue";
import useStore from "vuex";
import { computed } from "vuex";

export default {
  name: "Card",
  components: {
    Button: Button,
  },
  setup() {
    const store = useStore();
    return {
      user: computed(() => store.state.user),
    };
  },
  props: {
    title: String,
    price: Number,
    image: String,
    tier: String,
  },
  computed: {
    getImage: function () {
      return this.image;
    },
  },
};
</script>

<style>
.card {
  width: 25%;
  height: 300px;
  background-color: rgb(9, 65, 9);
  border: greenyellow 5px solid;
  text-align: center;
  padding: 15px;
  flex-direction: crow;
  justify-content: space-around;
  box-shadow: 0 1.5rem 4rem rgb(0, 0, 0);
  flex: wrap;
  flex-wrap: wrap;
  margin-top: 80px;
  border-radius: 50px;
}
.cardImage {
  max-width: 60px;
  object-fit: cover;
}

h1 {
  color: white;
}
</style>
