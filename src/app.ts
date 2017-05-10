import Vue from 'vue'
import App from './app.vue'

// import './styles/style.scss' //load styles
// mount
new Vue({
  el: '#app',
  render: h => h(App, {
    props: { propMessage: 'World' }
  })
})
