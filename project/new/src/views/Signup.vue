<template>
  <form @submit.prevent="handleSubmit" class="form">
    <h3>Register</h3>

    <label for="email" class="emailT">Email:</label>
    <input type="email" name="email" v-model="email" class="formE" required />

    <label for="email" class="passwordT">Password:</label>
    <input
      type="password"
      name="password"
      v-model="password"
      class="formP"
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
        router.push("/");
      } catch (err) {
        error.value = err.message;
      }
    };

    return { handleSubmit, email, password, error };
  },
};
</script>

<style>
.passwordT {
  font-size: 2rem;
}
.emailT {
  font-size: 2rem;
}
.formE {
  font-size: 2rem;
  width: 40rem;
  height: 4rem;
}
.formP {
  font-size: 2rem;
  width: 40rem;
  height: 4rem;
}
</style>
