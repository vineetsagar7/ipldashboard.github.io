<template>
  <div>
    <md-card>
        <md-card-header>
          <md-subheader class="md-primary">Top 30 IPL Leading Run Scorrer Batsman</md-subheader>
        </md-card-header>
          <md-card-content>
            <md-progress-spinner v-if="!loading" :md-diameter="30" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
            <div v-if="loading">
               <table-search :batsManPerformance="topbatsMan[0].data.data"> </table-search>  
            </div>
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
      topbatsMan: [],
      loading: false
    };
  },
  created() {
    var _this = this;
    axios
      .get(`https://mighty-garden-54587.herokuapp.com/getBatsmanAggScore`)
      .then(response => {
        _this.loading = true
        _this.topbatsMan.push(response.data);
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