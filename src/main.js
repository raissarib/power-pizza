import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// Importar arquivos CSS do Bootstrap e Bootstrap Vue
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Instalar o Bootstrap Vue
Vue.use(BootstrapVue);
// Opcionalmente instalar o plugin de ícones do Bootstrap Vue
Vue.use(IconsPlugin);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



