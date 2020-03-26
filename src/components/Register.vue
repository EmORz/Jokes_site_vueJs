<template>
  <app-content>
    <template v-slot:info>
      <h2 class="user-links">
        <a href="login.html">Login</a> |
        <a href="register.html" class="active-route">Register</a>
      </h2>
      <div v-if="success">Registretion successfull!</div>
      <form v-else @submit.prevent="submitHandler" class="user-form">
        <div class="form-group">
          <label for="username">
            <img
              src="https://img.icons8.com/material-sharp/42/000000/user.png"
            />
          </label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            v-model="username"
            @blur="$v.username.$touch"
          />
          <template v-if="$v.username.$error">
            <div v-if="!$v.username.required">Username is requerd!</div>
            <div v-if="!$v.username.minLength">
              Username should be more than 3 symbols!
            </div>
          </template>
        </div>

        <div class="form-group">
          <label for="password">
            <img
              src="https://img.icons8.com/material/42/000000/password--v1.png"
            />
          </label>

          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            v-model="password"
            @blur="$v.password.$touch"
          />
          <template v-if="$v.password.$error">
            <div v-if="!$v.password.required">Password is requerd!</div>
            <div v-if="!$v.password.minLength">
              Password should be more than 3 symbols!
            </div>
          </template>
        </div>

        <div class="form-group">
          <label for="rePassword">
            <img
              src="https://img.icons8.com/material/42/000000/password--v1.png"
            />
          </label>

          <input
            id="rePassword"
            type="password"
            name="rePassword"
            placeholder="Repeat password"
            v-model="rePassword"
            @blur="$v.rePassword.$touch"
          />
          <template v-if="$v.rePassword.$error">
            <div v-if="!$v.rePassword.sameAs">
              Password dont match!
            </div>
          </template>
        </div>

        <button>Register</button>
      </form>
    </template>
  </app-content>
</template>

<script>
import AppContent from "./shared/Content";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

function sameAs(field) {
  return function(value) {
    return this[field] === value;
  };
}

export default {
  mixins: [validationMixin],
  components: {
    AppContent
  },
  methods: {
    submitHandler() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }
      this.success = true;
      console.log("Register Form was submitted!");
    }
  },
  data() {
    return {
      username: "",
      password: "",
      rePassword: "",
      success: false
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(5)
    },
    password: {
      required,
      minLength: minLength(8)
    },
    rePassword: {
      sameAs: sameAs("password")
    }
  }
};
</script>

<style scoped></style>
