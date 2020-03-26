import Vue from "vue";
import App from "./App.vue";
import moment from 'moment'
import VueRouter from 'vue-router';
import routes from './routes' // path to router



Vue.config.productionTip = false;

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY hh:mm");
  }
});

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
