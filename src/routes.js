
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Createjoke from './components/CreateJoke.vue';


export default [
    { path: '/login', component: Login },
    { path: '/createjoke', component: Createjoke },
    { path: '/home', component: Home },
    { path: '/register', component: Register }
]