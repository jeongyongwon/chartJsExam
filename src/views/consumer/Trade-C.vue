
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
    <div  v-if="IsCard" class="pp-cards">

      <div v-for="trade in trades" :key="trade.pid" class="d-flex flex-column alert alert-light   card-body" role="alert">
        <div class="d-flex justify-content-between header-info">
          <div class="d-flex flex-row name-area">
            <div class="circle-area"></div>            
            <div class="card-pp-info">
              <div class="pp-name">{{ trade.ppname }}</div>
              <div class="pp-person">{{ trade.name }}</div>
            </div>
          </div>
          <div class="enery-name">{{ trade.energy }}</div>
        </div>
        <div class="price-info-area">
          <div class="price-info">
            <div>{{ trade.price }}</div>
            <div>{{ trade.detail }}</div>
          </div>
          
        </div>
        <div class="card-btn-area d-flex justify-content-center align-items-center">
          <button class="btn btn-primary card-btn">에너지 거래하기</button>
        </div>
      </div>                                 
    </div>



    <!-- list형식 -->
    <div v-if="IsList" class="pp-lists">
      <div v-for="trade in trades" :key="trade.pid" class="alert alert-primary d-flex row" role="alert">
        <div class="col d-flex flex-row align-items-center">
          <div class="circle-area"></div>
          <div class="pp-info d-flex flex-column">
            <div>{{ trade.ppname }}</div>
            <div>{{ trade.name }}</div>
          </div>
        </div>
        <div class="col align-items-center">
          <div>{{ trade.energy }}</div>
        </div>
        <div class="col align-items-center d-flex flex-column">
          <div>{{ trade.price }}</div>
          <div>{{ trade.detail }}</div>
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
          trades: [
            {
              pid:1,
              ppname:'발전소이름',
              name: '담당자 이름',
              energy: '에너지',
              price:'사용요금',
              detail:'상세보기'
            },
            {
              pid:2,
              ppname:'발전소이름',
              name: '담당자 이름',
              energy: '에너지',
              price:'사용요금',
              detail:'상세보기'
            },
            {
              pid:3,
              ppname:'발전소이름',
              name: '담당자 이름',
              energy: '에너지',
              price:'사용요금',
              detail:'상세보기'
            },
            {
              pid:4,
              ppname:'발전소이름',
              name: '담당자 이름',
              energy: '에너지',
              price:'사용요금',
              detail:'상세보기'
            },
            {
              pid:5,
              ppname:'발전소이름',
              name: '담당자 이름',
              energy: '에너지',
              price:'사용요금',
              detail:'상세보기'
            },
            {
              pid:6,
              ppname:'발전소이름',
              name: '담당자 이름',
              energy: '에너지',
              price:'사용요금',
              detail:'상세보기'
            },                                                            
          ]
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
.pp-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.header-info {
  margin-top: 2rem;
}

.circle-area {
  width:2rem;
  height:2rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  background: blueviolet;
  border-radius:50%;
}


.card-body {
  height: 12rem;
  margin-top: 1rem;
  border: black solid ;
}

.cart-btn-area {
  height: 100%;
}

.card-btn {
  width: 70%;
  height: 100%;
  padding: 1%;
}
.name-area {
  margin-left: 2rem;
}
.price-info-area {
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
}
.price-info {
  display: flex;
  flex-direction: column;
}
.changeBtn {
  width: 100%;
}


.gridicon {
  font-size: xx-small;
}

.enery-name {
  margin-right: 2rem;
}
 

</style>