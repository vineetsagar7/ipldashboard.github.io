<template>
    <div id="app">
    {{ msg }}


    <div class='container'>
        <div class="col">

    <div class="Chart">
      <h1 style="text-align:center;">Barcharts</h1>
      <bar-example></bar-example>
    </div>
        </div>
         <div class="col">

    <div class="Chart">
      <h1 style="text-align:center;">Horizontal Barchart</h1>
      <horizontal-bar-example></horizontal-bar-example>
    </div>
        </div>
         <div class="col">
               <div class="Chart">
      <h1 style="text-align:center;">Linechart</h1>
      <line-example></line-example>
    </div>
        </div>
    </div>



    <!-- <div class="Chart">
      <h1 style="text-align:center;">Barchart with reactive mixing for live data</h1>
      <reactive-example></reactive-example>
    </div> -->

    <!-- <div class="Chart">
      <h1 style="text-align:center;">Barchart with reactive mixing for live data as props</h1>
      <reactive-prop-example :chart-data="dataPoints"></reactive-prop-example>
    </div> -->



    <div class="Chart">
      <h1 style="text-align:center;">Doughnutchart</h1>
      <doughnut-example></doughnut-example>
    </div>

    <div class="Chart">
      <h1 style="text-align:center;">Piechart</h1>
      <pie-example></pie-example>
    </div>

    <div class="Chart">
      <h1 style="text-align:center;">Radarchart</h1>
      <radar-example></radar-example>
    </div>

    <div class="Chart">
      <h1 style="text-align:center;">Polararea</h1>
      <polar-area-example></polar-area-example>
    </div>

    <div class="Chart">
      <h1 style="text-align:center;">Bubblechart</h1>
      <bubble-example></bubble-example>
    </div>

    <div class="Chart">
      <h1 style="text-align:center;">Scatter Chart</h1>
      <scatter-example></scatter-example>
    </div>
    </div>

</template>

<script>
import BubbleExample from "./charts/BubbleExample";
import BarExample from "./charts/BarExample";
import LineExample from "./charts/LineExample";
import DoughnutExample from "./charts/DoughnutExample";
import PieExample from "./charts/PieExample";
import RadarExample from "./charts/RadarExample";
import PolarAreaExample from "./charts/PolarAreaExample";
import ReactiveExample from "./charts/ReactiveExample";
import ReactivePropExample from "./charts/ReactivePropExample";
import ScatterExample from "./charts/ScatterExample";
import HorizontalBarExample from "./charts/HorizontalBarExample";
import Vue from "vue";
import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
// import "vue-material/dist/vue-material.min.css";

import axios from "axios";

export default {
  name: "app",
  components: {
    BubbleExample,
    BarExample,
    LineExample,
    DoughnutExample,
    PieExample,
    RadarExample,
    PolarAreaExample,
    //ReactiveExample,
    //ReactivePropExample,
    ScatterExample,
    HorizontalBarExample
  },
  data() {
    return {
      msg: "IPL DashBoards"
    };
  },

  /**@augments
   * Not making axios call, as not sure where i am going to host my nodejs server
   * Request can be fetched and saved in the service worker.
   */

  created() {
    axios
      .get(`https://mighty-garden-54587.herokuapp.com/getBatsmanAggScore`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },

  mounted() {
    setInterval(() => {
      this.fillData();
    }, 2000);
  },
  methods: {
    increaseHeight() {
      this.height += 10;
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    fillData() {
      this.dataPoints = {
        labels: [
          "January" + this.getRandomInt(),
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          }
        ]
      };
    }
  },
  computed: {
    myStyles() {
      return {
        height: `${this.height}px`,
        position: "relative"
      };
    }
  }
};
</script>
