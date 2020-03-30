<template>
  <app-content>
    <template v-slot:info>
      <div>
        <p>Peshooooooooooooooo</p>
        {{ message }}
        <div>{{ user }}</div>
        <button v-if="!user" @click="login">Login</button>
        <button v-else @click="logout">Logout</button>
      </div>
    </template>
  </app-content>
</template>

<script>
import AppContent from "./shared/Content";

export default {
  components: {
    AppContent
  },
  // functional: true,
  props: {
    user: { type: Object },
    login: { type: Function, required: true },
    logout: { type: Function, required: true },
    message: { type: String, required: true }
  }
};
</script>

<style></style>
