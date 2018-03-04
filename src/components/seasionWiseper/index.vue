<template>
    <div class="season-performance">
       <div>
    <md-tabs md-sync-route md-alignment="centered">
      <md-tab class="md-tab-scope" id="tab-home" md-label="2008" to="/components/tabs/home">
        

    <md-card class="md-accent md-card-scope" md-with-hover>
           <md-ripple>
        <md-card-header>
          <div class="md-title">Man Of The Series</div>
        </md-card-header>
        <md-card-content>
          Virat Kohli
        </md-card-content>
             </md-ripple>
    </md-card>


    <md-card class="md-primary md-card-scope" md-theme="purple-card" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Orange Cap</div>
        </md-card-header>
        <md-card-content>
          Suresh Raina
        </md-card-content>
      </md-ripple>
    </md-card>





    <md-card class="md-primary md-card-scope" md-theme="orange-card" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Purple Cap</div>
        </md-card-header>
        <md-card-content>
          Rahul Dravid
        </md-card-content>
      </md-ripple>
    </md-card>





    </md-tab>
    </md-tabs>
  </div>
    
    </div>
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
        _this.goldenPlayer.push(response);
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
  width: 250px;
  height: 200px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.md-tab-scope {
  height: 350px;
}
</style>