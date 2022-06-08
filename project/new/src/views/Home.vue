<template>
  <div class="start-title">
    <ol class="snow-bros">
      <li class="t"></li>
      <li class="h"></li>
      <li class="e"></li>
      <li class="s"></li>
      <li class="h"></li>
      <li class="r"></li>
      <li class="e"></li>
      <li class="k"></li>
      <li class="p"></li>
      <li class="r"></li>
      <li class="o"></li>
      <li class="j"></li>
      <li class="e"></li>
      <li class="c"></li>
      <li class="t"></li>
    </ol>
    <img :src="image" class="vue-logo" alt="" />
    <img :src="image2" class="firebase-logo" alt="" />
    <button class="button-begin" @click="begin()">Click Here to Start</button>
  </div>
</template>

<script>
import image from "../assets/logo.png";
import image2 from "../assets/logo-built_black.png";
export default {
  name: "Home",
  methods: {
    begin() {
      this.$router.push("Shop");
      this.$store.commit("setBegin");
      alert("Buy Macho Shrek to Win");
    },
  },
  data: function () {
    return {
      image: image,
      image2: image2,
    };
  },
};
</script>

<style>
body {
  background-image: url(https://www.whatspaper.com/wp-content/uploads/2022/01/shrek-wallpaper-whatspaper-5.jpg);
  height: 82rem;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
