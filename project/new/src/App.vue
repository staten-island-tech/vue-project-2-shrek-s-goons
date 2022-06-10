<template>
  <div class="main-container">
    <div class="Navigation">
      <Navbar v-if="started === true" />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  components: { Navbar },
  watch: {
    $route: function () {
      if (this.$route.path === "/") this.$store.commit("setBegin2");
      else {
        this.$store.commit("setBegin");
      }
    },
  },
  setup() {
    const any = ref([]);
    const store = useStore();
    return {
      any,
      started: computed(() => store.state.started),
    };
  },
};
</script>

