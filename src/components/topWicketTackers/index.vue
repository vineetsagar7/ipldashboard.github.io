<template>
    <div>
      <table-search :boelerPerformance="mostWicketTackers[0].data.data" > </table-search>    
  </div>
</template>

<script>
import axios from "axios";
import TableSearch from "./TableSearch";

export default {
  name: "TopWicketTackers",
  components: {
    TableSearch,
    axios
  },
  data() {
    return {
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
  }
};
</script>