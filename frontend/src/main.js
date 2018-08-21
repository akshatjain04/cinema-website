// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// =============== Base libraries integration ==================
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueTranslate from 'vue-translate-plugin'

Vue.use(VueResource)
Vue.use(VueTranslate)

import store from './store'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from 'components/Pages/HomePage'
import CinemasPage from 'components/Pages/CinemasPage'
import Classifications from 'components/Pages/Classifications'
import NewReleases from './components/Pages/NewReleasesPage'
import MovieList from './components/Pages/MovieListing'

import MovieDetails from 'components/Pages/MovieDetails'
import AboutUs from 'components/Pages/AboutUs'

// ================ All paths =====================
const routes = [
  { path: '/', component: HomePage },
  { path: '/classifications', component: Classifications },
  { path: '/home', component: HomePage, children: [
    { path: '', component: HomePage},
  ] },
  { path: '/movie', component: MovieDetails, name: 'movieDetails', children: [
    {path: ':id', component: MovieDetails, name: 'movieDetailsId'}
  ] },
  { path: '/cinemas', component: CinemasPage },
  {path: '/newrelease', component: NewReleases },
  {path: '/movielist', component: MovieList },
  {path: '/aboutus', component: AboutUs}
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

// ===== Bootstrap components integration (JQuery needed) ======
window.$ = window.jQuery = require('jquery')
require('bootstrap-sass')

// ======================= Base Component ======================
import App from './App'


// ======================== Vue Instance =======================
/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
