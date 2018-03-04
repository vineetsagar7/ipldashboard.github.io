<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <md-card>
      <md-card-header>
        <div class="md-title">Most Wickets Tacker:</div>
      </md-card-header>
      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
      </md-card-content>
      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>

    </div>
    <div class="md-layout-item">

    </div>
    <div class="md-layout-item">

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LayoutHorizontalColumns",
  components: {
    axios
  },
  created() {
    axios
      .get(`https://mighty-garden-54587.herokuapp.com/getMmostWisketTackers`)
      .then(response => {
        // JSON responses are automatically parsed.
        debugger
        this.posts = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style lang="scss" scoped>
@import "~vue-material/src/components/MdAnimation/variables.scss";

.md-layout-item {
  height: 40px;

  &:nth-child(1) {
    background: md-get-palette-color(grey, 300);
  }

  &:nth-child(2) {
    background: md-get-palette-color(grey, 400);
  }

  &:nth-child(3) {
    background: md-get-palette-color(grey, 500);
  }
}
</style>