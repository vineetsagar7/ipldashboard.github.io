<template>
    <div>
      <md-card>
        <md-card-header>
          <md-subheader class="md-primary">Top 20 Leading Wicket Takers Bowlers </md-subheader>
        </md-card-header>
          <md-card-content>
              <md-progress-spinner v-if="!loading" :md-diameter="30" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
              <div v-if="loading">
                 <table-search :boelerPerformance="mostWicketTackers[0].data.data" > </table-search>   
              </div>
          </md-card-content>
      </md-card> 
  </div>
</template>

<script>
import axios from "axios";
import TableSearch from "./TableSearch";

export default {
  name: "TopWicketTackers",
  components: {
    TableSearch,
    axios
  },
  data() {
    return {
      mostWicketTackers: [],
      loading: false
    };
  },
  created() {
    var _this = this;
    axios
      .get(`https://mighty-garden-54587.herokuapp.com/getMmostWisketTackers`)
      .then(response => {
        _this.loading = true;
        _this.mostWicketTackers.push(response.data);
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>