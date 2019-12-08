<template>  
  <level-card :color="color">
    <template slot="level">Non-beginner</template>
    <template slot="teamName">
      {{ data.teamName }}
    </template>
    <template slot="teamMembers">
      {{ data.teamMembers }}
    </template>
  </level-card>
</template>

<script>
import LevelCard from './LevelCard';

export default {
  name: 'non-beginner',
  components: {
    LevelCard
  },
  props: ['data', 'color']
}
</script>

<style>

</style>