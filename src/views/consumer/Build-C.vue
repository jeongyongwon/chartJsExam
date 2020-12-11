<template>
<!-- 소비자 내 사업자현황 -->
  <div class="app alert alert-success">
    <div>
      <div class="head-title">내 사업장 영향</div>
    </div>

    <!-- 요약 그래프 -->
    <div class="summary-graph d-flex flex-row row">
      <div class="graph-area alert alert-danger col dummy-line">
        밀도 그래프 
      </div>
      <div class="graph-area alert alert-danger col dummy-line">
        밀도 그래프 
      </div>
      <div class="graph-area alert alert-danger col dummy-line">
        밀도 그래프 
      </div>
    </div>

    <br>
    <!-- 예상 감면액 보드 -->
    <div class="tax-board alert alert-light dummy-line">
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
    <div class="month-usage">
      <div class="usage-title alert alert-light dummy-line">
        전월 전력 사용량
      </div>
      <br>
      <div class="graph-group row">
        <div class="circle-graph col alert alert-light dummy-line">
          일단 여긴 원그래프
        </div>

        <div class="bar-graphs col alert alert-light dummy-line ">
          일단 여긴 막대 그래프
        </div>
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
  </div>
</template>

<script>
export default {
    data() {
        return {
        value: 45,
        max: 100
        }
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
  width: 100%;
}

.dummy-line {
  border: red solid ;
}



</style>