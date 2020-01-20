<template>
  <div>
    <section class="hero is-link is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="logo-rounded home-hero">
            <img
              src="./../assets/logo_transparent_background.png"
              class="logo"
              alt="CCC"
            />
          </div>
          <p class="home-hero subtitle">
            Central Ohio's <strong>programming competition</strong>!
          </p>
        </div>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns">
            <div class="column">
              <span class="icon is-large">
                <i class="mdi mdi-seal mdi-48px"></i>
              </span>
              <h2 class="subtitle">
                <strong>
                  Beginner-friendly
                </strong>
              </h2>
              <p class="subtitle">
                Open to experienced and inexperienced
              </p>
            </div>

            <div class="column">
              <span class="icon is-large">
                <i class="mdi mdi-account-group mdi-48px"></i>
              </span>
              <h2 class="subtitle">
                <strong>
                  Team-based
                </strong>
              </h2>
              <p class="subtitle">
                Pair up with another programmer
              </p>
            </div>

            <div class="column">
              <span class="icon is-large">
                <i class="mdi mdi-trophy mdi-48px"></i>
              </span>
              <h2 class="subtitle">
                <strong>
                  Prizes
                </strong>
              </h2>
              <p class="subtitle">
                Win prizes from our sponsors
              </p>
            </div>

            <div class="column">
              <span class="icon is-large">
                <i class="mdi mdi-code-tags mdi-48px"></i>
              </span>
              <h2 class="subtitle">
                <strong>
                  Language-agnostic
                </strong>
              </h2>
              <p class="subtitle">
                Choose your <b>favorite</b> language
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-light">
      <div class="hero-body">
        <champions
          :year="Object.keys(mostRecentCompetition)[0]"
          :data="mostRecentCompetition"
          color="success"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Card from '~/components/Card'
import Champions from '~/components/Challenges/Champions/Champions';
import CurrentChallenge from '~/components/Challenges/CurrentChallenge';

import data from '~/data/challenges';

export default {
  name: 'HomePage',
  components: {
    Card,
    Champions,
    CurrentChallenge
  },
  computed: {    
    mostRecentCompetition: function() {
      return (data.sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0]))[0];
    },
  }
}
</script>

<style>
.logo-rounded.home-hero {
  background: #f5f5f5;
  display: inline-block;
  padding: 2.5rem;
  border-radius: 32px;
  box-shadow: 0 20px 60px hsla(0,0%,4%,.05), 0 5px 10px hsla(0,0%,4%,.1), 0 1px 1px hsla(0,0%,4%,.2);
  margin-bottom: 1.5rem;
  width: 40rem;
}

.logo-rounded.home-hero > img {
  height: 20rem;
}
</style>
