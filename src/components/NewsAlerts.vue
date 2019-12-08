<template>
  <div class="container mt-5">
    <base-alert
      :type="type"
      dismissible
    >
      <span class="alert-inner--icon">
        <i class="fa fa-newspaper-o"></i>
      </span>

      <span class="alert-inner--text">
        <slot name="news" />
      </span>
      
      <button
        @click="dismissed"
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </base-alert>
  </div>
</template>

<script>
export default {
  name: 'news-alerts',
  props: ['type'],
  data: function () {
    return {
      hasBeenDismissed: false
    }
  },
  methods: {
    dismissed() {
      hasBeenDismissed = !hasBeenDismissed;
    }
  }
}
</script>

<style>

</style>