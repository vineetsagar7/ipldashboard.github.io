<template>
 <md-tabs md-sync-route md-alignment="centered">

      <template v-for="x in goldenPlayer[0].data">
        <md-tab class="md-tab-scope" :id="'mdtab'+x.Season_Year" :md-label="x.Season_Year" :key="'mdtab'+x.index">

          <div class="text-md-center centerd">

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

    </div>
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
      goldenPlayer: [],
      loading: false
    };
  },
  created() {
    var _this = this;
    axios
      .get(`https://mighty-garden-54587.herokuapp.com/getOrangePurpleSeries`)
      .then(response => {
        _this.loading = true;
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
}

.centerd {
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
}
</style>