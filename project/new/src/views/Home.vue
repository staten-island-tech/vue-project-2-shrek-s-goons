<template>
  <div>
    <Clicker class="moneyAdder" />
    <div class="mainOrder">
      <h2 class="points">Balance: ${{ points }}</h2>
      <Card
        v-for="(characters, index) in shrekCharacters"
        :key="index"
        :title="characters.name"
        :price="characters.price"
        :tier="characters.tier"
        :image="characters.image"
        @add="updateList(index)"
      />

      <!-- <Cart
      :subtotal="this.subtotal"
      :order="this.order"
      :orderPrice="this.orderPrice"
      @removeAll="removeAllItems"
      @undo="removeLastItem"
      @checkout="checkout"
    /> -->
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
  // data: function () {
  //   return {
  //     shrekCharacters: [
  //       {
  //         name: "Shrek 1",
  //         price: 100000000,
  //         tier: "S",
  //         image:
  //           "https://i.pinimg.com/474x/31/ba/98/31ba98cbc56e2b40060d3951dec3adda.jpg",
  //       },
  //       {
  //         name: "Shrek 2",
  //         price: 100000,
  //         tier: "S",
  //         image:
  //           "https://m.media-amazon.com/images/M/MV5BZmU5ZDE5NTItN2I1YS00ZmFmLTk3YTgtNzQwOGNkYzFjOWRkXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg",
  //       },
  //       {
  //         name: "Shrek 3",
  //         price: 64000,
  //         tier: "S",
  //         image:
  //           "https://media.sketchfab.com/models/15753cc5826d4a94830309cf5c8c290d/thumbnails/e99812c5d5844413a32861469ca24f21/b72b6385ce704c63b8417ea922cfe594.jpeg",
  //       },
  //       {
  //         name: "Fiona 1",
  //         price: 32000,
  //         tier: "A",
  //         image:
  //           "https://people.southwestern.edu/~bednarb/su_netWorks/projects/mcentire/fiona.jpg",
  //       },
  //       {
  //         name: "Fiona 2",
  //         price: 16000,
  //         tier: "A",
  //         image:
  //           "https://preview.redd.it/3r3ut78wo4u51.jpg?auto=webp&s=188b221d64b3f5706e84f8d616ffe4b23435692e",
  //       },
  //       {
  //         name: "Fiona 3",
  //         price: 8000,
  //         tier: "A",
  //         image:
  //           "https://i.pinimg.com/236x/6d/0f/ce/6d0fce5676847efb72456ece6b0587aa--shrek-plans.jpg",
  //       },
  //       {
  //         name: "Donkey 1",
  //         price: 4000,
  //         tier: "B",
  //         image:
  //           "https://i.pinimg.com/originals/70/d4/d4/70d4d4ff305cf54a08a4689bbe778405.jpg",
  //       },
  //       {
  //         name: "Donkey 2",
  //         price: 2000,
  //         tier: "B",
  //         image:
  //           "https://img.huffingtonpost.com/asset/586d61191500009206e9e7b2.png?cache=gOeX9kAIdl&ops=1778_1000",
  //       },
  //       {
  //         name: "Donkey 3",
  //         price: 1000,
  //         tier: "B",
  //         image: "https://img.fruugo.com/product/4/52/108501524_max.jpg",
  //       },
  //     ],
  //     order: [],
  // orderPrice: [],
  // subtotal: 0,
  //   };
  // },

  // methods: {
  //   updateList(index) {
  //     this.order.push(this.shrekCharacters[index].name);
  //     this.orderPrice.push(this.shrekCharacters[index].price);
  //     this.subtotal = this.subtotal + this.shrekCharacters[index].price;
  //   },
  //   removeLastItem: function () {
  //     if (this.order.length !== 0) {
  //       this.subtotal =
  //         this.subtotal - this.orderPrice[this.orderPrice.length - 1];
  //       this.order.pop();
  //       this.orderPrice.pop();
  //     }
  //   },
  //   removeAllItems: function () {
  //     this.order = [];
  //     this.orderPrice = [];
  //     this.subtotal = 0;
  //   },
  // },
  computed: {
    points() {
      return this.$store.state.points;
    },
  },
};
</script>
