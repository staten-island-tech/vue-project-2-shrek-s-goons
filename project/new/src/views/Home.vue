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
    <button class="button-begin">Click Here to Start</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  method: {
    begin() {
      this.$router.push("Shop");
      this.$store.commit("setBegin");
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
