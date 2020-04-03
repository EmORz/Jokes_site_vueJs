<template>
  <header>
    <section>
      <!-- <button>
        <a href="/jokesites">
          Още вицове :)
        </a>
      </button> -->
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
          <li v-if="!isAuth">
            <router-link to="/createjoke">Cretae Joke</router-link>
          </li>
          <li v-if="isAuth">
            <a @click="onLogout" class="logout">Logout</a>
          </li>
        </ul>
      </nav>

      <!-- <router-link to="/home">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/createjoke">createjoke</router-link> -->

      <!-- <section class="social-icons">
        <a href="https://www.facebook.com/emanuil.nikolov.16">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook-f"
            class="svg-inline--fa fa-facebook-f fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            />
          </svg>
        </a>

        <a href="https://www.youtube.com/channel/UCAuUUnT6oDeKwE6v1NGQxug">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="youtube"
            class="svg-inline--fa fa-youtube fa-w-18"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            />
          </svg>
        </a>
      </section> -->
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
