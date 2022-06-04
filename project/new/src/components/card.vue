<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <img
      v-if="purchased"
      class="cardImage"
      src="https://thumbs.dreamstime.com/b/red-no-symbol-icon-shape-print-stop-sign-ban-isolated-white-background-134319752.jpg)"
      alt=""
    />
    <img v-else class="cardImage" :src="getImage" alt="" />
    <h4>Tier={{ tier }}</h4>
    <Button
      v-if="user && purchased === false"
      @button-click="$emit('remove', 'click')"
      class="cartButton"
      >{{ price }}</Button
    >
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
    purchased: Boolean,
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
  background-color: rgb(11, 116, 11);
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
