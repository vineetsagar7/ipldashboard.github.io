<template>
  <div>
    <vue-good-table
      title="Team Performance"
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
          field: "Player_Name"
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