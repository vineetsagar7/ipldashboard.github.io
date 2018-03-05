<template>
      <div>
        <md-card>
          <md-card-header>
              <div class="md-title">Dissmisal Type in all IPL matches</div>
          </md-card-header>
          <md-card-content>
              <div v-if="loading">
                  <pie-example :Index="DissmisalTypeIndex" :data="dissmisalTypeData"> </pie-example>
              </div>
          </md-card-content>
      </md-card>
    <table-search :boelerPerformance="mostWicketTackers[0].data.data" > </table-search>    
  </div>
</template>

<script>
import axios from "axios";
import PieExample from "../../charts/PieExample";
import TableSearch from "./TableSearch";

export default {
  name: "LayoutHorizontalColumns",
  components: {
    PieExample,
    TableSearch,
    axios
  },
  data() {
    return {
      DissmisalTypeIndex: [],
      dissmisalTypeData: [],
      mostWicketTackers: [],
      loading: false
    };
  },
  created() {
    var _this = this;
    axios
      .get(`https://mighty-garden-54587.herokuapp.com/getMmostWisketTackers`)
      .then(response => {
        _this.mostWicketTackers.push(response.data);
      })
      .catch(e => {
        this.errors.push(e);
      });

    axios
      .get(`https://mighty-garden-54587.herokuapp.com/getDissmisalType`)
      .then(response => {
        _this.loading = true;
        _this.DissmisalTypeIndex.push(response.data.data.index);
        _this.dissmisalTypeData.push(response.data.data.data);
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>