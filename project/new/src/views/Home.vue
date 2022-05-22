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
        @remove="removeCard(index)"
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

  methods: {},
  //When click on button that appears after user has logged in, if price is greater than store.state.points, subtract the price from store.state.points and then remove button.
  computed: {
    points() {
      return this.$store.state.points;
    },
  },
};
</script>
