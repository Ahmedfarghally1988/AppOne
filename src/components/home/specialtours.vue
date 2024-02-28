<template>
  <section class="tour-listing-two tour-listing-two--home-three mt-5">
    <div class="container">

      <div class="sec-title text-center">
        <p class="sec-title__tagline">Special tours</p>
        <h2 class="sec-title__title">Special Egypt Tours Offers For You </h2>
        <br>
        <span>Sometimes it is difficult for any visitor to Egypt to stay on a long vacation in Egypt. But it will be more difficult to be in Egypt and not try to explore the best of Egypt tours and its sites such as the temples and tombs in Luxor day tours the owner of the third of world's antiques as well as the attractions of Aswan day tours which no less important than Luxor attractions.</span>
      </div>

      <carousel :items-to-show="3">
        <slide v-for="slide in 6" :key="slide">
          <div class="tour-listing-two__card tour-listing__card w-100">
            <a href="#" class="tour-listing__card-image-box">
              <img :src="imageUrl" alt="Description of the image" class="tour-listing__card-image">
              <div class="tour-listing__card-btn-group @@extraClassName">
                <div class="tour-listing__card-discount @@innerExtraClassName">10% Off</div>
                <div class="tour-listing__card-featured">Featured</div>
              </div>
              <div class="tour-listing__card-image-overlay"></div>
            </a>
            <div class="tour-listing-two__card-show-content">
              <div class="tour-listing-two__card-show-title-box">
                <h3 class="tour-listing-two__card-show-title tour-listing__card-title"><a href="#">Abu Simbel Sun Festival Tour Sun Festival .</a></h3>
              </div>
              <div class="tour-listing-two__card-show-divider"></div>
              <div class="tour-listing__card-bottom">
                <div class="tour-listing__card-bottom-left">
                  <div class="tour-listing__card-day">
                    <span class="icon-clock-1"></span>
                    <p class="tour-listing-two__card-show-day-text tour-listing__card-day-text text-small">3 Day</p>
                  </div>
                </div>
                <div class="tour-listing__card-bottom-right">
                  <h4 class="tour-listing-two__card-show-price tour-listing__card-price">Price: $160</h4>
                </div>
              </div>
            </div>
            <div class="tour-listing-two__card-hover-content tour-listing__card-content">
              <h3 class="tour-listing__card-title"><a href="#">Abu Simbel Sun Festival Tour Sun Festival .</a></h3>
              <p class="tour-listing__card-text text-small">The Abu Simbel Sun Festival is a bi-annual festival that takes place at the splendid shrine of Ramses . </p>
              <div class="tour-listing-two__card-info">
                <div>
                  <div class="tour-listing__card-location-box">
                    <span class="icon-location-1"></span>
                    <p class="tour-listing__card-location-text text-small">Egypt , Aswan</p>
                  </div>
                </div>
              </div>
              <div class="tour-listing__card-divider"></div>
              <div class="tour-listing__card-bottom">
                <div class="tour-listing__card-bottom-left">
                  <div class="tour-listing__card-day">
                    <span class="icon-clock-1"></span>
                    <p class="tour-listing__card-day-text text-small">3 Day</p>
                  </div>
                </div>
                <div class="tour-listing__card-bottom-right">
                  <h4 class="tour-listing-two__card-show-price tour-listing__card-price">Price: $160</h4>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <template #addons>

          <pagination />
        </template>
      </carousel>
    </div>
  </section>
</template>

<script>

  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination } from 'vue3-carousel'

  export default {
    name:"SpecialTours",
    components: {
      Carousel,
      Slide,
      Pagination,
    },
    data() {
      return {
        imageUrl: require('@/assets/images/tour-3.jpg')
      };
    }
  }
</script>


<style lang="scss" scoped>
.carousel__slide {
  padding:0 15px;
}
</style>