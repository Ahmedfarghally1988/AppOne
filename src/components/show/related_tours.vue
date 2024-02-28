<template>
  <div>
    <div class="sec-title text-center mb-4">
      <p class="sec-title__tagline">Featured tours</p>
      <h2 class="sec-title__title"> Related Tours </h2>
    </div>
    <div class="tour-listing-one__carousel">
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="item in 3" :key="item">
            <BoxTour></BoxTour>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BoxTour from "@/components/tours/Boxtour";
  export default {
      name:"RelatedTours",
      components: {BoxTour},
  }
</script>

<style lang="scss">

</style>