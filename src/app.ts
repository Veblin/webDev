import Vue from 'vue'
import App from './app.vue'
// TODO ！vue-echarts 路径问题！
// import ECharts from 'vue-echarts/components/ECharts.vue'
// import Charts from './components/chartsLine.vue'
import './styles/style.scss' //load styles
// mount
new Vue({
  el: '#app',
  render: h => h(App, {
    props: { propMessage: 'World' }
  })
})
// new Vue({
//     el: '#app',
//   components: {
//     demo: Charts
//   },
//   render: h => h(Charts)
// })
