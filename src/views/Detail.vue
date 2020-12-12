<template>
  <div class="app">
      <div class="pp-info-area">

          <div class="info-text-area">

          </div>
          <div class="info-btn-img">
              <div class="info-img-area">

              </div>

              <div class="info-btn-area">
                  
              </div>
          </div>

      </div>
      <br>
      <br>
      <br>
      <br>
      <div class="chart-area">

      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    components: {

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
  width: 90%;
  display: flex;
  flex-direction: column;

}
.pp-info-area {
    display: flex;
    flex-direction: row;
}
.info-text-area {
  display: flex;
  flex-direction: column;    
}
.info-btn-img {
  display: flex;
  flex-direction: column;      
}
.info-btn-area {
    display: flex;
    flex-direction: row;
}
</style>