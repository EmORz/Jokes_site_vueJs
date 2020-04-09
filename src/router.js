import Vue from "vue";
import VueRouter from "vue-router";

import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
import Register from "./components/Register.vue";
import Createjoke from "./components/CreateJoke.vue";
import Jokesites from "./components/JokeSites.vue";
import NotFound from "./components/NotFound.vue";
import About from "./components/About.vue";
import Error from "./components/Error.vue";
import Personinfo from "./components/PersonInfo.vue";


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
  { path: "/Error", component: Error },
  { path: "/Personinfo", component: Personinfo, beforeEnter: authGuard },
  {
    path: "*",
    component: NotFound,
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
