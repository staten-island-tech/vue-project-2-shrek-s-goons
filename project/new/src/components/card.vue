<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <img class="cardImage" :src="getImage" alt="" />
    <h4>Tier={{ tier }}</h4>
    <Button v-if="user" @button-click="$emit('remove')" class="cartButton">{{
      price
    }}</Button>
  </div>
</template>

<script>
import Button from "../components/button.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  name: "Card",
  setup() {
    const any = ref([]);
    const store = useStore();

    return {
      any,
      user: computed(() => store.state.user),
    };
  },
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
  width: 80%;
  height: 40rem;
  background-color: rgb(9, 65, 9);
  border: greenyellow 0.5rem solid;
  text-align: center;
  box-shadow: 0 1.5rem 4rem rgb(0, 0, 0);
  margin-top: 8rem;
  border-radius: 5rem;
  margin-left: 5rem;
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

// either we put an index system for each button created or we add a property to
each tier
