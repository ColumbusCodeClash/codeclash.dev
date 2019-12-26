import Vue from 'vue';
import Router from 'vue-router';
import AboutUs from './views/AboutUs';
import Landing from './views/Landing';
import Branding from './layout/Branding';
import PastCompetitions from './views/PastCompetitions';
import Sponsors from './views/Sponsors';
import LeaderBoard from './views/LeaderBoard';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'landing',
      components: {
        branding: Branding,
        default: Landing
      },
      meta: {
        title: 'Columbus Code Clash',
      }
    },
    {
      path: '/about-us',
      name: 'about-us',
      components: {
        default: AboutUs
      },
      meta: {
        title: 'Columbus Code Clash - About Us',
      }
    },
    {
      path: '/past-competitions',
      name: 'past-competitions',
      components: {
        default: PastCompetitions
      },
      meta: {
        title: 'Columbus Code Clash - Past Competitions',
      }
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      components: {
        default: Sponsors
      },
      meta: {
        title: 'Columbus Code Clash - Our Sponsor',
      }
    },
    {
      path: '/leader-board',
      name: 'leader-board',
      components: {
        default: LeaderBoard
      },
      meta: {
        title: 'Columbus Code Clash - Leader Board',
      }
    },
    {
      path: '*',
      component: NotFound,
      meta: {
        title: '404',
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
