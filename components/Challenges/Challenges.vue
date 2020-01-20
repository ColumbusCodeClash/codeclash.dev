<template>
  <div>
    <div class="container">
      <div class="pr-md-5">
        <h2>
          Challenges
        </h2>
      </div>

      <div        
        v-for="(challenge, index) in challenges"
        v-bind:key="index"
        class="row"
      >
        <div class="col">
          <challenge :challenge="challenge" :color="color" :year="year"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pdf from 'pdfvuer';

import Challenge from './Challenge';
import Modal from './../Modal';

export default {
  name: 'problems',
  components: {
    Challenge,
    Modal,
    pdf
  },
  data() {
    return {
      pdfViewer: false
    }
  },
  props: ['year', 'color', 'data'],
  computed: {
    challenges: function() {
      return this.data[this.year].challenges
    }
  }
}
</script>

<style>
.challenges__file-button {
  width: 100%;
}
</style>