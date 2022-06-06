<template>
  <div class="main-page-content">
    <div class="sidebar">
      <h2 class="points">Balance: ${{ points }}</h2>
      <div class="mainOrder">
        <Card
          v-for="(character, index) in shrekCharacters"
          :key="index"
          :title="character.name"
          :price="character.price"
          :tier="character.tier"
          :image="character.image"
          :purchased="character.purchased"
          @remove="removePoints(index)"
          @click="loggyness()"
        />
      </div>
    </div>
    <div class="clicker-container">
      <Clicker class="moneyAdder" />
    </div>
  </div>
</template>

<script>
import Card from "../components/card.vue";
import Clicker from "../components/Clicker.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  name: "Shop",
  components: {
    Card,
    Clicker,
  },
  setup() {
    const any = ref([]);
    const store = useStore();
    return {
      any,
      shrekCharacters: computed(() => store.state.shrekCharacters),
    };
  },

  methods: {
    //When click on button that appears after user has logged in, if price is greater than store.state.points, subtract the price from store.state.points and then change picture.This will then change the click value of the main button to add more.
    removePoints(index) {
      const character = this.shrekCharacters[index];
      if (character.purchased === false && this.points >= character.price) {
        this.$store.dispatch("purchaseItem", { itemIndex: index });
      } else {
        alert("Shrek Says Get More Cash");
      }
    },
    loggyness() {
      console.log("Hi, I'm a random log");
    },
  },

  computed: {
    points() {
      return this.$store.state.points;
    },
  },
};
</script>
