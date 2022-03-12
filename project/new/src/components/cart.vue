<template>
  <div class="mainCart">
    <h2 class="cartTitle">Your Loadout:</h2>
    <p class="errorMessage" v-if="this.subtotal === 0">
      Shrek Says "You didn't buy anything yet loser"
    </p>
    <ul class="list" v-else>
      {{
        order
      }}
      -> $
      {{
        orderPrice
      }}
    </ul>

    <h3>Subtotal:$ {{ subtotal }}</h3>

    <Button id="Button-Undo" @button-click="$emit('undo')">Undo</Button>
    <Button id="Button-RemoveAll" @button-click="$emit('removeAll')">
      Remove All
    </Button>
    <Button id="Button-Checkout" @button-click="$emit('checkout')">
      Checkout
    </Button>

    <img class="shrek" src="//pbs.twimg.com/media/B-hpVrGIUAAHA_d.jpg" alt="" />
  </div>
</template>

<script>
import Button from "../components/button.vue";
export default {
  name: "Cart",
  props: {
    subtotal: String,
    orderPrice: String,
    order: String,
  },
  components: Button,
};
</script>

<style>
.mainCart {
  width: 500px;
  margin-top: 200px;
  position: relative;
  width: 700px;
  border: 10px rgb(32, 172, 32) solid;
  border-radius: 30px;
  background-color: rgb(81, 116, 30);
}

.cartTitle {
  font-size: 40px;
}

.errorMessage {
  color: white;
  font-size: 30px;
}

#Button-Undo {
  position: relative;
  margin: 25px auto;
}
#Button-RemoveAll {
  position: relative;
  margin: 25px auto;
}

#Button-Checkout {
  position: relative;
  margin: 25px auto;
}

h1 {
  position: fixed;
  font-size: 40px;
  background-color: rgb(34, 68, 34);
}

h2,
h3,
h4 {
  color: white;
}
</style>
