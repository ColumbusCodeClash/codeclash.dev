<template>
  <div>
    <div>
      <div class="pr-md-5">
        <div>
          <div :class="iconClass">
            <i class="fa fa-trophy"></i>
          </div>
        </div>
        
        <div class="mt-5">
          <h2>
            Champions of {{ year }}
          </h2>
          <p class="lead">
            {{ tagline(year)}}
          </p>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col mb-5">
          <beginner :data="beginnerData" :color="color" />
        </div>
        <div class="col mb-5">
          <non-beginner :data="nonBeginnerData" :color="color" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Beginner from './Beginner';
import NonBeginner from './NonBeginner';
import data from './../../../data/challenges';

export default {
  name: 'champions',
  components: {
    Beginner,
    NonBeginner
  },
  props: ['year', 'color', 'data'],
  computed: {
    beginnerData: function() {
      return this.data[this.year].beginner;
    },
    nonBeginnerData: function() {
      return this.data[this.year].nonBeginner;
    },
    iconClass: function() {
      return `icon icon-shape bg-gradient-${this.color} shadow rounded-circle text-white`;
    }
  },
  methods: {
    tagline(year) {
      return this.data[year].tagline || '';
    }
  }
}
</script>

<style>

</style>