import Vue from "vue";
import VueRouter from "vue-router";

import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
import Register from "./components/Register.vue";
import Createjoke from "./components/CreateJoke.vue";
import Jokesites from "./components/JokeSites.vue";
import NotFound from "./components/NotFound.vue";
import About from "./components/About.vue";
import Protected from "./components/Protected.vue";

import store from "./store";

Vue.use(VueRouter);
function anonymousGuard(to, from, next) {
  if (localStorage.getItem("token") !== null) {
    next("/");
  } else {
    next();
  }
}

function authGuard(to, from, next) {
  if (localStorage.getItem("token") === null) {
    next("/login");
  } else {
    next();
  }
}
// function homeGuard(to, from, next) {
//   if (
//     localStorage.getItem("token") === null ||
//     localStorage.getItem("token") !== null
//   ) {
//     next("/home");
//   }
// }

const routes = [
  {
    path: "/",
    component: Home
  },
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/login", component: Login, beforeEnter: anonymousGuard },
  { path: "/register", component: Register, beforeEnter: anonymousGuard },
  { path: "/createjoke", component: Createjoke, beforeEnter: authGuard },
  { path: "/Jokesites", component: Jokesites },
  
  {
    path: "/edit/:id",
    component: About
  },
  {
    path: "/protected",
    component: Protected,
    beforeEnter: (to, from, next) => {
      const redirectUrl = store.user ? undefined : "/";
      next(redirectUrl);
    }
  },

  {
    path: "*",
    component: NotFound
  }
];

export default new VueRouter({
  mode: "history",
  routes
});
