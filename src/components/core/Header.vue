<template>
  <header>
    <section>
      <nav>
        <ul>
          <li>
            <router-link to="/home">Home</router-link>
          </li>
          <li v-if="!isAuth">
            <router-link to="/login">Login</router-link>
          </li>
          <li v-if="!isAuth">
            <router-link to="/register">Register</router-link>
          </li>
          <li v-if="isAuth">
            <router-link to="/createjoke">Cretae Joke</router-link>
          </li>
          <li v-if="isAuth">
            <a @click="onLogout" class="logout">Logout</a>
          </li>
        </ul>
      </nav>

  
    </section>
    <digital-clock :blink="true" class="clock-center" />
    <section>
      <img src="../../assets/smile-face.jpg" alt />
    </section>
  </header>
</template>
<script>
import DigitalClock from "vue-digital-clock";

export default {
  components: {
    DigitalClock
  },
  props: {
    isAuth: Boolean
  },
  methods: {
    onLogout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");

      this.$emit("onAuth", false);
    }
  }
};
</script>

<style scoped>
#clock-center {
  position: absolute;
  width: 300px;
  height: 200px;
  z-index: 15;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -150px;
  background: orangered;
  margin-left: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #44a9f8;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}

.logout {
  cursor: pointer;
}
</style>
