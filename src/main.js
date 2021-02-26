import Vue from 'vue'
import App from './App.vue'
import { store} from './_store/store';
import './assets/media_query.scss';

Vue.config.productionTip = false

new Vue({
  el: "#app",
  store: store, //store에 연결
  render: h => h(App),
}).$mount('#app')
