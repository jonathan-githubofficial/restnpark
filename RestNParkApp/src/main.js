import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './stores/counter.js'
import './assets/main.css'
import BaseCard from './components/UI/BaseCard.vue';
import TheHeader from './components/layout/TheHeader.vue'
import BaseButton from './components/UI/BaseButton.vue'
import TransparentButton from './components/UI/TransparentButton.vue';
import InputField from './components/layout/InputField.vue';
const app = createApp(App)

app.use(router)
app.use(store)
app.component('base-card', BaseCard);
app.component('the-header', TheHeader);
app.component('base-button', BaseButton);
app.component('transparent-button', TransparentButton);
app.component('InputField', InputField);
app.mount('#app')
