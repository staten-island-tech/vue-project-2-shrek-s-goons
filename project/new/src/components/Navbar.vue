<template>
  <nav>
    <h1 class="navTitle">The Shrek Project</h1>

    <template v-if="authIsReady">
      <!-- for all users -->
      <div>
        <router-link to="/" class="home">Home</router-link>
      </div>
      <!-- for logged in users -->
      <div v-if="user">
        <span>Logged in as {{ user.email }}</span>
        <button @click="handleClick">Logout</button>
      </div>
      <!-- for logged out users -->
      <div v-if="!user">
        <router-link to="/login" class="login">Login</router-link>
        <router-link to="/signup" class="signup">Register</router-link>
        <router-link to="/clicker" class="clicker">Clicker</router-link>
      </div>
    </template>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
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
};
</script>
<style>
.home,
.login,
.signup,
.clicker {
  background-color: var(--black);
  color: var(--green);
  font-size: var(--h3);
}

</style>
