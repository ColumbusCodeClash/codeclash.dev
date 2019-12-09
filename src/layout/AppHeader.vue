<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="primary" effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <div class="logo">
          CCC
        </div>
      </router-link>

      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
          <div class="logo">
            CCC
          </div>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <li class="nav-item">
          <router-link
            to="/past-competitions"
            class="text-white nav-link nav-link-inner--text"
          >
          Past Competitions
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
            to="/sponsors"
            class="text-white nav-link nav-link-inner--text"
          >
          Sponsors
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
            to="/about-us"
            class="text-white nav-link nav-link-inner--text"
          >
          About Us
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.facebook.com/events/364076127794134/"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Like us on Facebook"
          >
            <i class="fa fa-facebook-square"></i>
            <span class="nav-link-inner--text d-lg-none">Facebook</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.linkedin.com/company/central-ohio-programming-competition/about/"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Follow us on LinkedIn"
          >
            <i class="fa fa-linkedin"></i>
            <span class="nav-link-inner--text d-lg-none">LinkedIn</span>
          </a>
        </li>
      </ul>
    </base-nav>
  </header>
</template>

<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap');

nav.navbar-transparent { 
  position: inherit;
}

.logo {
  border: 3px solid white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
  padding-left: 30px;
  letter-spacing: 3px;
  font-weight: 400;
  font-size: 1.25rem;
}
</style>