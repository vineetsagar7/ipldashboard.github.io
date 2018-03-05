<template>
    <div>
      <md-card>
        <md-card-header>
            <md-subheader class="md-primary">Best IPL Team till date</md-subheader>
        </md-card-header>
            <md-card-content>
              <div v-if="loading">
                 <table-search :teamPerformance="filteredTeamsPerformance"> </table-search>  
              </div>
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
      teamPerformance: [],
      loading: false
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
      .get(`https://mighty-garden-54587.herokuapp.com/getMatchPerformance`)
      .then(response => {
        _this.loading = true;
        _this.teamPerformance.push(response.data);
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>