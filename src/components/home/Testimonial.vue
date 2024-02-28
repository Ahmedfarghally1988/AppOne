<template>
  <div>


    <section class="testimonial-one testimonial-one--home">
      <div class="testimonial-one__bg" :style="img_trem">
      </div>
      <div class="container">
        <div class="sec-title text-center">
          <p class="sec-title__tagline">Testimonial</p>
          <h2 class="sec-title__title">Over 22 Hundred Happy Travelers </h2>
        </div>
      </div>
      <div class="container">
        <carousel :items-to-show="3">
        <slide v-for="slide in 10" :key="slide">
          <div class="item">
            <div class="testimonials-card">
              <div class="testimonials-card__image">
                <img :src="img_oneitem" alt="Guy Hawkins">
              </div>
              <div class="testimonials-card__meta">
                <h5 class="testimonials-card__meta__name">perfect layover tour</h5>
                <p class="testimonials-card__meta__designation"> Winnie </p>
              </div>
              <div class="testimonials-card__ratings">
                <span class="icon-star"></span>
                <span class="icon-star"></span>
                <span class="icon-star"></span>
                <span class="icon-star"></span>
                <span class="icon-star"></span>
              </div>
              <div class="testimonials-card__quote">Flexible Classes refers to the process of acquiring is knowledge free or skills through the use of process the digital technologies and the internet. Flexible Classes</div><!-- /.testimonials-card__quote -->
            </div>
          </div>
        </slide>
        <template #addons>

          <pagination />
        </template>
      </carousel>
      </div>
    </section>



  </div>
</template>

<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, } from 'vue3-carousel'

export default {
  name:"Testimonial_Home",
  components: {
    Carousel,
    Slide,
    Pagination,

  },
  data(){
    return{
      img_trem:{
        backgroundImage: `url(${require('@/assets/images/shapes/testimonial-1-bg-2.png')})`,
      },
      img_artilce: require('@/assets/images/tour-3.jpg'),
      img_oneitem: require('@/assets/images/cl-1.png'),
    }
  }
}

</script>

<style lang="scss" scoped>
  .carousel__slide {
    padding: 0 30px;
  }
</style>
