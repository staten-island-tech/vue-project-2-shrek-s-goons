<template>
  <nav>
    <h1 class="navTitle">The Shrek Project</h1>
<<<<<<< HEAD
    <template v-if="authIsReady">
      <!-- for all users -->
      <div>
        <router-link to="/" class="home">Home</router-link>
=======
    <!-- <StopWatch class="timer"></StopWatch> -->

    <template v-if="authIsReady">
      <!-- for all users -->
      <div>
        <router-link to="/">Clicker</router-link>
>>>>>>> e159e65e059fc2d552546a0d9452718e7f87f0c8
      </div>
      <!-- for logged in users -->
      <div v-if="user" class="logoutSection">
        <span>Logged in as {{ user.email }}</span>
        <button class="logoutButton" @click="handleClick">Logout</button>
      </div>
      <!-- for logged out users -->
      <div v-if="!user">
<<<<<<< HEAD
        <router-link to="/login" class="login">Login</router-link>
        <router-link to="/signup" class="signup">Register</router-link>
        <router-link to="/clicker" class="clicker">Clicker</router-link>
=======
        <router-link to="/login">Login</router-link>
        <router-link to="/signup" class="Register">Register</router-link>
>>>>>>> e159e65e059fc2d552546a0d9452718e7f87f0c8
      </div>
      <!-- <div id="root" class="container">

  <tabs>
    <tab name="Services" :selected="true">
      <h1>What we do</h1>
    </tab>
    <tab name="Pricing">
      <h1>How much we do it for</h1>
    </tab>
    <tab name="About Us">
      <h1>Why we do it</h1>
    </tab>
  </tabs>

</div> -->
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
// Vue.component('tabs', {
//   template: `
//         <div>
//             <div class="tabs">
//               <ul>
//                 <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
//                     <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
//                 </li>
//               </ul>
//             </div>

//             <div class="tabs-details">
//                 <slot></slot>
//             </div>
//         </div>
//     `,

//   data() {
//     return {
//       tabs: []
//     };
//   },

//   created() {
//     this.tabs = this.$children;
//   },

//   methods: {
//     selectTab(selectedTab) {
//       this.tabs.forEach(tab => {
//         tab.isActive = tab.name == selectedTab.name;
//       });
//     }

//   }
// });
// Vue.component('tab', {
//   template: `

//         <div v-show="isActive"><slot></slot></div>

//     `,
//   props: {
//     name: {
//       required: true
//     },
//     selected: {
//       default: false
//     }
//   },

//   data() {
//     return {
//       isActive: false
//     };
//   },

//   computed: {
//     href() {
//       return '#' + this.name.toLowerCase().replace(/ /g, '-');
//     }

//   },

//   mounted() {
//     this.isActive = this.selected;
//   }

// });
// new Vue({
//   el: '#root'
// });
</script>
<style>
<<<<<<< HEAD
.home,
.login,
.signup,
.clicker {
  background-color: var(--black);
  color: var(--green);
  font-size: var(--h3);
=======
.Register {
  margin-left: 1.5rem;
>>>>>>> e159e65e059fc2d552546a0d9452718e7f87f0c8
}
</style>
