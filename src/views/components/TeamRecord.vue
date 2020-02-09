<template>
    <div class="card shadow mb-2">
        <div class="card-body team-record d-flex justify-content-between">
            <strong v-text="team.rank"></strong>
            <span v-text="team.name"></span>
            <span v-text="record"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'team-record',
    props: ['team'],
    computed: {
        record: function() {
            return `${this.team.win} - ${this.team.lose}`;
        }
    }
};
</script>

<style>
.team-record {
    font-size: 18px;
}
</style>