<template>
  <div>
    <code-clash-header />

    <nuxt />
  </div>
</template>

<script>
import CodeClashHeader from './../components/CodeClashHeader'

export default {
  components: {
    CodeClashHeader
  },
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
