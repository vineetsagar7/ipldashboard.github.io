<template>


    <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header class="md-width">
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Top 20 Leading Wicket Takers Bowlers</h1>
        </div>

        <!-- <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field> -->
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No users found"
        :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
        <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>
      </md-table-empty-state>

<!-- TODO:  -->

        <md-table-row slot="md-table-row" v-for="(row, rowIndex) in searched" :key="rowIndex" :md-item="row"> 
        <md-table-cell md-label="Name" md-sort-by="Player_Name" md-numeric>{{ row.Player_Name }}</md-table-cell>
        <md-table-cell md-label="Skill" md-sort-by="Bowling_Skill">{{ row.Bowling_Skill }}</md-table-cell>
        <md-table-cell md-label="Total Wickts" md-sort-by="Dissimal_Type">{{ row.Dissimal_Type }}</md-table-cell>
        <md-table-cell md-label="Country" md-sort-by="Country">{{ row.Country }}</md-table-cell>
       </md-table-row> 

      <!-- <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}s</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}s</md-table-cell>
        <md-table-cell md-label="Runs" md-sort-by="runs">{{ item.runs }}s</md-table-cell>
      </md-table-row> -->
      
    </md-table>
</template>

<script>
const toLower = text => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter(item => toLower(item.Player_Name).includes(toLower(term)));
  }

  return items;
};

export default {
  name: "TableSearch",
  props: {
    data: Array
  },
  data: () => ({
    search: null,
    searched: [],
    users: data[0]
  }),
  methods: {
    newUser() {
      window.alert("Noop");
    },
    searchOnTable() {
      this.searched = searchByName(this.data, this.search);
    }
  },
  created() {
    this.searched = this.data;
  }
};
</script>

<style lang="scss" scoped>
.md-width {
  width: 440px;
  height: 400px;
}
.md-field {
  max-width: 150px;
}
</style>