<template>
  <div>
    <h1>Wrong Passwor or Email! Try again :)</h1>
    <h2><router-link to="/login">Back to Login page</router-link></h2>
    <h2>or</h2>
    <h2><router-link to="/register">Register again</router-link></h2>
 
  </div>
</template>
<script>
export default {
  name: "Error",
};
</script>
<style scoped></style>
