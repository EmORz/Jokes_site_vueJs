import Vue from "vue";
import App from "./App.vue";
import moment from 'moment'
import router from './router' // path to router
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(function (config) {
  config.url = `${API_URL}/${config.url}`;
  return config;
}, function (error) {
  return Promise.reject(error);
});

Vue.config.productionTip = false;

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY hh:mm");
  }
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
