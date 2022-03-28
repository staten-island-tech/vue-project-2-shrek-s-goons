<template>
  <div>
    <p><button v-on:click="counter += 1">Add One More Click</button></p>
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
<style></style>
