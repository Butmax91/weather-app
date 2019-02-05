<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <Weather/>

  </div>
</template>
<script>
  import NavBar from './components/NavBar.vue';
  import Weather from './components/weather/Weather.vue';

  export default {
    components : {
      NavBar,
      Weather

    },
  }

</script>

<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
  @import "~@fortawesome/fontawesome-free/scss/fontawesome.scss";
</style>
