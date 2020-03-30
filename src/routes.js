
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Test from './components/Test.vue';
import Register from './components/Register.vue';
import Createjoke from './components/CreateJoke.vue';
import Jokesites from './components/JokeSites.vue';


export default [
    { path: '/login', component: Login },
    { path: '/createjoke', component: Createjoke },
    { path: '/Jokesites', component: Jokesites },
    { path: '/home', component: Home },
    { path: '/test', component: Test },
    { path: '/register', component: Register }
]