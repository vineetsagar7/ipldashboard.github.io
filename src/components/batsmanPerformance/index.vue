<template>
  <div>
  
    <!-- <table-search> </table-search> -->

  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import axios from "axios";
import TableSearch from "./TableSearch";


export default {
  name: "BatsmanPerformance",
  components: {
    axios,
    TableSearch
  },
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

  Title: "Bastman Performance"
};
</script>