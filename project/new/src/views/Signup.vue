<template>
  <form>
    <h1>Sign Up</h1>
    <input type="email" name="email" v-model="email" required />
    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required />
    <button>Sign up</button>
  </form>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const store = useStore();

    const handleSubmit = () => {
      store.dispatch("signup", {
        email: email.value,
        password: password.value,
      });
    };

    return { handleSubmit, email, password };
  },
};
</script>

<style></style>
