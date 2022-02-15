<template>
  <button @click="$emit('button-click')"><slot></slot></button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style scoped>
button {
  width: 150px;
  height: 40px;
  font-size: 20px;
  border-radius: 20px;
  border: white solid 4px;
  background-color: rgb(118, 143, 82);
  color: black;
  transition: 0.3s;
}
button:hover {
  transform: scale(1.1);
}
button:active {
  transform: scale(0.6);
}
</style>
