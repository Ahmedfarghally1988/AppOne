<template>

  <div id="app">

    <div class="page-wrapper">

      <ReloadHome></ReloadHome>
      <HeaderMain></HeaderMain>

      <router-view/>
      <FooterMain></FooterMain>

    </div>
  </div>
</template>


<script>



import HeaderMain from "@/components/layout/Header";
import FooterMain from "@/components/layout/footer";
import ReloadHome from "@/components/layout/loader";


export default {
  components: {
    ReloadHome,
    FooterMain,
    HeaderMain,

  },



}




</script>


<style lang="scss">
    @import "assets/css/style.css";
</style>