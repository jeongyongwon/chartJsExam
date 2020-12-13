<template>
    <div class="chart-container" >
        <canvas id="tradedetail2"></canvas>
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
        var ctx = document.getElementById('tradedetail2').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1월', '2월', '3월', '4월','5월','6월','7월','8월','9월','10월','11월','12월'],
                datasets: [{
                    label: '연간 요금 추이',
                    data: [12, 19, 3, 5, 12, 19, 20, 10,50,16,5,7],
                    backgroundColor: [
                       'rgba(255, 204, 051, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255, 204, 051, 1)',
                        'rgba(255, 204, 051, 1)',
                        'rgba(255, 204, 051, 1)',
                        'rgba(255, 204, 051, 1)',
                        'rgba(255, 204, 051, 1)',
                        'rgba(255, 204, 051, 1)',
                        'rgba(255, 204, 051, 1)',
                        'rgba(255, 204, 051, 1)',
                        'rgba(255, 204, 051, 1)',
                        'rgba(255, 204, 051, 1)',
                        'rgba(255, 204, 051, 1)',
                        'rgba(255, 204, 051, 1)',                                          
                    ],
                    borderWidth: 3
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