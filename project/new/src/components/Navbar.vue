<template>
  <nav>
    <h1 class="navTitle">The Shrek Project</h1>
    <!-- <StopWatch class="timer"></StopWatch> -->

    <template v-if="authIsReady">
      <!-- for all users -->
      <div>
        <router-link to="/">Clicker</router-link>
      </div>
      <!-- for logged in users -->
      <div v-if="user" class="logoutSection">
        <span>Logged in as {{ user.email }}</span>
        <button class="logoutButton" @click="handleClick">Logout</button>
      </div>
      <!-- for logged out users -->
      <div v-if="!user">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup" class="Register">Register</router-link>
      </div>
    </template>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
// import { StopWatch } from "../components/StopWatch.vue";
export default {
  setup() {
    const store = useStore();
    const handleClick = () => {
      store.dispatch("logout");
    };

    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady),
    };
  },
  // components: StopWatch,
};
</script>
<style>
.Register {
  margin-left: 1.5rem;
}
</style>
