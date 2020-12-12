<template>
    <div class="chart-container" >
        <canvas id="myChart1"></canvas>
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
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4','5','6','7','8','9','10','11','12'],
                datasets: [{
                    label: '친환경 에너지 사용률',
                    data: [12, 19, 3, 5, 12, 19, 20, 10,50,16,5,7],
                    backgroundColor: [
                        'rgba(051, 255, 153, 0.2)', 

                    ],
                    borderColor: [
                        'rgba(051, 255, 153, 1)',
                        'rgba(051, 255, 153, 1)',
                        'rgba(051, 255, 153, 1)',
                        'rgba(051, 255, 153, 1)',
                        'rgba(051, 255, 153, 1)',
                        'rgba(051, 255, 153, 1)',
                        'rgba(051, 255, 153, 1)',
                        'rgba(051, 255, 153, 1)',
                        'rgba(051, 255, 153, 1)',
                        'rgba(051, 255, 153, 1)',
                        'rgba(051, 255, 153, 1)',
                        'rgba(051, 255, 153, 1)',
                                            

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

<style>

</style>