<template>
    <div id="app">
 <div class="page-container">

    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <span class="md-title">  {{ Title }}</span>
      </md-app-toolbar>
      <md-app-content>
        <div>
            <session-wise-performance> </session-wise-performance>
       </div>
         <div>
       <teamMatch-performa-graph> </teamMatch-performa-graph>
            </div>
         <div>
       <bowlers-performance></bowlers-performance>
            </div>

        <!-- <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-large-size-100"><teamMatch-performa-graph> </teamMatch-performa-graph></div>
          <div class="md-layout-item md-large-size-100"><bowlers-performance></bowlers-performance></div>
        </div> -->
 <div>
        <team-match-performance> </team-match-performance> 
             </div>
              <div>
        <topWicket-tackers></topWicket-tackers>
         <div>
             </div>
        <batsman-performance></batsman-performance>
             </div>
      
      </md-app-content>
    </md-app>
  </div>
</div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
//import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
import VueMaterial from "vue-material";
import BatsmanPerformance from "./components/batsmanPerformance";
import bowlersPerformance from "./components/bowlersPerformance";
import sessionWisePerformance from "./components/seasionWiseper";
import TableSearch from "./components/batsmanPerformance/TableSearch";
import TeamMatchPerformance from "./components/teamMatchPerform";
import VueGoodTable from "vue-good-table";
import TopWicketTackers from "./components/topWicketTackers";
import TeamMatchPerformaGraph from "./components/teamMatchPerformGraph";

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

//TDOD: import only those which are required, to imperove performence, Not using Bootstrap.....
Vue.use(VueMaterial);
Vue.use(VueGoodTable);

export default {
  name: "app",
  components: {
    BatsmanPerformance,
    bowlersPerformance,
    sessionWisePerformance,
    TableSearch,
    TeamMatchPerformance,
    TopWicketTackers,
    TeamMatchPerformaGraph
  },
  data() {
    return {
      Title: "IPL DashBoards"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~vue-material/src/components/MdAnimation/variables.scss";
.md-app {
  max-height: 100%;
  border: 1px solid rgba(#000, 0.12);
}
.md-layout-item {
  height: 400px;
  min-width: 300px;

  &:nth-child(1) {
    background: md-get-palette-color(grey, 300);
  }

  &:nth-child(2) {
    background: md-get-palette-color(grey, 400);
  }
}
.margin-top {
  margin-bottom: 20px;
}
</style>
