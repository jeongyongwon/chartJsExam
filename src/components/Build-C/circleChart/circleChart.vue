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
                labels:["화석에너지", "자체생산에너지", "친환경에너지"],
                datasets:  [{
                    data:[25,23,52],
                    backgroundColor : [
                        "#FF6384",
                        "#f79546",
                        "#5f497a",
                       
                    ],
                    borderWidth: 0, 
                    label: "Dataset 1"

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