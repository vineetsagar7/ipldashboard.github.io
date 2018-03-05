<template>
  <div class="table-width">
    <vue-good-table
      title="Top 20 wicktes taker"
      :columns="columns"
      :rows="boelerPerformance"
      :paginate="true"
      :lineNumbers="true"
      />
  </div>
</template>

<script>
export default {
  name: "TableSearch",
  props: {
    boelerPerformance: Array
  },
  data() {
    return {
      columns: [
        {
          label: "Player Name",
          field: "Player_Name",
          filterable: true
        },
        {
          label: "Bowling Type",
          field: "Bowling_Skill",
          filterable: true
        },
        {
          label: "Total Wickets",
          field: "Dissimal_Type"
        },
        {
          label: "Country",
          field: "Country"
        }
      ],
      rows: this.boelerPerformance
    };
  }
};
</script>

<style scoped>
.table-width {
  width: 550px;
}
</style>