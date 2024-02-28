<template>
  <div>
    <section class="feature-one">

      <div class="feature-one__bg" :style="img_feut"></div>
      <div class="container">
        <div class="row">


          <div class="col-xl-5 col-lg-5 wow animate__animated fadeInLeft" data-wow-delay="200ms">
            <div class="about-two__image">
              <div class="about-two__image__two trevlo-tilt"
                   data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 2, "speed": 700, "scale": 1 }'>
                <img :src="img_about">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 76">
                  <path d="M1 0V4C1 43.2122 32.7878 75 72 75H196"/>
                </svg>
              </div>
            </div>
          </div>

          <div class="col-xl-7 col-lg-7 wow fadeInRight" data-wow-delay="200ms">
            <div class="about-two__content">
              <div class="sec-title text-left">
                <p class="sec-title__tagline">GET TO KNOW US</p>
                <h2 class="sec-title__title">Egypt Online Tour</h2>
              </div>
              <p class="about-two__content__text">
                Egypt Online Tour opens the door to a world of immersive tours and exclusive packages,
                allowing you to delve deep into the realm of pharaohs, pyramids, and an unparalleled
                history. Egypt is recommended for all foreigners and local tourists due to the diversity of
                Egypt travel packages and Egypt day tours. Now I will tell you why Egypt tours and trips
                should be your next destination with Egypt Online Tour:
              </p>
              <ul class="about-two__content__list">
                <li><span><font-awesome-icon :icon="['fas', 'check-circle']" /></span>Egypt Online Tour team is professional in
                  gathering Egypt tours in creating a different experience in Egypt luxury tours.
                </li>
                <li><span><font-awesome-icon :icon="['fas', 'check-circle']" /></span>Plenty of day tours are offered in different
                  destinations such as Cairo day tours, Sharm, Hurghada, Alexandria, Aswan, Luxor day
                  tours, and more.
                </li>

                <li><span><font-awesome-icon :icon="['fas', 'check-circle']" /></span>Professional Egyptology tour guides will
                  accompany you on all Egypt classic tours to explain the history and ministries of
                  ancient Egyptians during Egypt trips.
                </li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
    <h1>Getting Started with Vue.js and Font Awesome</h1>
    <!-- Add Icons using Array format -->
  </div>
</template>

<script>




export default {
  name:"FeatureOne",
  data(){
      return{
        img_feut:{
          backgroundImage: `url(${require('@/assets/images/shapes/feature-bg-1.png')})`
        },
        img_about: require('@/assets/images/16386721.jpg'),
      }
  },


}
</script>

<style lang="scss" scoped>

</style>