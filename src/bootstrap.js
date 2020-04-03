import Vue from 'vue'

import ElementUI from 'element-ui'
import Resource from 'vue-resource'
import Bars from 'vuebars'
import vueEventCalendar from 'vue-event-calendar'
import VueAnimateNumber from 'vue-animate-number'
import VueGmaps from 'vue-gmaps'
import VueLayers from 'vuelayers'
import VCharts from 'v-charts'

Vue.use(ElementUI)
Vue.use(Resource)
Vue.use(Bars)
Vue.use(vueEventCalendar, {locale: 'en'})
Vue.use(VueAnimateNumber)
Vue.use(VueGmaps, {
  key: 'AIzaSyCpr35b_ZSoP8nbz0VnBjVz6ABb7iurRCU',
  libraries: ['places'],
  version: '3'
})
Vue.use(VueLayers)
Vue.use(VCharts)

import 'bootstrap/dist/css/bootstrap.css'
import 'element-ui/lib/theme-chalk/index.css'


import 'material-design-icons/iconfont/material-icons.css'
import 'dripicons/webfont/webfont.css'
import 'vuelayers/lib/style.css'


window.jQuery = require('jquery')
window.$ = require('jquery')

require('bootstrap')
require('../node_modules/admin-lte/dist/js/app.min.js')
require('../node_modules/admin-lte/dist/js/demo.js')
require('../node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.js')