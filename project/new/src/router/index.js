import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: function () {
      return import("../views/About.vue");
    },
  },

  {
    path: "/signup",
    name: "Sign Up",
    component: function () {
      return import("../views/Signup.vue");
    },
  },

  {
    path: "/login",
    name: "Login",
    component: function () {
      return import("../views/Login.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
