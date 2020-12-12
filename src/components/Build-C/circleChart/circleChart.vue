<template>
    <div class="chart-container" >
        <canvas id="Circle1"></canvas>
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
        var ctx = document.getElementById('Circle1').getContext("2d"); 
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels:[
                    'pink'
                ],
                datasets:  [{
                    data:[10,25],
                    backgroundColor : [
                        "#FF6384"
                    ],
                    hoverBackgroundColor : [
                        "#FF6384" 
                    ]
                }]                
            },
            options: {

            }
        })
        console.log(myChart)
        }
}
</script>

<style scoped>

</style>