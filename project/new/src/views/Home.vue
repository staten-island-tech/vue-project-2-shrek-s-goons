<template>
<<<<<<< Updated upstream
  <div>
    <Button @button-click="add">Yes</Button>
=======
  <div class="mainOrder">
    <Clicker></Clicker>

    <Card
      v-for="(characters, index) in shrekCharacters"
      :key="index"
      :title="characters.name"
      :price="characters.price"
      :tier="characters.tier"
      :image="characters.image"
      @add="updateList(index)"
    />

    <Cart
      :subtotal="this.subtotal"
      :order="this.order"
      :orderPrice="this.orderPrice"
      @removeAll="removeAllItems"
      @undo="removeLastItem"
      @checkout="checkout"
    />
>>>>>>> Stashed changes
  </div>
</template>

<script>
import Button from "../components/button.vue";
export default {
  components: Button,
};
</script>

<style></style>
