<template>
  <div id="app">
    <app-header></app-header>
    <div class="main">
      <HelloWorld msg="Welcome to Your Vue.js App for Jokes :)" />
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import AppHeader from "./components/core/Header";
import AppFooter from "./components/core/Footer";

export default {
  name: "App",
  components: {
    HelloWorld,
     AppHeader,
     AppFooter
  }
};
</script>

<style >
@import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
body {
  font-family: "Lato", sans-serif;
}

#app {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* body{
  display:flex;
  background-color:#F0F8FF;
  height:95vh;
  justify-content:center;
  align-items:flex-end;
  font-family:Open Sans;
} */

#container{
  padding-top:20px;
  margin-top:20px;
  width:100vw;
  color:white;
  background-color:#292354;
  display:flex;
  flex-direction:column;
  align-items:center;
}
#contacts{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
#contacts--contact{
  text-align:right;
}
#contacts--social{
  width:20%;
  display : flex;
  justify-content : space-between;
}
#contacts--social div{
  height:30px;
  width:30px;

}

  #mentions p {
  font-size:0.5em;
}
/** ************************************** **/

header {
  padding: 1em 2em;
  margin: 0;
}

header section {
  display: inline-block;
  vertical-align: middle;
  width: 45%;
  margin: 0 2%;
}

header section:nth-child(1) {
  text-align: left;
}

header section:nth-child(2) {
  text-align: right;
}

header section:nth-child(2) img {
  width: 28%;
  max-width: 100%;
  padding: 0 3em;
  vertical-align: middle;
}

header button:nth-child(1) {
  background: #fff;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  padding: 8px 12px;
  cursor: pointer;
  border: 1px solid #44a9f8;
  outline: none;
}

header button:nth-child(1) a {
  color: #44a9f8;
  text-decoration: none;
  font-family: "Lato", sans-serif;
}

header .svg-inline--fa {
  width: 0.875em;
  overflow: visible;
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}

header .social-icons {
  transform: translate(-50%, -50%);
  text-align: right;
  display: inline;
  vertical-align: bottom;
}

header .social-icons a {
  color: white;
  background: #44a9f8;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-family: fontawesome;
  display: inline-block;
  width: 35px;
  height: 26px;
  padding-top: 9px;
  margin: 0 2px;
  transition: all 0.5s;
}
</style>