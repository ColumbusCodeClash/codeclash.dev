<template>
  <section class="section section-lg">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-lg-8">
          <h2 class="display-3">Past Competitions</h2>
          <p class="lead text-muted">
            Curious who won in previous competitions? Or maybe, you're wanting to get an idea of what sort of problems you can expect in our upcoming competition. Either way, this is the page to be!
          </p>
          <p>
            <a
              v-for="(year, index) in years"              
              v-bind:key="index"
              class="px-2"
              :href="onPageLink(year)"
            >
              <badge pill type="secondary">{{ year }}</badge>
              <template v-if="index !== (years.length - 1)">
                •
              </template>
            </a>
          </p>
        </div>
      </div>
      <past-competition
        v-for="(competition, index) in competitions"
        v-bind:key="index"
        :year="Object.keys(competition)[0]"
        :id="Object.keys(competition)[0]"
        :data="competition"
        color="danger"
      />
    </div>
  </section>
</template>

<script>
import PastCompetition from './../components/Challenges/PastCompetition';
import data from './../data/challenges';

export default {
  name: 'past-competitions',
  components: {
    PastCompetition
  },
  computed: {    
    competitions: function() {
      return data;
    },
    years: function() {
      return Object.keys(data.sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])[0]);
    }
  },
  methods: {
    onPageLink(id) {
      return `#${id}`;
    }
  }
};
</script>

<style>
</style>