import { Pie } from '../BaseCharts'

export default {
  extends: Pie,
  props: {
    Index: Array,
    data: Array
  },
  mounted() {
    debugger
    console.log("data----------:" + this.Index)
    this.renderChart({
      labels: this.Index[0],
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16',
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16',
            '#41B883'
          ],
          data: this.data[0]
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }
}
