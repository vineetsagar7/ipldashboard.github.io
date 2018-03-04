import { Pie } from '../BaseCharts'

export default {
  extends: Pie,
  props: [dissmisalType],
  mounted () {
    this.renderChart({
      labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: dissmisalType.data
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
