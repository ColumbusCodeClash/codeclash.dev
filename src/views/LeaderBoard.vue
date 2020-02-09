<template>
  <section class="section section-lg">
    <div class="container">
      <h2 class="text-center display-3">Leader Board</h2>
      <div class="row">
        <div class="col-6">
          <single-leader-board title="Beginner" :teams="beginnerTeams" />
        </div>
        <div class="col-6">
          <single-leader-board title="Non-Beginner" :teams="experiencedTeams" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SingleLeaderBoard from './components/SingleLeaderBoard';

export default {
  name: 'leader-board',
  components: {
    SingleLeaderBoard
  },
  data() {
    var determineRank = function(teams) {
      var sortedTeams = teams.sort((a,b) => (b.win - a.win) || (a.lose - b.lose));
      var currentRank = 0;
      return sortedTeams.map(function(team, index) {
        if (index === 0 ||
            sortedTeams[index - 1].win !== sortedTeams[index].win ||
            sortedTeams[index - 1].lose !== sortedTeams[index].lose) {
            currentRank = index + 1;
        }
        team.rank = currentRank;
        return team;
      });
    }

    // todo: This will be replaced by an API call.
    var teams = require('./../data/teams.json');
    return {
      beginnerTeams: determineRank(teams.beginnerTeams),
      experiencedTeams: determineRank(teams.experiencedTeams)
    };
  },
};
</script>

<style></style>