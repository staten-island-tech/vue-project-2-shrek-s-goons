import { createStore } from "vuex";
//firebase inports
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  // getAuth,
} from "firebase/auth";
import { db } from "../firebase/config";
import { setDoc, doc, getDoc } from "firebase/firestore";

const store = createStore({
  state: {
    shrekCharacters: [
      {
        name: "Shrek 1",
        price: 100000000,
        tier: "S",
        image:
          "https://i.pinimg.com/474x/31/ba/98/31ba98cbc56e2b40060d3951dec3adda.jpg",
        characterAdditiveValue: 500000,
        purchased: false,
      },
      {
        name: "Shrek 2",
        price: 100000,
        tier: "S",
        image:
          "https://m.media-amazon.com/images/M/MV5BZmU5ZDE5NTItN2I1YS00ZmFmLTk3YTgtNzQwOGNkYzFjOWRkXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg",
        characterAdditiveValue: 2000,
        purchased: false,
      },
      {
        name: "Shrek 3",
        price: 64000,
        tier: "S",
        image:
          "https://media.sketchfab.com/models/15753cc5826d4a94830309cf5c8c290d/thumbnails/e99812c5d5844413a32861469ca24f21/b72b6385ce704c63b8417ea922cfe594.jpeg",
        characterAdditiveValue: 1000,
        purchased: false,
      },
      {
        name: "Fiona 1",
        price: 32000,
        tier: "A",
        image:
          "https://people.southwestern.edu/~bednarb/su_netWorks/projects/mcentire/fiona.jpg",
        characterAdditiveValue: 800,
        purchased: false,
      },
      {
        name: "Fiona 2",
        price: 16000,
        tier: "A",
        image:
          "https://preview.redd.it/3r3ut78wo4u51.jpg?auto=webp&s=188b221d64b3f5706e84f8d616ffe4b23435692e",
        characterAdditiveValue: 400,
        purchased: false,
      },
      {
        name: "Fiona 3",
        price: 8000,
        tier: "A",
        image:
          "https://i.pinimg.com/236x/6d/0f/ce/6d0fce5676847efb72456ece6b0587aa--shrek-plans.jpg",
        characterAdditiveValue: 200,
        purchased: false,
      },
      {
        name: "Donkey 1",
        price: 4000,
        tier: "B",
        image:
          "https://i.pinimg.com/originals/70/d4/d4/70d4d4ff305cf54a08a4689bbe778405.jpg",
        characterAdditiveValue: 100,
        purchased: false,
      },
      {
        name: "Donkey 2",
        price: 2000,
        tier: "B",
        image:
          "https://img.huffingtonpost.com/asset/586d61191500009206e9e7b2.png?cache=gOeX9kAIdl&ops=1778_1000",
        characterAdditiveValue: 50,
        purchased: false,
      },
      {
        name: "Donkey 3",
        price: 1000,
        tier: "B",
        image: "https://img.fruugo.com/product/4/52/108501524_max.jpg",
        characterAdditiveValue: 10,
        purchased: false,
      },
    ],
    user: null,
    authIsReady: false,
    points: 0,
    additiveValue: 5,
    started: false,
  },
  mutations: {
    setBegin(state) {
      state.started = true;
    },
    setAdditiveValue(state, payload) {
      state.additiveValue = payload;
    },
    setPoints(state, val) {
      state.points = val;
    },
    setPurchaseds(state, indexes) {
      indexes.forEach((index) => {
        state.shrekCharacters[index].purchased = true;
        state.additiveValue +=
          state.shrekCharacters[index].characterAdditiveValue;
      });
    },
    updatePoints(state, payload) {
      state.points = state.points + payload;
      setDoc(
        doc(db, "users", state.user.uid),
        {
          points: state.points,
        },
        { merge: true }
      );
    },
    setUser(state, payload) {
      console.log("WATTTTTTTTT");
      state.user = payload;
      console.log("user state changed :", state.user);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    purchaseCharacter(state, characterIndex) {
      state.shrekCharacters[characterIndex].purchased = true;
      const purchasedIndexes = this.state.shrekCharacters
        .map((character, index) => {
          if (character.purchased) {
            return index;
          } else {
            return false;
          }
        })
        .filter((element) => element !== false);
      setDoc(
        doc(db, "users", state.user.uid),
        {
          purchasedIndexes: purchasedIndexes,
        },
        { merge: true }
      );
    },
  },
  actions: {
    purchaseItem({ commit }, { itemIndex }) {
      commit("updatePoints", -this.state.shrekCharacters[itemIndex].price);
      commit(
        "setAdditiveValue",
        +this.state.shrekCharacters[itemIndex].characterAdditiveValue +
          this.state.additiveValue
      );
      commit("purchaseCharacter", itemIndex);
    },

    async fetchData({ commit }) {
      console.log(this.state.user);

      const docRef = doc(db, "users", this.state.user.uid);
      const docSnapshot = await getDoc(docRef);

      let points = docSnapshot.data().points;
      if (!points) {
        points = 0;
      }
      commit("setPoints", points);

      let purchasedIndexes = docSnapshot.data().purchasedIndexes;
      if (!purchasedIndexes) {
        purchasedIndexes = [];
      }
      commit("setPurchaseds", purchasedIndexes);
    },

    async signup(context, { email, password }) {
      console.log("signup action");

      //async code
      const res = await createUserWithEmailAndPassword(auth, email, password);
      try {
        await setDoc(doc(db, "users", res.user.uid), {
          points: 0,
          purchasedIndexes: [],
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      if (res) {
        console.log("YOOOOO");
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete signup");
      }
    },
    async login(context, { email, password }) {
      console.log("login action");

      //async code
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        console.log("WEEEE");
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete login");
      }
    },
    async logout(context) {
      console.log("logout action");

      await signOut(auth);
      console.log("MUMMMM");
      context.commit("setUser", null);
      context.commit("setPoints", 0);
      context.commit("setAdditiveValue", 5);
      location.reload();
    },
  },
});

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  console.log("ROBERTOOO");
  store.commit("setUser", user);
  store.dispatch("fetchData");
  unsub();
});
console.log("dispatching");

export default store;
