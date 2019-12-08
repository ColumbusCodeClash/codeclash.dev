<template>
  <div id="app">
    <app-header />
    <main>
      <router-view name="branding"></router-view>
      <news-alerts type="info">
        <template slot="news">
          <strong>Check back</strong> for more information about our upcoming programming competition for <strong>2020</strong>!
        </template>
      </news-alerts>
      <router-view/>
    </main>
    <app-footer />
  </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import NewsAlerts from './components/NewsAlerts';
import AppHeader from './layout/AppHeader';
import AppFooter from './layout/AppFooter';

export default {
  components: {
    AppHeader,
    AppFooter,
    FadeTransition,
    NewsAlerts
  }
};
</script>
