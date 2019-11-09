<template>
  <section class="section section-lg">
    <div class="container">
      <div class="row justify-content-center text-center mb-lg">
        <div class="col-lg-8">
          <h2 class="display-3">The Amazing Team</h2>
          <p class="lead text-muted">
            Meet the people who make the <strong>Central Ohio Programming Competition</strong> possible!
          </p>
        </div>
      </div>
      <team />
    </div>
  </section>
</template>

<script>
import Team from './components/Team';

export default {
  name: 'about-us',
  components: {
    Team
  }
};
</script>

<style>
</style>