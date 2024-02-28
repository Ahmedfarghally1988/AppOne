<template>
  <div class="container">

    <div class="sec-title text-center">
      <p class="sec-title__tagline">Articles</p>
      <h2 class="sec-title__title">Egypt Travel Guide </h2>
    </div>

    <carousel :items-to-show="3">
      <slide v-for="slide in 10" :key="slide">
        <div class="blog-card w-100">
          <a href="#" class="blog-card__image-link">
            <img :src="img_artilce" alt="" class="blog-card__image">
            <div class="blog-card__overlay">
              <span class="blog-card__plus icon-plus"></span>
            </div>
          </a>
          <div class="blog-card__content">
            <ul class="blog-card__meta">
              <li>
                <span class="blog-card__meta-icon icon-user"></span>
                <span class="blog-card__meta-author"> By Admin </span>
              </li>
              <li>
                <span class="blog-card__meta-icon icon-calendar-5"></span>
                <span class="blog-card__meta-author">05 AUG 2023</span>
              </li>
            </ul>
            <h3 class="blog-card__title"><a href="#">All That Worth Knowing About The Giza Pyramids </a></h3>
          </div>
        </div>
      </slide>
      <template #addons>

        <pagination />
      </template>
    </carousel>
  </div>
</template>



<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, } from 'vue3-carousel'

export default {
  name:"ArticlesBlog",
  components: {
    Carousel,
    Slide,
    Pagination,

  },
  data(){
    return{
      img_artilce: require('@/assets/images/tour-3.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
  .carousel__slide {
    padding:0 15px;
}

</style>
