<template>
  <div>
    <section>
      <current-challenge />
    </section>
    
    <section class="section"> 
      <div class="container">     
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
import Champions from './../components/Challenges/Champions/Champions';
import CurrentChallenge from './../components/Challenges/CurrentChallenge';

import data from './../data/challenges';

export default {
  name: 'home',
  components: {
    Champions,
    CurrentChallenge
  },
  computed: {    
    mostRecentCompetition: function() {
      return (data.sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0]))[0];
    },
  }
};
</script>

<style>
h1 > span {
  display: block;
  font-weight: 300;
}
</style>
