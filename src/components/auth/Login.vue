<template>
  <app-content>
    <template v-slot:info>

      <form @submit.prevent="onLogin" class="user-form">
        <div class="form-group">
          <label for="email">
            <img src="https://img.icons8.com/metro/26/000000/email.png" />
          </label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Email ..."
            v-model="email"
            @blur="$v.email.$touch"
          />
          <template v-if="$v.email.$error">
            <div v-if="!$v.email.required">Email is requerd!</div>
          </template>
        </div>

        <div class="form-group">
          <label for="password">
            <img
              src="https://img.icons8.com/material/42/000000/password--v1.png"
            />
          </label>
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            @blur="$v.password.$touch"
          />
          <template v-if="$v.password.$error">
            <div v-if="!$v.password.required">Password is requerd!</div>
          </template>
        </div>

        <!-- <button>Login</button> -->
        <button>Login</button>
      </form>
    </template>
  </app-content>
</template>

<script>
import AppContent from "../shared/Content";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

import authAxios from "@/axios-auth";

export default {
  mixins: [validationMixin],
  components: {
    AppContent
  },

  validations: {
    email: {
      required
    },
    password: {
      required
    }
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onLogin() {
      const payload = {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      };

      // Project Settings -> Web API key
      authAxios
        .post("/accounts:signInWithPassword", payload)
        .then(res => {
          const { idToken, localId, email } = res.data;

          localStorage.setItem("token", idToken);
          localStorage.setItem("userId", localId);
          localStorage.setItem("email", email)

          this.$router.push("/");
        })
        .catch(err => {
          console.log(err)
          this.$router.push("/error")
        });
    }
  }
};
</script>

<style scoped></style>
