import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index.js'
import vuetify_config from '../src/plugins/vuetify'
import '../src/axios_config/axios.js'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App);
 
//lukman15
//createApp(App).use(router).mount('#app');
app.use(router);
//app.use(vuetify_config);
app.use(vuetify);
app.mount('#app');
