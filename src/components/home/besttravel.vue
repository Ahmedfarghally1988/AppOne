<template>
  <div>

    <section class="benefit-two">
      <div class="benefit-two__bg" :style="img_back"></div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 noPadding">
              <div class="benefit-two__left-content" :style="img_block">
              <div class="benefit-two__left-content__inner wow fadeInUp" data-wow-delay="200ms">
                <h2 class="benefit-two__left-content__title">The Best Travel<br> & Adventure</h2>
              </div>
            </div>
          </div>
          <div class="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
            <div class="benefit-two__content">
              <div class="sec-title text-left">
                <p class="sec-title__tagline">Recommended Egypt Tours </p>
                <h2 class="sec-title__title">Why You Should Choose<br>Egypt Online Tours?</h2>
              </div>
              <div class="benefit-two__box">
                <div class="benefit-two__box__icon"><span class="icon-airplane-1"></span></div>
                <h3 class="benefit-two__box__title">Best Price Guarantee</h3>
                <p class="benefit-two__box__text">
                  There are many variations of passages of Lorem<br> Ipsum avagtilable, but the majority
                </p>
              </div>
              <div class="benefit-two__box">
                <div class="benefit-two__box__icon"><span class="icon-ticket-1"></span></div>
                <h3 class="benefit-two__box__title">Easy & Quick Booking</h3>
                <p class="benefit-two__box__text">
                  There are many variations of passages of Lorem<br> Ipsum avagtilable, but the majority
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export  default {
  name:"BestTravel",

  data(){
    return{
      img_back:{
        backgroundImage: `url(${require('@/assets/images/shapes/benefit-bg-2.png')})`
      },
      img_block:{
        backgroundImage: `url(${require('@/assets/images/bg_homr.jpg')})`
      }
    }
  }

}
</script>

<style lang="scss" scoped>


</style>