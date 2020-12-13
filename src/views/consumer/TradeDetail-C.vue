<template>
<!-- 내 사업현황 상세보기 소비자 -->
  <div class="app">
      <div class="pp-info-area dummy-line row">

          <div class="info-text-area col">
            <div>발전소명</div>
            <div>발전소부가설명</div>
            <div>책임자</div>
            <div>042-000-000</div>
            <div>봉명동 655-3</div>
            <div>www.naver.com</div>
            <div>10km/h 당<strong>9999원</strong></div>
          </div>
          <div class="info-btn-img col">
              <div class="info-img-area">
                <img class="ppl-img" src="https://t1.daumcdn.net/cfile/tistory/99410A435C3C78C11D" alt="">
              </div>

              <div class="info-btn-area ">
                  <button class="btn btn-primary trade-btn ">에너지 거래내역</button>
                  <button class="btn btn-danger trade-btn ">에너지 거래하기</button>
              </div>
          </div>

      </div>
      <br>
      <br>
      <br>
      <br>
      <div class="chart-area dummy-line">
        <div class="chart-change-btn row">
          <div @click="lookEnergy" class="col detail-btn-area" :class="{'energyunderline ': IsEnergy }"> 
            <div class="detail-btn-name" :class="{'chartenergy': IsEnergy}">연간 발전량</div>
          </div>
          <div @click="lookPrice" class="col detail-btn-area" :class="{'priceunderline': IsPrice }"> 
            <div class="detail-btn-name" :class="{'chartprice': IsPrice}">연간 요금추이</div>            
          </div>
        </div>
        <hr>
        <br>
        <br>
        <Detail1 v-if="IsEnergy" />
        <Detail2 v-if="IsPrice" />
      </div>
  </div>
</template>




<script>

import Detail1 from '../../components/Build-C/lineChart/TradeDetail1'
import Detail2 from '../../components/Build-C/lineChart/TradeDetail2'

export default {
    data() {
        return {
          IsEnergy:true,
          IsPrice: false
        }
    },
    components: {
      Detail1,
      Detail2
    },
    methods: {
      lookEnergy() {
        this.IsEnergy = true
        this.IsPrice = false
      },
      lookPrice() {
        this.IsEnergy = false
        this.IsPrice = true
      }
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
  width: 90%;
  display: flex;
  flex-direction: column;

}
.dummy-line {
  border: red solid ;
}

.energyunderline{
  border-bottom: rgb(051, 251, 051) solid ;
}
.priceunderline {
  
  border-bottom: rgb(255, 204, 051) solid ;
}
.chartprice {
 color: rgb(255, 204, 051) ;
}
.chartenergy {
  
   color: rgb(051, 251, 051) ;
}
.pp-info-area {
    display: flex;
    flex-direction: row;
}
.info-text-area {
  display: flex;
  flex-direction: column;    
  align-items: center;
}
.info-img-area {
  display: flex;
  justify-content: center;
}
.info-btn-img {
  display: flex;
  flex-direction: column;      
}
.info-btn-area {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.trade-btn {
  
}
.ppl-img {
  width: 80%;
  height: 80%;
  
}
.chart-change-btn {
    display: flex;
    flex-direction: row;
    
    
}
.detail-btn-area {
  font-size: large;
  
}
.detail-btn-name {
  display: flex;
  justify-content: center;
  height: 2rem;
}
</style>