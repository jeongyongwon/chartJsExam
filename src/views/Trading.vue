
<template>
  <!-- 소비자 에너지 거래  -->
  <div class="app">
    <div class="d-flex justify-content-between">
      <p>봉명동 거래가능 발전소</p>
      <div class="grid-btn-area">
        <button @click="changeGrid" type="button" class="btn btn-primary">그리드변경</button>
      </div>

    </div>

    <!-- card형식 -->
    <div v-if="IsCard" class="pp-cards row">
      <div class="d-flex flex-column alert alert-danger col-6" role="alert">
        <div class="d-flex justify-content-between">
          <div>발전소</div>
          <div>에너지</div>
        </div>
        <div>
          <div>사용 요금</div>
          <div>detail</div>
        </div>
        <div>
          <button class="btn btn-primary"></button>
        </div>
      </div>
      <div class="d-flex flex-column alert alert-danger col-6" role="alert">
        <div class="d-flex justify-content-between">
          <div>발전소</div>
          <div>에너지</div>
        </div>
        <div>
          <div>사용 요금</div>
          <div>detail</div>
        </div>
        <div>
          <button class="btn btn-primary"></button>
        </div>
      </div>      
      <div class="d-flex flex-column alert alert-danger col-6" role="alert">
        <div class="d-flex justify-content-between">
          <div>발전소</div>
          <div>에너지</div>
        </div>
        <div>
          <div>사용 요금</div>
          <div>detail</div>
        </div>
        <div>
          <button class="btn btn-primary"></button>
        </div>
      </div>
      <div class="d-flex flex-column alert alert-danger col-6" role="alert">
        <div class="d-flex justify-content-between">
          <div>발전소</div>
          <div>에너지</div>
        </div>
        <div>
          <div>사용 요금</div>
          <div>detail</div>
        </div>
        <div>
          <button class="btn btn-primary"></button>
        </div>
      </div> 
      <div class="d-flex flex-column alert alert-danger col-6" role="alert">
        <div class="d-flex justify-content-between">
          
        </div>
        <div>
          <div>사용 요금</div>
          <div>detail</div>
        </div>
        <div>
          <button class="btn btn-primary"></button>
        </div>
      </div>
      <div class="d-flex flex-column alert alert-danger col-6" role="alert">
        <div class="d-flex justify-content-between">
          
        </div>
        <div>
          <div>사용 요금</div>
          <div>detail</div>
        </div>
        <div>
          <button class="btn btn-primary"></button>
        </div>
      </div>             
    </div>



    <!-- list형식 -->
    <div v-if="IsList" class="pp-lists">
      <div class="alert alert-primary d-flex row" role="alert">
        <div class="col d-flex flex-row align-items-center">
          <div class="circle-area"></div>
          <div class="pp-info d-flex flex-column">
            <div>1</div>
            <div>2</div>
          </div>
        </div>
        <div class="col align-items-center">
          <div>사용한 연료</div>
        </div>
        <div class="col align-items-center d-flex flex-column">
          <div>사용 요금</div>
          <div>상세보기</div>
        </div>
        <div class="col align-items-center">
          <button class="btn btn-primary">에너지 거래하기</button>
        </div>
      </div>
      <div class="alert alert-primary d-flex row" role="alert">
        <div class="col d-flex flex-row">
          <div class="circle-area"></div>
          <div class="pp-info d-flex flex-column">
            <div>1</div>
            <div>2</div>
          </div>
        </div>
        <div class="col align-items-center">
          <div>사용한 연료</div>
        </div>
        <div class="col align-items-center d-flex flex-column">
          <div>사용 요금</div>
          <div>상세보기</div>
        </div>
        <div class="col align-items-center">
          <button class="btn btn-primary">에너지 거래하기</button>
        </div>
      </div>      
      <div class="alert alert-primary d-flex row" role="alert">
        <div class="col d-flex flex-row">
          <div class="circle-area"></div>
          <div class="pp-info d-flex flex-column">
            <div>1</div>
            <div>2</div>
          </div>
        </div>
        <div class="col align-items-center">
          <div>사용한 연료</div>
        </div>
        <div class="col align-items-center d-flex flex-column">
          <div>사용 요금</div>
          <div>상세보기</div>
        </div>
        <div class="col align-items-center">
          <button class="btn btn-primary">에너지 거래하기</button>
        </div>
      </div>
      <div class="alert alert-primary d-flex row" role="alert">
        <div class="col d-flex flex-row">
          <div class="circle-area"></div>
          <div class="pp-info d-flex flex-column">
            <div>1</div>
            <div>2</div>
          </div>
        </div>
        <div class="col align-items-center">
          <div>사용한 연료</div>
        </div>
        <div class="col align-items-center d-flex flex-column">
          <div>사용 요금</div>
          <div>상세보기</div>
        </div>
        <div class="col align-items-center">
          <button class="btn btn-primary">에너지 거래하기</button>
        </div>
      </div> 
      <div class="alert alert-primary d-flex row" role="alert">
        <div class="col d-flex flex-row">
          <div class="circle-area"></div>
          <div class="pp-info d-flex flex-column">
            <div>1</div>
            <div>2</div>
          </div>
        </div>
        <div class="col align-items-center">
          <div>사용한 연료</div>
        </div>
        <div class="col align-items-center d-flex flex-column">
          <div>사용 요금</div>
          <div>상세보기</div>
        </div>
        <div class="col align-items-center">
          <button class="btn btn-primary">에너지 거래하기</button>
        </div>
      </div>
      <div class="alert alert-primary d-flex row" role="alert">
        <div class="col d-flex flex-row">
          <div class="circle-area"></div>
          <div class="pp-info d-flex flex-column">
            <div>1</div>
            <div>2</div>
          </div>
        </div>
        <div class="col align-items-center">
          <div>사용한 연료</div>
        </div>
        <div class="col align-items-center d-flex flex-column">
          <div>사용 요금</div>
          <div>상세보기</div>
        </div>
        <div class="col align-items-center">
          <button class="btn btn-primary">에너지 거래하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
    data() {
        return {
          IsCard:true,
          IsList:false,
        }
    },
    methods: {
      changeGrid() {
        this.IsCard = !this.IsCard
        this.IsList = !this.IsList
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
  width: 100%;
}
.circle-area {
  width:2rem;
  height:2rem;
  background:#ffffff;
  border-radius:50%;
}
 
</style>