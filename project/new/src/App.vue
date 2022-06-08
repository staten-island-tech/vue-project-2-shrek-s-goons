<template>
  <div class="main-container">
    <Navbar v-if="started === true" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  components: { Navbar },
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
