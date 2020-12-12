<template>
<!-- 소비자 내 사업자현황 -->
  <div class="app ">
    <div>
      <div class="head-title">내 사업장 영향</div>
    </div>

    <!-- 요약 그래프 -->
    <div class="summary-graph d-flex flex-row row">
      <Bar class="dummy-line bar-graph col"/>
      <Bar2 class="dummy-line bar-graph col"/>
      <Bar3 class="dummy-line bar-graph col"/>
    </div>

    <br>
    <!-- 예상 감면액 보드 -->
    <div class="tax-board dummy-line">
      <div class="tax-info">
        예상 감연액은 100,000원입니다
      </div>

      <div class="tax-energy">
        <div class="renewable">
          전체 소비 전력량 중 60% 신재생에너지 사용
        </div>

        <div class="fossil energy">
          전체 소비 전력량 중 43%가 화석 연료 에너지입니다. 3%를 더 줄이면 세금 1,000,000이 절약됩니다.
        </div>

      </div>
    </div>

    <br>
    <!-- 전월 전력 사용량 -->
    <div class="month-usage ">
      <div class="usage-title alert alert-light dummy-line">
        전월 전력 사용량
      </div>
      <br>
      <div class="graph-group d-flex flex-row row">
        <Bar4 class="" />
        
          
        <!-- <Circle/> -->
        <!-- <div class="bar-graphs col alert alert-light dummy-line ">
          일단 여긴 막대 그래프
        </div> -->
      </div>

      <!-- 주요 거래 발전소 -->
      <div class="row">
        <div class="pp-info col alert alert-light dummy-line">
          발전소 정보 1
        </div>

        <div class="pp-info col alert alert-light dummy-line ">
          발전소 정보 2
        </div>
      </div>


    </div>
    <!-- <canvas id="myChart" width="300" height="300"></canvas> -->
  </div>
</template>

<script>

// import Chart from 'chart.js'
import Bar from '../../components/Build-C/lineChart/lineChart'
import Bar2 from '../../components/Build-C/lineChart/lineChart2'
import Bar3 from '../../components/Build-C/lineChart/lineChart3'

import Bar4 from '../../components/Build-C/barChart/barChart'

// import Circle from '../../components/Build-C/circleChart/circleChart.vue'





export default {
    data() {
        return {
        value: 45,
        max: 100,
        // planetChartData : planetChartData
        }
    },
    components: {
      Bar,
      Bar2,
      Bar3,
      Bar4,
      // Circle,
    },
    methods: {
      // createChart(chatId, chartData) {
      //   const ctx = document.getElementById(chatId)
      //   const myChart = new Chart(ctx, {
      //     type: chartData.type,
      //     data: chartData.data,
      //     options: chartData.options
      //   })

      //   console.log(myChart)
      // }
    },
    created() {

    },
    mounted() {
      
    }
}
</script>

<style scoped>
* {
margin: 0;
padding: 0;
}

.app {
  width: 80%;
}

.dummy-line {
  border: red solid ;
}
.summary-graph {
  position: static;
}
.bar-graph {
  margin-left : 1rem;
  margin-right: 1rem;
}


</style>