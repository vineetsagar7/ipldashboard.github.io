<template>
    <div>
      <md-card>
        <md-card-header>
            <md-subheader class="md-primary">Dissmisal Type</md-subheader>
        </md-card-header>
            <md-card-content>
              <table-search :teamPerformance="filteredTeamsPerformance"> </table-search>  
            </md-card-content>
      </md-card>
    </div>
</template>
<script>
import axios from "axios";
import TableSearch from "./TableSearch";
export default {
  name: "TeamMatchPerformance",
  components: {
    axios,
    TableSearch
  },
  data() {
    return {
      teamPerformance: []
    };
  },
  computed: {
    filteredTeamsPerformance: function() {
      if (this.teamPerformance[0] === undefined) return;
      //this.teamPerformance.filter(team => {});
      return this.teamPerformance[0].data.data;
    }
  },
  created() {
    var _this = this;
    axios
      //getMatchPerformance
      .get(`https://mighty-garden-54587.herokuapp.com/getMatchPerformance`)
      .then(response => {
        _this.teamPerformance.push(response.data);
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>