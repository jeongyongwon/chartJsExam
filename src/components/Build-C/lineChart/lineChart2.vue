<template>
    <div class="chart-container" >
        <canvas id="myChart2"></canvas>
    </div>  
</template>

<script>

import Chart from 'chart.js'

export default {
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {
        var ctx = document.getElementById('myChart2').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4','5','6','7','8','9','10','11','12'],
                datasets: [{
                    label: '탄소 배출량',
                    data: [12, 19, 3, 5, 12, 19, 20, 10,50,16,5,7],
                    backgroundColor: [
                       'rgba(255, 000, 051, 0.2)',                                        

                    ],
                    borderColor: [
                        'rgba(255, 000, 051, 1)', 
                        'rgba(255, 000, 051, 1)',
                        'rgba(255, 000, 051, 1)',
                        'rgba(255, 000, 051, 1)',
                        'rgba(255, 000, 051, 1)',
                        'rgba(255, 000, 051, 1)',
                        'rgba(255, 000, 051, 1)',
                        'rgba(255, 000, 051, 1)',
                        'rgba(255, 000, 051, 1)',
                        'rgba(255, 000, 051, 1)',
                        'rgba(255, 000, 051, 1)',
                        'rgba(255, 000, 051, 1)',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
        console.log(myChart)
        }
}
</script>

<style scoped>

</style>