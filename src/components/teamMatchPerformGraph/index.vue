<template>
        <div>
          <div class="md-layout-item">
            <md-field>
                <md-select v-model="selectedTeamName" name="TeamName" id="country" placeholder="Country">
                    <md-option value="Chennai Super Kings">Chennai Super Kings</md-option>
                    <md-option value="Kolkata Knight Riders">Kolkata Knight Riders</md-option>
                    <md-option value="Royal Challengers Bangalore">Royal Challengers Bangalore</md-option>
                    <md-option value="Kings XI Punjab">Kings XI Punjab</md-option>
                    <md-option value="Rajasthan Royals">Rajasthan Royals</md-option>
                    <md-option value="Delhi Daredevils">Delhi Daredevils</md-option>
                    <md-option value="Mumbai Indians">Mumbai Indians</md-option>
                    <md-option value="Kochi Tuskers Kerala">Kochi Tuskers Kerala</md-option>
                    <md-option value="Pune Warriors">Pune Warriors</md-option>
                    <md-option value="Sunrisers Hyderabad">Sunrisers Hyderabad</md-option>
                    <md-option value="Rising Pune Supergiants">Rising Pune Supergiants</md-option>
                    <md-option value="Gujarat Lions">Gujarat Lions</md-option>
                    <md-option value="Deccan Chargers">Deccan Chargers</md-option>
                </md-select>
            </md-field>
        </div>
<!-- Find a workaround -->
      <div class="col" :v-model="seasonWiseGraph">
        <div class="Chart">
         <h1 style="text-align:center;">{{selectedTeamName}}</h1>
         <line-example :options="seasonWiseGraph.columns" :data="seasonWiseGraph.rows"></line-example>
        </div>
      </div>
      </div>
</template>


<script>
import axios from "axios";
import LineExample from "../../charts/LineExample";
export default {
  name: "TeamMatchPerformaGraph",
  components: {
    axios,
    LineExample
  },
  data() {
    return {
      Season: [],
      teamPerformanceGraphData: [],
      selectedTeamName: "Chennai Super Kings",
      sendData: {},
      loading: false
    };
  },
  computed: {
    seasonWiseGraph: function() {
      var _this = this;
      if (this.teamPerformanceGraphData[0] === undefined) return;

      let data = this.teamPerformanceGraphData[0].data.data;
      var filterSeasonWiseData = [];
      data.map(x => {
        if (x.Team_Name === _this.selectedTeamName) {
          filterSeasonWiseData.push(x);
        }
      });

      var row = [];
      var col = [];
      filterSeasonWiseData.map(x => {
        row.push(x.won);
        col.push(x.Season_Year);
      });

      this.sendData = {
        rows: row,
        columns: col
      };

      return this.sendData;
    }
  },
  created() {
    var _this = this;

    axios
      //getMatchPerformance
      .get(`https://mighty-garden-54587.herokuapp.com/getMatchPerformanceGraph`)
      .then(response => {
        debugger;
        _this.loading = true;
        _this.teamPerformanceGraphData.push(response.data);
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style lang="scss" scoped>
@import "~vue-material/src/components/MdAnimation/variables.scss";
.md-card-scope {
  max-width: 300px;
  max-height: 100px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

//TODO: Use Media query to solve this issue
.md-tab-scope {
  min-height: 150px;
}
</style>