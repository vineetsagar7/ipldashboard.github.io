<template>

   <div class="md-layout md-gutter md-alignment-center">
     <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">

      <md-card>
      <md-card-header>
        <div class="md-title">Most Wickets Tacker:</div>
      </md-card-header>
      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
      </md-card-content>
    </md-card>
    </div>

   <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">

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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PieExample from "../../charts/PieExample";

export default {
  name: "LayoutHorizontalColumns",
  components: {
    PieExample,
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

<style lang="scss" scoped>
@import "~vue-material/src/components/MdAnimation/variables.scss";

.md-layout-item {
  height: 200px;
  margin-top: 8px;
  margin-bottom: 8px;
  transition: 0.3s $md-transition-stand-timing;

  &:after {
    width: 100%;
    height: 100%;
    display: block;
    background: md-get-palette-color(purple, 200);
    content: " ";
  }
}
</style>