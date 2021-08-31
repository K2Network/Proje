import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Firebase from "firebase/app";
import AOS from 'aos';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
var firebaseConfig = {
  apiKey: "AIzaSyCoXWUU9smA5tFrnw5UFwFrDRx3l17-UL8",
  authDomain: "k2software.firebaseapp.com",
  projectId: "k2software",
  storageBucket: "k2software.appspot.com",
  messagingSenderId: "248490063163",
  appId: "1:248490063163:web:976a9e270645d014b0331e"
};
Firebase.initializeApp(firebaseConfig)
library.add(faChevronRight)
library.add(faChevronLeft)
const app = createApp(App)
app.use(router)
app.component("font-awesome-icon",FontAwesomeIcon)
app.use(store)
app.mount('#app')
