<template>
  <div class="table-width">
    <vue-good-table
      title=""
      :columns="columns"
      :rows="batsManPerformance"
      :paginate="true"
      :lineNumbers="true"/>
  </div>
</template>

<script>
export default {
  name: "TableSearch",
  props: {
    batsManPerformance: Array
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
          label: "Run Scored",
          field: "Batsman_Scored"
        }
      ],
      rows: this.batsManPerformance
    };
  }
};
</script>
