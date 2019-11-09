<template>
  <div class="row">
    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
      <person icon-type="warning" usernameGitLab="mdhand">
        <template slot="name">Mike Hand</template>
        <template slot="title">Founder</template>
      </person>
    </div>
    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
      <person icon-type="primary" usernameGitLab="brendantodahl">
        <template slot="name">Brendan Todahl</template>
        <template slot="title">Developer</template>
      </person>
    </div>
    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
      <person icon-type="info" usernameGitLab="hstannard" usernameTwitter="hannahrstannard">
        <template slot="name">Hannah Stannard</template>
        <template slot="title">Developer</template>
      </person>
    </div>
    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
      <person icon-type="success" usernameGitLab="rwpcpe">
        <template slot="name">Russell Patterson</template>
        <template slot="title">Developer</template>
        <template slot="super-title"> (Superman)</template>
      </person>
    </div>
  </div>
</template>

<script>
import Person from './Person';

export default {
  name: 'team',
  components: {
    Person
  }
};
</script>

<style>
</style>