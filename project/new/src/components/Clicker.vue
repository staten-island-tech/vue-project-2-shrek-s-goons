<template>
  <div>
    <button class="moneyAdder" v-on:click="counter += 1">
      Add One More Click
    </button>
    <p>The button has been clicked {{ counter }} times</p>
  </div>
</template>

<script>
export default {
  name: "clicker",
  data: function () {
    return {
      counter: 0,
    };
  },
};
</script>
<style>
.moneyAdder {
}
</style>
