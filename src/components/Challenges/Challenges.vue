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
          <div class="card shadow-lg--hover mt-5 shadow">
            <div class="card-body">
              <h4 :class="challengeNameClass">
                {{ challenge.name }}
              </h4>

              <p class="mb-5">
                {{ challenge.description }}
              </p>

              <div class="container">
                <div class="row">
                  <div class="col mb-5">
                    <base-button
                      @click="pdfViewer = true"
                      :type="color"
                      icon="fa fa-file-pdf-o"
                      class="challenges__file-button"
                    >
                      Beginner
                    </base-button>
                  </div>

                  <div class="col">
                    <a :href="challenge.fileNonBeginner">
                      <base-button 
                        :type="color"
                        icon="fa fa-file-pdf-o"
                        class="challenges__file-button"
                      >
                        Non-Beginner
                      </base-button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal :show.sync="pdfViewer" gradient="secondary" modal-classes="modal-secondary modal-dialog-centered">
      <template slot="header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      </template>

      <div class="text-center">      
        <pdf src="B-AlphaMath.pdf" :page="1">
          <template slot="loading">
            <i class="fa fa-spinner fa-pulse fa-5x text-primary" aria-hidden="true"></i>
          </template>
        </pdf>
      </div>

      <template slot="footer">
        <base-button type="secondary" @click="pdfViewer = false">Close</base-button>
      </template>
    </modal>
  </div>
</template>

<script>
import pdf from 'pdfvuer';

import Modal from './../Modal';

export default {
  name: 'problems',
  components: {
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
    },
    challengeNameClass: function() {
      return `text-${this.color} text-uppercase`;
    }
  }
}
</script>

<style>
.challenges__file-button {
  width: 100%;
}
</style>