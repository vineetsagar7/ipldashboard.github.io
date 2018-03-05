<template>
  <div>
    <vue-good-table
      title=""
      :columns="columns"
      :rows="teamPerformance"
      :paginate="true"
      :lineNumbers="true"/>
  </div>
</template>

<script>
export default {
  name: "TableSearch",
  props: {
    teamPerformance: Array
  },
  data() {
    return {
      columns: [
        {
          label: "Season",
          field: "Season_Id",
          filterable: true
        },
        {
          label: "Team Name",
          field: "Team_Name",
          filterable: true
        },
        {
          label: "totalMatchedPlayed",
          field: "totalMatchedPlayed",
        },
        {
          label: "won",
          field: "won",
        },
        {
          label: "loss",
          field: "loss",
        }
      ],
      rows: this.teamPerformance
    };
  }
};
</script>