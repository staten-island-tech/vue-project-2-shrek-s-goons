<template>
  <form @submit.prevent="handleSubmit" class="form">
    <h3>Register</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required />

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required />

    <Button>Register</Button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>
<script>
import { useStore } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "../components/button.vue";

export default {
  compnents: Button,
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
        router.push("/");
      } catch (err) {
        error.value = err.message;
      }
    };

    return { handleSubmit, email, password, error };
  },
};
</script>

<style></style>
