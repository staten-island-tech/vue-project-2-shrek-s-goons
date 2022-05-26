<template>
  <form @submit.prevent="handleSubmit" class="form">
    <h3>Login</h3>

    <label for="email">Email:</label>
    <input class="email" type="email" name="email" v-model="email" required />

    <label for="email">Password:</label>
    <input class= "password" type="password" name="password" v-model="password" required />
    <label class="emailLogin" for="email">Email:</label>
    <input class="inputEmail" type="email" name="email" v-model="email" required />

    <label class="passwordLogin" for="email">Password:</label>
    <input class="inputPassword" type="password" name="password" v-model="password" required />

    <button>Login</button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>

import { ref } from "vue";
import { useStore } from "vuex";
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
        await store.dispatch("login", {
          email: email.value,
          password: password.value,
        });
        router.push("/");
      } catch (err) {
        error.value = err.message;
      }
    };
    return { handleSubmit, email, password, error };
  },
};
</script>
