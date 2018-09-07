// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { Button, Row, Col ,Search , Swipe , SwipeItem,Lazyload} from 'vant'
Vue.use(Button).use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem).use(Lazyload)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http=axios
Vue.config.productionTip = false

let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//得到html的Dom元素
let htmlDom = document.getElementsByTagName('html')[0];
if(htmlWidth>750){htmlWidth=750}
//设置根元素字体大小
htmlDom.style.fontSize= htmlWidth/20 + 'px';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
