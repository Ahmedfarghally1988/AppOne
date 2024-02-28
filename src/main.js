import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import jquery from "jquery/dist/jquery.js";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';



import 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css'
import VueEasyLightbox from 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js'


/// font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle , faHome ,faHiking ,faPhone,faEnvelope ,faMapSigns ,faTimes,faAngleDown,faCamera,faCalendar } from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faLinkedinIn,faTwitter,faYoutube} from "@fortawesome/free-brands-svg-icons";

library.add(
    faCheckCircle,
    faHome,
    faHiking,
    faPhone,
    faEnvelope,
    faMapSigns,
    faFacebook,
    faLinkedinIn,
    faTwitter,
    faYoutube,
    faTimes,
    faAngleDown,
    faCamera,
    faCalendar
)
/// end font awesome

createApp(App)
    .use(store)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(VueEasyLightbox)
    .use(router)
    .use(bootstrap)
    .use(jquery)
    .mount('#app')
