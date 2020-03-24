<template>
  <app-content>
    <template v-slot:info>
      <h2 class="user-links">
        <a class="active-route" href="login.html">Login</a> |
        <a href="register.html">Register</a>
      </h2>

      <form @submit.prevent="loginHandler" class="user-form">
        <div class="form-group">
          <label for="username1">
            <img
              src="https://img.icons8.com/material-sharp/42/000000/user.png"
            />
          </label>
          <input
            v-model="username1"
            type="text"
            id="username1"
            name="username"
            placeholder="Username"
          />
          <template v-if="$v.username1.$error">
            <div v-if="!$v.username1.required">Username is requerd!</div>
          </template>
        </div>

        <div class="form-group">
          <label for="password1">
            <img
              src="https://img.icons8.com/material/42/000000/password--v1.png"
            />
          </label>
          <input
            v-model="password1"
            type="password"
            id="password1"
            name="password"
            placeholder="Password"
          />
          <template v-if="$v.password1.$error">
            <div v-if="!$v.password1.required">Password is requerd!</div>
          </template>
        </div>

        <button>Login</button>
      </form>
    </template>
  </app-content>
</template>

<script>
import AppContent from "./shared/Content";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  components: {
    AppContent
  },
  validations: {
    username1: {
      required
    },
    password1: {
      required
    }
  },
  data() {
    return {
      username1: "",
      password1: ""
    };
  },
  methods: {
    loginHandler() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      console.log("Login Form was submitted!");
    }
  }
};
</script>

<style scoped></style>
