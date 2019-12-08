import Vue from 'vue';
import Router from 'vue-router';
import AboutUs from './views/AboutUs';
import Landing from './views/Landing';
import Branding from './layout/Branding';
import PastCompetitions from './views/PastCompetitions';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'landing',
      components: {
        branding: Branding,
        default: Landing
      }
    },
    {
      path: '/about-us',
      name: 'about-us',
      components: {
        default: AboutUs
      }
    },
    {
      path: '/past-competitions',
      name: 'past-competitions',
      components: {
        default: PastCompetitions
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
