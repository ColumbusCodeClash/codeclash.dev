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
    <div class="pt-2 text-center">
      <h5 class="title">
        <span class="d-block mb-1">
          <slot name="name" />
        </span>
        <small class="h6 text-muted">
          <slot name="title" />
          <slot name="super-title" />
        </small>
      </h5>

      <div class="mt-1">
        <base-button
          v-if="emailAddress !== ''"
          :href=emailUrl
          :type=iconType
          tag="a"
          icon="fa fa-envelope"
          rounded icon-only
        />
        <base-button
          v-if="usernameTwitter !== ''"
          :href=twitterUrl
          :type=iconType
          tag="a"
          icon="fa fa-twitter"
          rounded icon-only newWindow
        />
        <base-button
          v-if="usernameGitHub !== ''"
          :href=gitHubUrl
          :type=iconType
          tag="a"
          icon="fa fa-github"
          rounded icon-only newWindow
        />
        <base-button
          v-if="websiteUrl !== ''"
          :href=websiteUrl
          :type=iconType
          tag="a"
          icon="fa fa-code"
          rounded icon-only newWindow
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
    usernameGitHub: {
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
    },
    emailAddress: {
      default: ''
    }
  },
  computed: {
    twitterUrl: function() {
      return `https://twitter.com/${this.usernameTwitter}`;
    },
    gitHubUrl: function() {
      return `https://github.com/${this.usernameGitHub}`;
    },
    emailUrl: function() {
      return `mailto:${this.emailAddress}`;
    }
  }
};
</script>

<style>
  .person__image {
    width: 200px;
  }
</style>