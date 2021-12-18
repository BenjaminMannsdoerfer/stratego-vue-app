import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'
import 'jquery/src/jquery.js'

self.addEventListener('fetch', function(event) {
  event.respondWith(async function() {
    try{
      var res = await fetch(event.request);
      var cache = await caches.open('cache');
      cache.put(event.request.url, res.clone());
      return res;
    }
    catch(error){
      return caches.match(event.request);
    }
  }());
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
