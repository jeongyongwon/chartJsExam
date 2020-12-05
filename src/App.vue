<template>
  <div id="nav container">
    <div class="d-flex justify-content-center align-items-center contents">
       <router-view/>
    </div>

    <div id="footer">
      <router-link to="/about">내 에너지 현황</router-link>
      <router-link to="/building">에너지 거래하기</router-link>      
      <router-link to="/">에너지 거래내역</router-link>    
    </div>
  </div>
</template>

<style>



* {
margin: 0;
padding: 0;
}

#footer{
  position: fixed;
  background-color: blue; /*임의색상*/
  left: 0;
  right: 0;
  bottom: 0;
  height: 3rem;
}

#contetns{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 6rem;
}

</style>
