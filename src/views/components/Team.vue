<template>
  <div>
    <div class="row">
      <div class="col-md-6 col-lg-4 mb-5 mb-lg-4">
        <person
          icon-type="warning"
          emailAddress="mike@codeclash.dev"
          usernameGitLab="mdhand"
          :profileImage="images.mikeHand"
        >
          <template slot="name">Mike Hand</template>
          <template slot="title">Founder</template>
        </person>
      </div>
      
      <div class="col-md-6 col-lg-4 mb-5 mb-lg-4">
        <person 
          icon-type="success" 
          emailAddress="russell@codeclash.dev"
          usernameGitHub="russellwpatterson"
          websiteUrl="http://russellwritescode.com"
          :profileImage="images.russellPatterson">
          <template slot="name">Russell Patterson</template>
          <template slot="title">Technical Leadership</template>
        </person>
      </div>

      <div class="col-md-6 col-lg-4 mb-5 mb-lg-4">
        <person
          icon-type="info"
          emailAddress="hannah@codeclash.dev"
          usernameGitLab="hstannard"
          usernameTwitter="hannahrstannard"
          websiteUrl="http://hannahstannard.com"
          :profileImage="images.hannahStannard"
        >
          <template slot="name">Hannah Stannard</template>
          <template slot="title">Developer</template>
        </person>
      </div>

      <div class="col-md-6 col-lg-4 mb-5 mb-lg-4">
        <person
          icon-type="primary"
          emailAddress="brendan@codeclash.dev"
          usernameGitLab="brendantodahl"
          :profileImage="images.brendanTodahl"
        >
          <template slot="name">Brendan Todahl</template>
          <template slot="title">Developer</template>
        </person>
      </div>
      
      <div class="col-md-6 col-lg-4 mb-5 mb-lg-4">
        <person
          icon-type="danger"
          emailAddress="grant@codeclash.dev"
          usernameGitLab="gstannard"
          :profileImage="images.grantStannard"
        >
          <template slot="name">Grant Stannard</template>
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
        mikeHand: require('./../../assets/profile-mike-hand.jpg'),
        russellPatterson: require('./../../assets/profile-russell-patterson.jpg'),
        brendanTodahl: require('./../../assets/profile-brendan-todahl.jpg'),
      }
    }
  }
};
</script>

<style>
</style>