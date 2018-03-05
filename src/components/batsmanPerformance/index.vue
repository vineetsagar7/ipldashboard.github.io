<template>
  <div>
    <md-card>
        <md-card-header>
          <md-subheader class="md-primary">Team Performance</md-subheader>
        </md-card-header>
          <md-card-content>
      <table-search :batsManPerformance="topbatsMan[0].data.data"> </table-search>  
      </md-card-content>
      </md-card> 
  </div>
</template>

<script>
import axios from "axios";
import TableSearch from "./TableSearch";

export default {
  name: "BatsmanPerformance",
  components: {
    axios,
    TableSearch
  },
  data() {
    return {
      topPerformersPerseason: [],
      topbatsMan: []
    };
  },
  created() {
    var _this = this;
    axios
      .get(`https://mighty-garden-54587.herokuapp.com/getBatsmanAggScore`)
      .then(response => {
        // JSON responses are automatically parsed.
        _this.topbatsMan.push(response.data);
      })
      .catch(e => {
        this.errors.push(e);
      });

    //filtering needs to be done
    axios
      .get(
        `https://mighty-garden-54587.herokuapp.com/getTopPerformersPerSeason`
      )
      .then(response => {
        // JSON responses are automatically parsed.
        _this.topPerformersPerseason.push(response.data);
      })
      .catch(e => {
        this.errors.push(e);
      });
  },

  Title: "Bastman Performance"
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