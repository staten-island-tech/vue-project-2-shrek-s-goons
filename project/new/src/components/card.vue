<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <img class="cardImage" :src="getImage" alt="" />
    <h4>Tier={{ tier }}</h4>
    <Button @button-click="$emit('add')" class="cartButton">{{ price }}</Button>
  </div>
</template>

<script>
import Button from "../components/button.vue";

export default {
  name: "Card",
  components: {
    Button: Button,
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
  width: 13%;
  height: 10%;
  background-color: rgb(9, 65, 9);
  border: greenyellow 5px solid;
  text-align: center;
  padding: 15px;
  flex-direction: collumn;
  box-shadow: 0 1.5rem 4rem rgb(0, 0, 0);
  margin-top: 80px;
  border-radius: 50px;
}
.cardImage {
  width: 40%;
  object-fit: cover;
}

.cartButton {
  object-fit: cover;
}

h1 {
  color: white;
}
</style>
