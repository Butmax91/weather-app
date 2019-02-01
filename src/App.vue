<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <Wether/>

  </div>
</template>
<script>
  import NavBar from './components/NavBar.vue';
  import Wether from './components/Wether.vue';

  export default {
    components : {
      NavBar,
      Wether

    },
  }

</script>

<style lang="scss">

</style>
