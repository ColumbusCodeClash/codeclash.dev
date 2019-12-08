<template>
  <div>
    <div class="row">
      <div class="col-md-6 col-lg-3 mb-5 mb-lg-3">
        <person icon-type="warning" usernameGitLab="mdhand">
          <template slot="name">Mike Hand</template>
          <template slot="title">Founder, Leadership</template>
        </person>
      </div>
      
      <div class="col-md-6 col-lg-3 mb-5 mb-lg-3">
        <person icon-type="success" usernameGitLab="rwpcpe">
          <template slot="name">Russell Patterson</template>
          <template slot="title">Developer, Leadership</template>
        </person>
      </div>

      <div class="col-md-6 col-lg-3 mb-5 mb-lg-3">
        <person
          icon-type="danger"
          usernameGitLab="gstannard"
          :profileImage="images.grantStannard"
        >
          <template slot="name">Grant Stannard</template>
          <template slot="title">Developer</template>
        </person>
      </div>

      <div class="col-md-6 col-lg-3 mb-5 mb-lg-3">
        <person
          icon-type="info"
          usernameGitLab="hstannard"
          usernameTwitter="hannahrstannard"
          websiteUrl="http://hannahstannard.com"
          :profileImage="images.hannahStannard"
        >
          <template slot="name">Hannah Stannard</template>
          <template slot="title">Developer</template>
        </person>
      </div>
    </div>
    
    <div class="row">      
      <div class="col-md-6 col-lg-3 mb-5 mb-lg-3">
        <person icon-type="primary" usernameGitLab="brendantodahl">
          <template slot="name">Brendan Todahl</template>
          <template slot="title">Developer</template>
        </person>
      </div>
    </div>
  </div>
</template>

<script>
import Person from './Person';

export default {
  name: 'team',
  components: { 
    Person
  },
  data() {
    return {
      images: {
        grantStannard: require('./../../assets/profile-grant-stannard.jpg'),
        hannahStannard: require('./../../assets/profile-hannah-stannard.jpg'),
      }
    }
  }
};
</script>

<style>
</style>