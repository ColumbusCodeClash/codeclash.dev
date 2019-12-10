<template>
  <div id="app">
    <app-header />
    <main>
      <router-view name="branding"></router-view>
      <news-alerts
        :class="{ hidden: shouldHideNewsAlert }"
        type="info"
      >
        <template slot="news">
          <strong>Check back</strong> for more information about our upcoming programming competition for <strong>2020</strong>!
        </template>
      </news-alerts>
      <router-view/>
    </main>
  </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";
import NewsAlerts from './components/NewsAlerts';
import AppHeader from './layout/AppHeader';

export default {
  components: {
    AppHeader,
    FadeTransition,
    NewsAlerts
  },
  computed: {
    shouldHideNewsAlert: function() {
      return this.$route.name === undefined;
    }
  }
};
</script>

<style>
.hidden {
  display: none;
}
</style>