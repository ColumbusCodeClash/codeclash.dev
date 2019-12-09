<template>
  <section class="section section-lg">
    <div class="container">
      <div class="row justify-content-center text-center mb-lg">
        <div class="col-lg-8">
          <h2 class="display-3">Sponsors</h2>
          <p class="lead text-muted">
            We'd like to thank our sponsors for making <strong>Columbus Code Clash</strong> possible!
          </p>
        </div>
      </div>
      
      <div class="text-center">
        <div class="row">
          <div class="col sponsors_column">
            <a
              href="https://hmbnet.com/"
              target="_blank"
              class="sponsors__content"
            >
              <img
                :src="images.hmb"
                class="sponsors__image"
              />
            </a>
          </div>
          <div class="col sponsors_column">
            <a
              href="https://www.jetbrains.com/"
              target="_blank"
              class="sponsors__content"
            >
              <img
                :src="images.jetBrains"
                class="sponsors__image"
              />
            </a>
          </div>
          <!-- <div class="w-100"></div>
          <div class="col"><span>Column</span></div>
          <div class="col"><span>Column</span></div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'sponsors',
  data() {
    return {
      images: {
        hmb: require('./../assets/hmb-logo.png'),
        jetBrains: require('./../assets/jetbrains.png'),
      }
    }
  }
}
</script>

<style>
.sponsors_column {
  display: flex;
  margin: auto;
}

.sponsors__content {  
  margin: auto;
  text-align: center;
}

.sponsors__image {
  width: 200px;
}
</style>