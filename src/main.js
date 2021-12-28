import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/src/jquery.js'
import * as firebase from 'firebase/app'
import * as fbAuth from 'firebase/auth'

self.addEventListener('fetch', function (event) {
    event.respondWith(async function () {
        try {
            var res = await fetch(event.request);
            var cache = await caches.open('cache');
            cache.put(event.request.url, res.clone());
            return res;
        } catch (error) {
            return caches.match(event.request);
        }
    }());
});

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);
export const firebaseAuth = fbAuth

firebaseAuth.getAuth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
