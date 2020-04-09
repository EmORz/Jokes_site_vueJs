import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home.vue";
import Login from "./components/auth/Login.vue";
import Register from "./components/auth/Register.vue";
import Personinfo from "./components/jokes/PersonInfo.vue";
import Createjoke from "./components/jokes/CreateJoke.vue";
import Jokesites from "./components/jokes/JokeSites.vue";
import NotFound from "./components/shared/NotFound.vue";
import Error from "./components/shared/Error.vue";
import About from "./components/other/About.vue";

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

const routes = [
  {
    path: "/",
    component: Home,
  },
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/Jokesites", component: Jokesites },
  { path: "/login", component: Login, beforeEnter: anonymousGuard },
  { path: "/register", component: Register, beforeEnter: anonymousGuard },
  { path: "/createjoke", component: Createjoke, beforeEnter: authGuard },
  { path: "/Personinfo", component: Personinfo, beforeEnter: authGuard },
  { path: "/Error", component: Error },
  {
    path: "*",
    component: NotFound,
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
