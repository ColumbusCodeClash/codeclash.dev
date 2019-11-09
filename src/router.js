import Vue from 'vue';
import Router from 'vue-router';
import AppHeader from './layout/AppHeader';
import AppFooter from './layout/AppFooter';
import AboutUs from './views/AboutUs';
import Components from './views/Components';
import Landing from './views/Landing';
import Login from './views/Login';
import Register from './views/Register';
import Profile from './views/Profile';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'components',
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: '/about-us',
      name: 'about-us',
      components: {
        header: AppHeader,
        default: AboutUs,
        footer: AppFooter
      }
    },
    {
      path: '/landing',
      name: 'landing',
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
