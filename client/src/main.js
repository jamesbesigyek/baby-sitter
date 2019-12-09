import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

import HomeComponent from './components/HomeComponent'
import AppLogin from './components/AppLogin'
import AboutUs from './components/AboutUs'
import StaffRegister from './components/StaffRegister'




Vue.config.productionTip = false

const routes = [
  {
      name: 'home',
      path: '/',
     component: HomeComponent
     
  },
  {
    name: 'login',
    path: '/login',
   component: AppLogin  
},
{
  name: 'login',
  path: '/About-Us',
 component: AboutUs  
},
{
  name: 'login',
  path: '/register',
 component: StaffRegister  
},
]

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');

new Vue({
  render: h => h(App),
}).$mount('#app')
