<template>
  <div>
    <section class="section">
      <champions
        :year="year"
        :color="color"
        :data="data"
      />
    </section>
    <section>
      <challenges
        :year="year"
        :color="color"
        :data="data"
      />
    </section>
  </div>
</template>

<script>
import Champions from './Champions/Champions';
import Challenges from './Challenges';

export default {
  name: 'past-competitions',
  components: {
    Champions,
    Challenges
  },
  props: ['year', 'color', 'data'],
};
</script>

<style>
</style>