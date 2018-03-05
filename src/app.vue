<template>
    <div id="app">
 <div class="page-container">

    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <span class="md-title">  {{ Title }}</span>
      </md-app-toolbar>
      <md-app-content>
        <!-- <table-search></table-search> -->
        <session-wise-performance> </session-wise-performance>
        <batsman-performance></batsman-performance>
        <bowlers-performance></bowlers-performance>  
        <team-match-performance> </team-match-performance> 
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
import TeamMatchPerformance from './components/teamMatchPerform'
import VueGoodTable from 'vue-good-table';

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
    TeamMatchPerformance
  },
  data() {
    return {
      Title: "IPL DashBoards"
    };
  }
};
</script>

<style lang="scss" scoped>
.md-app {
  max-height: 100%;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
