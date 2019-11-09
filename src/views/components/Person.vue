<template>
  <div class="px-4">
    <img
      v-lazy="imageUrl"
      class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
      style="width: 200px;"
    />
    <div class="pt-4 text-center">
      <h5 class="title">
        <span class="d-block mb-1">
          <slot name="name" />
        </span>
        <small class="h6 text-muted">
          <slot name="title" />
          <slot name="super-title" />
        </small>
      </h5>

      <div class="mt-3">
        <base-button
          v-if="usernameTwitter !== ''"
          :href=twitterUrl
          :type=iconType
          tag="a"
          icon="fa fa-twitter"
          rounded icon-only
        />
        <base-button
          v-if="usernameGitLab !== ''"
          :href=gitLabUrl
          :type=iconType
          tag="a"
          icon="fa fa-gitlab"
          rounded icon-only
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Person',
  props: {
    profileImage: {
      default: 'img/theme/team-1-800x800.jpg'
    },
    iconType: {
      default: 'info'
    },
    usernameGithub: {
      default: ''
    },
    usernameGitLab: {
      default: ''
    },
    usernameLinkedIn: {
      default: ''
    },
    usernameTwitter: {
      default: ''
    }
  },
  computed: {
    twitterUrl: function() {
      console.log(this)
      return `https://twitter.com/${this.usernameTwitter}`;
    },
    gitLabUrl: function() {
      return `https://gitlab.com/${this.usernameGitLab}`;
    }
  },
  data() {
    return {
      imageUrl:  this.profileImage
    }
  }
};
</script>

<style>
  .person__image {
    width: 200px;
  }
</style>