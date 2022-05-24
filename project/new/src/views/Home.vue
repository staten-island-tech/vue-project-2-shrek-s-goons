<template>
  <div>
    <Clicker class="moneyAdder" />
    <h2 class="points">Balance: ${{ points }}</h2>
    <div class="mainOrder">
      <Card
        v-for="(characters, index) in shrekCharacters"
        :key="index"
        :title="characters.name"
        :price="characters.price"
        :tier="characters.tier"
        :image="characters.image"
        :additiveValue="characters.characterAdditiveValue"
        @remove="removePoints(index)"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/card.vue";
import Clicker from "../components/Clicker.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  name: "Home",
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
      if (this.points >= this.shrekCharacters[index].price) {
        this.$store.commit("updatePoints", -this.shrekCharacters[index].price);
        this.shrekCharacters[index].image =
          "https://thumbs.dreamstime.com/b/red-no-symbol-icon-shape-print-stop-sign-ban-isolated-white-background-134319752.jpg";
        this.$store.commit(
          "setAdditiveValue",
          +this.shrekCharacters[index].characterAdditiveValue
        );
        this.shrekCharacters[index].price = 0;
      } else {
        alert("Shrek Says Get More Cash");
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
