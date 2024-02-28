<template>
  <div>
    <section class="why-choose-one">
      <div class="why-choose-one__bg" :style="backgroundmain"></div>
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 wow fadeInUp animated" data-wow-delay="200ms" style="visibility: visible; animation-delay: 200ms; animation-name: fadeInUp;">
            <div class="sec-title text-center">
              <p class="sec-title__tagline">Get A Customized Trip To Egypt</p>
              <h2 class="sec-title__title">Customize your Egypt Private Tours  </h2>
              <a href="#" class="offer-one__btn trevlo-btn trevlo-btn--primary mt-5"><span>Start Booking</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
  export default {
      name:"WhyChoose",

    data(){
        return{
          backgroundmain:{
            backgroundImage: `url(${require('@/assets/images/backgrounds/page-header-bg.jpg')})`
          }
        }
    }
  }
</script>

<style lang="scss" scoped>


</style>