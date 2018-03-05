import { Line } from "../BaseCharts";

export default {
  extends: Line,
  props: {
    row: Array,
    col: Array
  },
  mounted() {
    this.renderChart(
      {
        labels: this.row,
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: this.col
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
