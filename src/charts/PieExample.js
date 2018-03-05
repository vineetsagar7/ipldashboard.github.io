import { Pie } from '../BaseCharts'

export default {
  extends: Pie,
  props: {
    Index: Array,
    data: Array
  },
  mounted() {
    this.renderChart({
      labels: this.Index[0],
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16',
            '#b88440',
            '#405ab8',
            '#b89a40',
            '#ac40b8',
            '#b82a40'
          ],
          data: this.data[0]
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }
}
