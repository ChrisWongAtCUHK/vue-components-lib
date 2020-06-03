import Vue from 'vue'
import FlockBanner from './Banner.vue'
import FlockButton from './Button.vue'

const Components = {
  FlockBanner,
  FlockButton
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
