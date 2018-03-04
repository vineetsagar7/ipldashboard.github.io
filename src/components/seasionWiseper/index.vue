<template>

    <md-tabs md-sync-route>

 <template v-for="x in goldenPlayer[0].data">
  <md-tab class="md-tab-scope" :id="x.Season_Year" :md-label="x.Season_Year" :key="x.index">
    <md-card class="md-primary md-card-scope" md-with-hover>
           <md-ripple>
        <md-card-header>
          <div class="md-title">Man Of The Series</div>
        </md-card-header>
        <md-card-content>
          {{x.Man_of_the_Series_Id}}
        </md-card-content>
             </md-ripple>
    </md-card>

    <md-card class="md-primary md-card-scope" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Orange Cap</div>
        </md-card-header>
        <md-card-content>
          {{x.Orange_Cap_Id}}
        </md-card-content>
      </md-ripple>
    </md-card>

    <md-card class="md-primary md-card-scope" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Purple Cap</div>
        </md-card-header>
        <md-card-content>
         {{x.Purple_Cap_Id}}
        </md-card-content>
      </md-ripple>
    </md-card>
    </md-tab>
       </template>
    </md-tabs>
</template>

<script>
import axios from "axios";
export default {
  name: "sessionWisePerformance",
  components: {
    axios
  },
  data() {
    return {
      goldenPlayer: []
    };
  },
  created() {
    var _this = this;
    axios
      .get(`https://mighty-garden-54587.herokuapp.com/getOrangePurpleSeries`)
      .then(response => {
        _this.goldenPlayer.push(response.data);
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
}</style>