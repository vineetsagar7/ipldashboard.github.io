<template>
        <div>
           <div class="md-layout-item">
            <md-field>
                <md-select v-model="Season" name="country" id="country" placeholder="Country">
                    <md-option value="1">Season 1</md-option>
                    <md-option value="2">Season 2</md-option>
                    <md-option value="3">Season 3</md-option>
                    <md-option value="4">Season 4</md-option>
                    <md-option value="5">Season 5</md-option>
                    <md-option value="6">Season 6</md-option>
                    <md-option value="7">Season 7</md-option>
                    <md-option value="8">Season 8</md-option>
                    <md-option value="9">Season 9</md-option>
                </md-select>
            </md-field>
      </div>
          <table-search :data="filteredTeamsPerformance" > </table-search>  
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
      Season: []
    };
  },
  computed: {
    filteredTeamsPerformance: function() {
      debugger;
      //this.teamPerformance.filter(team => {});
      console.log("this.teamPerformance[0] : " + this.teamPerformance);
      return this.teamPerformance[0];
    }
  },
  created() {
    var _this = this;
    axios
      .get(`https://mighty-garden-54587.herokuapp.com/getMatchPerformance`)
      .then(response => {
        _this.teamPerformance.push(response);
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