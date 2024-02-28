<template>
  <div>

    <section class="page-header">
      <div class="page-header__bg"></div>
      <!-- /.page-header__bg -->
      <div class="container">
        <h2 class="page-header__title wow animated fadeInLeft animated animated" data-wow-delay="0s" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0s; animation-name: fadeInLeft;"> Why You Should Travel To Egypt? </h2>
        <div class="page-header__breadcrumb-box">
          <ul class="trevlo-breadcrumb">
            <li> <router-link to="/">Home</router-link> </li>
            <li> Our Blog </li>
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
        <div class="row">
          <BoxBlog></BoxBlog>
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
import BoxBlog from "@/components/blog/box_article";

export default {
  name:"BlogView",
  components: {BoxBlog, AskedQuestion, Testimonial_Home, WhyChoose},

  data() {
    return {
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

<style lang="scss" scoped>

</style>