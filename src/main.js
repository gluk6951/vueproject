import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index.js'
import '../src/axios_config/axios.js'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App);


//createApp(App).use(router).mount('#app');
app.use(router);
app.use(vuetify);
app.mount('#app');