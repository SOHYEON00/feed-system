import Vue from 'vue'
import App from './App.vue'
import { store} from './_store/store';

Vue.config.productionTip = false

new Vue({
  el: "#app",
  store: store, //store에 연결
  render: h => h(App),
}).$mount('#app')
