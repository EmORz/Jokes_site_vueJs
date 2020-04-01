import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
import Test from "./components/Test.vue";
import Register from "./components/Register.vue";
import Createjoke from "./components/CreateJoke.vue";
import Jokesites from "./components/JokeSites.vue";
import NotFound from "./components/NotFound.vue";
import About from "./components/About.vue";
import Protected from "./components/Protected.vue";

import store from './store'

export default [
  {
    path: "/",
    component: Home
  },
  { path: "/login", component: Login },
  { path: "/createjoke", component: Createjoke },
  { path: "/Jokesites", component: Jokesites },
  { path: "/home", component: Home },
  { path: "/test", component: Test },
  { path: "/register", component: Register },
  {
    path: '/edit/:id',
    component: About
  },
  {
    path: '/protected',
    component: Protected,
    beforeEnter: (to, from, next) => {
      const redirectUrl = store.user ? undefined : '/'
      next(redirectUrl);
    }
  },
  
  {
    path: "*",
    component: NotFound
  },
];
