<template>
  <div>
    <section class="tour-type-two">
      <div class="container">
        <div class="row">
          <div class="sec-title text-center">
            <p class="sec-title__tagline">Featured tours</p>
            <h2 class="sec-title__title"> Best Tours To Egypt </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 mt-3 wow fadeInUp animated " v-for="TourType in 8" :key="TourType" data-wow-delay="100ms"
               style="visibility: visible; animation-delay: 100ms; animation-name: fadeInUp;">
            <div class="tour-type-two__box">
              <div class="tour-type-two__box__flipper">
                <div class="tour-type-two__box__front">
                  <div class="tour-type-two__box__front__image">
                    <img :src="img_tourtype" alt=""></div>
                  <div class="tour-type-two__box__front__content">
                    <div class="tour-type-two__box__front__icon"><span><font-awesome-icon :icon="['fas', 'hiking']" /></span>
                    </div>
                    <h5 class="tour-type-two__box__front__title">Cairo Day Tours</h5>
                  </div>
                </div>
                <div class="tour-type-two__box__back">
                  <div class="tour-type-two__box__back__image">
                    <img :src="img_tourtype_hover" alt=""></div>
                  <div class="tour-type-two__box__back__content">
                    <div class="tour-type-two__box__back__icon"><span><font-awesome-icon :icon="['fas', 'hiking']" /></span>
                    </div>
                    <h5 class="tour-type-two__box__back__title">Cairo Day Tours</h5>
                    <a href="#" class="trevlo-btn py-3 px-4 mt-3"><span>More</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><!-- /.container -->
    </section>
  </div>
</template>

<script>

export default {
  name:"TourType",
  data(){
    return{
      img_tourtype: require('@/assets/images/tour-3.jpg'),
      img_tourtype_hover: require('@/assets/images/tour-3.jpg'),
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
