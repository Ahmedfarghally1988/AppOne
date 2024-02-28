<template>
  <div>
    <section class="tour-listing-one">
      <div class="container">
        <div class="sec-title text-center">
          <p class="sec-title__tagline">Featured tours</p>
          <h2 class="sec-title__title">Top Egypt Travel Deals </h2>
        </div>
        <div class="tour-listing-one__carousel">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-lg-4 col-12 mb-4" v-for="Featured_tours in 6" :key="Featured_tours">
                <div class="item">
                  <div class="tour-listing__card">
                    <a href="#" class="tour-listing__card-image-box">
                      <img :src="img_block" alt="" class="tour-listing__card-image">
                      <div class="tour-listing__card-btn-group">
                        <div class="tour-listing__card-discount @@innerExtraClassName">10% Off</div>
                        <div class="tour-listing__card-featured">Featured</div>
                      </div>
                      <div class="tour-listing__card-image-overlay"></div>
                    </a>
                    <div class="tour-listing__card-content">
                      <h3 class="tour-listing__card-title"><a href="#">Luxury Nile Cruise Oberoi Zahra 8 Days – 7 Nights Cruise</a></h3>
                      <p class="tour-listing__card-text text-small">The best way to cruise the charming river Nile is aboard The Oberoi Zahra Nile Cruise</p>
                      <div class="tour-listing__card-inner-content">
                        <div class="tour-listing__card-location-box">
                          <span class="icon-location-1"></span>
                          <p class="tour-listing__card-location-text text-small">Egypt , Aswan</p>
                        </div>
                        <div class="tour-listing__card-divider"></div>
                        <div class="tour-listing__card-bottom">
                          <div class="tour-listing__card-bottom-left">
                            <div class="tour-listing__card-day">
                              <span class="icon-clock-1"></span>
                              <p class="tour-listing__card-day-text text-small">12 Day</p>
                            </div>
                          </div>
                          <div class="tour-listing__card-bottom-right">
                            <h4 class="tour-listing__card-price">Price: $160</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name:"FeaturedTours",

  data(){
    return{
      img_block: require('@/assets/images/tour-2.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
