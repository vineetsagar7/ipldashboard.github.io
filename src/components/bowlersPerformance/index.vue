<template>
      <div>
        <md-card>
          <md-card-header>
            <md-subheader class="md-primary">Dissmisal Type</md-subheader>
          </md-card-header>
          <md-card-content>
             <md-progress-spinner v-if="!loading" :md-diameter="30" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
              <div v-if="loading">
                  <pie-example :Index="DissmisalTypeIndex" :data="dissmisalTypeData"> </pie-example>
              </div>
          </md-card-content>
      </md-card>
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
      loading: false
    };
  },
  created() {
    var _this = this;
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