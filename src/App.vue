<template>
  <div id="nav container">

    <div class="header">

    </div>

    <div class="d-flex justify-content-center align-items-center contents router-view-container">
       <router-view/>
    </div>

    <div class="footer">
      <router-link to="/trade">내 에너지 현황</router-link>
      <router-link to="/build">에너지 거래하기</router-link>      
      <router-link to="/">에너지 거래내역</router-link>    
    </div>
  </div>
</template>

<style>



* {
margin: 0;
padding: 0;
}





.footer{
  position: fixed;
  color: white;
  background-color: black; /*임의색상*/
  display: flex;
  justify-content: space-around;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5%;
  
}

#contetns{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 6rem;
}

.router-view-container {
  height: 100%;
  margin-bottom: 10%;
  margin-top:1%
}

</style>
