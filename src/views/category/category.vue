<template>
  <div>

    <section class="page-header">
      <div class="page-header__bg"></div>
      <!-- /.page-header__bg -->
      <div class="container">
        <h2 class="page-header__title wow animated fadeInLeft animated animated" data-wow-delay="0s" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0s; animation-name: fadeInLeft;"> Egypt Day Tours</h2>
        <div class="page-header__breadcrumb-box">
          <ul class="trevlo-breadcrumb">
           <li> <router-link to="/">Home</router-link> </li>
            <li>  Egypt Day Tours</li>
          </ul>
        </div>
      </div>
    </section>
    <div class="container my-5">
      <div class="row">
        <div class="col-md-12">
          <div class="section-title title-style-center_text">
            <div class="title-header">
              <h5>TRAVEL LAVERS</h5>
              <h2 class="title">Recommended Egypt  <strong>  Tours by Experts</strong></h2>
              <div class="text show-more-height">
                <span v-if="!readMoreActivated">  {{longText.slice(0, 300)}}   </span>
                <a class="btn-Activated" v-if="!readMoreActivated" @click="activateReadMore"> Read more... </a>

                <span v-if="readMoreActivated"> {{longText}} </span>
                <a class="btn-Activated" v-if="readMoreActivated" @click="activateLessMore"> Less more... </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="product-page product mb-5">
      <div class="container">
        <div class="product-page__row row">
          <div class="col-md-12">
            <div class="showing-result product-page__showing-reslut">
              <div class="showing-result__info-top">
                <div class="showing-result__text-box">
                  <h3 class="showing-result__text">Showing 1–9 of 12 Results</h3>
                </div>
                <div class="showing-result__sort">
                  <div class="dropdown bootstrap-select">
                    <select aria-label="Sort by popular">
                    <option selected="">Sort by popular</option>
                    <option value="1">Sort by view</option>
                    <option value="2">Sort by price</option>
                    <option value="3">Sort by ratings</option>
                  </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="row gutter-y-30">
              <div class="col-xl-4 col-lg-4 col-sm-6 mb-4" v-for="item in 6" :key="item">
                <div class="product__item wow fadeInUp animated" style="visibility: visible; animation-name: fadeInUp;">
                  <div class="product__item-img">
                    <a href="#" class="d-block w-100"> <img :src="img_block_cat" alt=""> </a>
                  </div>
                  <div class="product__item-content px-3">
                    <h4 class="product__item-title"><a href="#">Sharm El Sheikh Day Tours</a></h4>
                    <div class="product__item-price-box">
                      <span class="product__item-price product__item-price--two"> Sharm el Sheikh, located on the southern tip of the Sinai Peninsula, it is one of Egypt's most popular tourist </span>
                    </div>
                    <a href="#" class="trevlo-btn trevlo-btn--white-two product__item-link"><span>Read More</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <WhyChoose></WhyChoose>
    <Testimonial_Home></Testimonial_Home>
    <AskedQuestion></AskedQuestion>


  </div>
</template>

<script>

import WhyChoose from "@/components/home/whychoose";
import Testimonial_Home from "@/components/home/Testimonial";
import AskedQuestion from "@/components/home/faq";

export default {
  name: "CategoryView",
  components:{
    WhyChoose,
    Testimonial_Home,
    AskedQuestion
  },
  data() {
    return {
      img_block_cat: require('@/assets/images/tour-1.jpg'),
      longText: `Brown skin girl
              Your skin just like pearls
              The best thing in the world
              Never trade you for anybody else
              Singin' brown skin girl
              Your skin just like pearls
              The best thing in the world
              I never trade you for anybody else, singin'
              She said she really grew up poor like me
              yeah
              So while I may not pretty boy, your heart is amiss
              Play it like a villain 'cause she caught in a wave
              Tonight I am walkin' away`,
      readMoreActivated: false
    }
  },
  methods: {
    activateReadMore(){
      this.readMoreActivated = true;
    },
    activateLessMore(){
      this.readMoreActivated = false;
    },
  }

}
</script>

<style lang="sass" scoped>

</style>
