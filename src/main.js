import Vue from 'vue'
import App from './app'
import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'

new Vue({
    el: '#app',
    render: h => h(App)
})