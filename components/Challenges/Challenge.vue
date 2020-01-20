<template>
  <div class="card shadow-lg--hover mt-5 shadow">
    <div class="card-body">
      <h4 :class="challengeNameClass">{{ challenge.name }}</h4>

      <p class="mb-5">{{ challenge.description }}</p>

      <div class="container">
        <div class="row">
          <div class="col mb-5">
            <base-button
              @click="openPdf('beginner')"
              :type="color"
              icon="fa fa-file-pdf-o"
              class="challenges__file-button"
            >Beginner</base-button>
          </div>

          <div class="col">
            <base-button
              @click="openPdf('nonBeginner')"
              :type="color"
              icon="fa fa-file-pdf-o"
              class="challenges__file-button"
            >Non-Beginner</base-button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "challenge",
  props: ["challenge", "color", "year"],
  data() {
    return {
      file: {
        beginner: require(`./../../data/challenges/${this.year}/${this.challenge.fileBeginner}`),
        nonBeginner: require(`./../../data/challenges/${this.year}/${this.challenge.fileNonBeginner}`)
      }
    };
  },
  methods: {
      openPdf(level){
        window.open(this.file[level])
      }
  },
  computed: {
    challengeNameClass() {
      return `text-${this.color} text-uppercase`;
    }
  }
};
</script>
