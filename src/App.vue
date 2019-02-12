<template>
  <div id="app">
     <h1 class="text-center p-5 ">Weather SPA using <a href="https://www.apixu.com" target="_blank">apixu </a>api</h1>
    <Weather/>

  </div>
</template>
<script>
  import Weather from './components/weather/Weather.vue';

  export default {
    components : {
      Weather

    },
  }

</script>

<style lang="scss">
    #app{
        background-image: linear-gradient(to right , #c0d3af , #759198);
        height: 100vh;
    }
    h1{
        font-size: 24px !important;
    }
  @import "~bootstrap/scss/bootstrap";
  @import "~@fortawesome/fontawesome-free/scss/fontawesome.scss";
</style>
