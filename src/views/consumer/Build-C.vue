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
        <CircleChart class="col"/>
        <Bar4 class="col" />
      </div>
      <br>
      <!-- 주요 거래 발전소 -->

      <div>
        <p>주요 거래 발전소</p>
      </div>
      <div class="row">
        <div class="trade-pp-info col alert alert-light dummy-line">
          <div class="circle-area"></div>
          <div class="trade-pp-info-area">
            <div>발전소이름</div>
            <div>책임자이름</div>
            <div>발전에너지</div>
          </div>
          <div class="trade-pp-price-area">
            <div>00km/당</div>
            <div>1000원</div>
          </div>
        </div>

        <div class="trade-pp-info col alert alert-light dummy-line ">
          <div class="circle-area"></div>
          <div class="trade-pp-info-area">
            <div>발전소이름</div>
            <div>책임자이름</div>
            <div>발전에너지</div>
          </div>
          <div class="trade-pp-price-area">
            <div>00km/당</div>
            <div>1000원</div>
          </div>        
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

import CircleChart from '../../components/Build-C/circleChart/circleChart.vue'





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
      CircleChart
    },
    methods: {

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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;  
}
.trade-pp-info {
  display: flex;
  flex-direction: row;  
}
.circle-area {
  width:2rem;
  height:2rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  background: blueviolet;
  border-radius:50%;  
}
.trade-pp-info-area {
  display: flex;
  flex-direction: column;
}
.trade-pp-price-area {
  display: flex;
  flex-direction: column;  
}


</style>