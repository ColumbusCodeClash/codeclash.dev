<template>
    <div>
        <h4 v-text="title" class="text-center text-success text-uppercase"></h4>
        <ol>
            <li
                v-for="(team, index) in teams"
                v-bind:key="index"
            >
                <team-record :team="team"></team-record>
            </li>
        </ol>
    </div>
</template>

<script>
import TeamRecord from './TeamRecord';

export default {
  name: 'single-leader-board',
  components: {
      TeamRecord
  },
  props: ['title', 'teams'],
};
</script>

<style>
ol {
    list-style: none;
}
</style>