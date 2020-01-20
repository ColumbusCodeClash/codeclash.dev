<template>  
  <div class="card text-center border-0 card-lift--hover shadow">
    <div class="card-body py-5">
      <h4 :class="levelClass">
        <slot name="level" />
      </h4>                
      <h5>
        <slot name="teamName" />
      </h5>
      <p>
        <slot name="teamMembers" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'level-card',
  props: ['color'],
  computed: {
    levelClass: function() {
      return `text-${this.color} text-uppercase`;
    }
  }
}
</script>

<style>

</style>