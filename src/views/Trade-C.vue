
<template>
  <!-- 소비자 에너지 거래  -->
  <div class="app">
    <div class="d-flex justify-content-between">
      <p>봉명동 거래가능 발전소</p>
      <div  class="grid-btn-area d-flex flex-row">
        <button @click="changeCard" type="button" class="btn changeBtn" :class="{ 'btn-light' : IsCard, 'btn-secondary':!IsCard}">
          <i class="fas fa-th-large gridicon"></i>
        </button>
        <button @click="changeList" type="button" class="btn btn-primary changeBtn" :class="{ 'btn-light' : IsList, 'btn-secondary':!IsList}">
          <i class="fas fa-th-large gridicon"></i>
        </button>
      </div>

    </div>

    <!-- card형식 -->
    <div v-if="IsCard" class="pp-cards row">
      <div class="d-flex flex-column alert alert-danger col-6 card-body" role="alert">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <div class="circle-area"></div>            
            <div class="card-pp-info">
              <div class="pp-name">발전소 이름</div>
              <div class="pp-person">담당자 이름</div>
            </div>
          </div>
          <div>에너지</div>
        </div>
        <div>
          <div>사용 요금</div>
          <div>detail</div>
        </div>
        <div class="card-btn-area d-flex justify-content-center align-items-center">
          <button class="btn btn-primary card-btn">에너지 거래하기</button>
        </div>
      </div>
      <div class="d-flex flex-column alert alert-danger col-6 card-body" role="alert">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <div class="circle-area"></div>            
            <div class="card-pp-info">
              <div class="pp-name">발전소 이름</div>
              <div class="pp-person">담당자 이름</div>
            </div>
          </div>
          <div>에너지</div>
        </div>
        <div>
          <div>사용 요금</div>
          <div>detail</div>
        </div>
        <div class="card-btn-area d-flex justify-content-center align-items-center">
          <button class="btn btn-primary card-btn">에너지 거래하기</button>
        </div>
      </div>      
      <div class="d-flex flex-column alert alert-danger col-6 card-body" role="alert">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <div class="circle-area"></div>            
            <div class="card-pp-info">
              <div class="pp-name">발전소 이름</div>
              <div class="pp-person">담당자 이름</div>
            </div>
          </div>
          <div>에너지</div>
        </div>
        <div>
          <div>사용 요금</div>
          <div>detail</div>
        </div>
        <div class="card-btn-area d-flex justify-content-center align-items-center">
          <button class="btn btn-primary card-btn">에너지 거래하기</button>
        </div>
      </div>
      <div class="d-flex flex-column alert alert-danger col-6 card-body" role="alert">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <div class="circle-area"></div>            
            <div class="card-pp-info">
              <div class="pp-name">발전소 이름</div>
              <div class="pp-person">담당자 이름</div>
            </div>
          </div>
          <div>에너지</div>
        </div>
        <div>
          <div>사용 요금</div>
          <div>detail</div>
        </div>
        <div class="card-btn-area d-flex justify-content-center align-items-center">
          <button class="btn btn-primary card-btn">에너지 거래하기</button>
        </div>
      </div> 
      <div class="d-flex flex-column alert alert-danger col-6 card-body" role="alert">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <div class="circle-area"></div>            
            <div class="card-pp-info">
              <div class="pp-name">발전소 이름</div>
              <div class="pp-person">담당자 이름</div>
            </div>
          </div>
          <div>에너지</div>
        </div>
        <div>
          <div>사용 요금</div>
          <div>detail</div>
        </div>
        <div class="card-btn-area d-flex justify-content-center align-items-center">
          <button class="btn btn-primary card-btn">에너지 거래하기</button>
        </div>
      </div>
      <div class="d-flex flex-column alert alert-danger col-6 card-body" role="alert">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <div class="circle-area"></div>            
            <div class="card-pp-info">
              <div class="pp-name">발전소 이름</div>
              <div class="pp-person">담당자 이름</div>
            </div>
          </div>
          <div>에너지</div>          
        </div>
        <div>
          <div>사용 요금</div>
          <div>detail</div>
        </div>
        <div class="card-btn-area d-flex justify-content-center align-items-center">
          <button class="btn btn-primary card-btn">에너지 거래하기</button>
        </div>
      </div>   
      <div class="d-flex flex-column alert alert-danger col-6 card-body" role="alert">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <div class="circle-area"></div>            
            <div class="card-pp-info">
              <div class="pp-name">발전소 이름</div>
              <div class="pp-person">담당자 이름</div>
            </div>
          </div>
          <div>에너지</div>
        </div>
        <div>
          <div>사용 요금</div>
          <div>detail</div>
        </div>
        <div class="card-btn-area d-flex justify-content-center align-items-center">
          <button class="btn btn-primary card-btn">에너지 거래하기</button>
        </div>
      </div>
      <div class="d-flex flex-column alert alert-danger col-6 card-body" role="alert">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <div class="circle-area"></div>            
            <div class="card-pp-info">
              <div class="pp-name">발전소 이름</div>
              <div class="pp-person">담당자 이름</div>
            </div>
          </div>
          <div>에너지</div>
        </div>
        <div>
          <div>사용 요금</div>
          <div>detail</div>
        </div>
        <div class="card-btn-area d-flex justify-content-center align-items-center">
          <button class="btn btn-primary card-btn">에너지 거래하기</button>
        </div>
      </div>
      <div class="d-flex flex-column alert alert-danger col-6 card-body" role="alert">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <div class="circle-area"></div>            
            <div class="card-pp-info">
              <div class="pp-name">발전소 이름</div>
              <div class="pp-person">담당자 이름</div>
            </div>
          </div>
          <div>에너지</div>
        </div>
        <div>
          <div>사용 요금</div>
          <div>detail</div>
        </div>
        <div class="card-btn-area d-flex justify-content-center align-items-center">
          <button class="btn btn-primary card-btn">에너지 거래하기</button>
        </div>
      </div>
      <div class="d-flex flex-column alert alert-danger col-6 card-body" role="alert">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row">
            <div class="circle-area"></div>            
            <div class="card-pp-info">
              <div class="pp-name">발전소 이름</div>
              <div class="pp-person">담당자 이름</div>
            </div>
          </div>
          <div>에너지</div>
        </div>
        <div>
          <div>사용 요금</div>
          <div>detail</div>
        </div>
        <div class="card-btn-area d-flex justify-content-center align-items-center">
          <button class="btn btn-primary card-btn">에너지 거래하기</button>
        </div>
      </div>                                  
    </div>



    <!-- list형식 -->
    <div v-if="IsList" class="pp-lists">
      <div class="alert alert-primary d-flex row" role="alert">
        <div class="col d-flex flex-row align-items-center">
          <div class="circle-area"></div>
          <div class="pp-info d-flex flex-column">
            <div>발전소 이름</div>
            <div>담당자 이름</div>
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
            <div>발전소 이름</div>
            <div>담당자 이름</div>
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
            <div>발전소 이름</div>
            <div>담당자 이름</div>
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
            <div>발전소 이름</div>
            <div>담당자 이름</div>
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
            <div>발전소 이름</div>
            <div>담당자 이름</div>
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
            <div>발전소 이름</div>
            <div>담당자 이름</div>
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
      changeCard() {
        this.IsCard = true
        this.IsList = false
      },
      changeList() {
        this.IsCard = false
        this.IsList = true
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
  width: 80%;
}
.circle-area {
  width:2rem;
  height:2rem;
  background:#ffffff;
  border-radius:50%;
}

.card-body {
  height: 10rem;
  margin: 0;
}

.cart-btn-area {
  height: 100%;
}

.card-btn {
  width: 70%;
  height: 100%;
  padding: 1%;
}

.changeBtn {
  width: 100%;
}
.gridicon {
  font-size: xx-small;
}
 

</style>