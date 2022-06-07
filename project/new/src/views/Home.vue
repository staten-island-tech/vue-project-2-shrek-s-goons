<template>
  <div>
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
<<<<<<< HEAD
    <button class="button-begin" @click="begin()">Click Here to Start</button>
=======
    <button class="button-begin">Click Here to Start</button>
>>>>>>> 72cb0a8ea3b34bb7234627787a01b107f99cc2a1
  </div>
</template>

<script>
export default {
  name: "Home",
  method: {
    begin() {
      console.log("yes");
      // this.$router.push("Shop");
      // this.$store.commit("setBegin");
    },
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
