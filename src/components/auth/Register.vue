<template>
  <app-content>
    <template v-slot:info>
      <form @submit.prevent="onSignUp" class="user-form">
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

        <button >Register</button>
      </form>
    </template>
  </app-content>
</template>

<script>
import AppContent from "../shared/Content";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

function sameAs(field) {
  return function(value) {
    return this[field] === value;
  };
}
import authAxios from "@/axios-auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      rePassword: "",
      success: false
    };
  },
  mixins: [validationMixin],
  components: {
    AppContent
  },
  methods: {
    onSignUp() {
      const payload = {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      };

      // Project Settings -> Web API key
      authAxios
        .post("/accounts:signUp", payload)
        .then(res => {
          const { idToken, localId, email } = res.data;

          localStorage.setItem("token", idToken);
          localStorage.setItem("userId", localId);
          localStorage.setItem("email", email);

          this.$router.push("/");
        })
        .catch(err => {
          console.error(err);
        });
    }
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
    },
    email: {
      required
    }
  }
};
</script>

<style scoped></style>
