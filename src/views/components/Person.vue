<template>
  <div class="px-4">
    <img
      v-if="profileImage !== ''"
      class="rounded-circle img-center shadow shadow-lg--hover"
      style="width: 200px;"
      :src="profileImage"
    />
    <i
      v-else
      class="fa fa-user-circle rounded-circle img-center shadow shadow-lg--hover text-default"
      style="font-size: 200px; width: 200px; text-align: center;"
    >
    </i>
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
        <base-button
          v-if="websiteUrl !== ''"
          :href=websiteUrl
          :type=iconType
          tag="a"
          icon="fa fa-code"
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
      default: ''
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
    },
    websiteUrl: {
      default: ''
    }
  },
  computed: {
    twitterUrl: function() {
      return `https://twitter.com/${this.usernameTwitter}`;
    },
    gitLabUrl: function() {
      return `https://gitlab.com/${this.usernameGitLab}`;
    }
  }
};
</script>

<style>
  .person__image {
    width: 200px;
  }
</style>