<template>
    <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header class="md-width">
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Users</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No users found"
        :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
        <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>
      </md-table-empty-state>

<!-- TODO:  -->

        <md-table-row slot="md-table-row" v-for="(row, rowIndex) in searched" :key="rowIndex" :md-item="row"> 
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ row.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ row.name }}</md-table-cell>
        <md-table-cell md-label="Runs" md-sort-by="runs">{{ row.runs }}</md-table-cell>
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
    return items.filter(item => toLower(item.name).includes(toLower(term)));
  }

  return items;
};

export default {
  name: "TableSearch",
  data: () => ({
    search: null,
    searched: [],
    users: [
      {
        id: 1,
        name: "Shawna Dubbin",
        runs: "234"
      },
      {
        id: 2,
        name: "Odette Demageard",
        runs: "576"
      },
      {
        id: 3,
        name: "Vera Taleworth",
        runs: "123"
      },
      {
        id: 4,
        name: "Lonnie Izkovitz",
        runs: "321"
      },
      {
        id: 5,
        name: "Thatcher Stave",
        runs: "543"
      },
      {
        id: 6,
        name: "Karim Chipping",
        runs: "12"
      },
      {
        id: 7,
        name: "Helge Holyard",
        runs: "32"
      },
      {
        id: 8,
        name: "Rod Titterton",
        runs: "56"
      },
      {
        id: 9,
        name: "Gawen Applewhite",
        runs: "12"
      },
      {
        id: 10,
        name: "Nero Mulgrew",
        runs: "54"
      },
      {
        id: 11,
        name: "Cybill Rimington",
        runs: "34"
      },
      {
        id: 12,
        name: "Maureene Eggleson",
        runs: "87"
      },
      {
        id: 13,
        name: "Cortney Caulket",
        runs: "86"
      },
      {
        id: 14,
        name: "Selig Swynfen",
        runs: "23"
      },
      {
        id: 15,
        name: "Ingar Raggles",
        runs: "76"
      },
      {
        id: 16,
        name: "Karmen Mines",
        runs: "923"
      },
      {
        id: 17,
        name: "Salome Judron",
        runs: "123"
      },
      {
        id: 18,
        name: "Clarinda Marieton",
        runs: "4312"
      },
      {
        id: 19,
        name: "Paxon Lotterington",
        runs: "123123"
      },
      {
        id: 20,
        name: "Maura Thoms",
        runs: "0"
      }
    ]
  }),
  methods: {
    newUser() {
      window.alert("Noop");
    },
    searchOnTable() {
      this.searched = searchByName(this.users, this.search);
    }
  },
  created() {
    this.searched = this.users;
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