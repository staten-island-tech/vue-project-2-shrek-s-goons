<template>
  <form @submit.prevent="handleSubmit" class="form">
    <h3>Register</h3>

    <label for="email" class="emailLogin">Email:</label>
    <input
      aria-label="something"
      type="email"
      name="email"
      v-model="email"
      class="inputEmail"
      required
    />

    <label for="email" class="passwordLogin">Password:</label>
    <input
      aria-label="something"
      type="password"
      name="password"
      v-model="password"
      class="inputPassword"
      required
    />

    <button>Register</button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>
<script>
import { useStore } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const store = useStore();
    const router = useRouter();

    const handleSubmit = async () => {
      try {
        await store.dispatch("signup", {
          email: email.value,
          password: password.value,
        });
        router.push("/Shop");
      } catch (err) {
        error.value = err.message;
      }
    };

    return { handleSubmit, email, password, error };
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
