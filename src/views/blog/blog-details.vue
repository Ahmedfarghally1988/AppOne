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
            <li> Details Blog   </li>
          </ul>
        </div>
      </div>
    </section>



    <div class="blog-details-page blog-details-page-right mt-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-7">
            <div class="blog-details">
              <div class="blog-card-three">
                <div class="blog__card">
                  <div class="blog__card-img wow animated fadeInUp animated" data-wow-delay="0s"
                       data-wow-duration="1500ms"
                       style="visibility: visible; animation-duration: 1500ms; animation-delay: 0s; animation-name: fadeInUp;">
                    <img :src="img_main_blog" alt="blog-details">
                    <div class="blog__card-date">
                      <h4 class="blog__card-date-number">31</h4>
                      <p class="blog__card-date-month">July 2023</p>
                    </div><!-- /.blog__card-date -->
                  </div><!-- /.blog__card-img -->
                  <div class="blog__card-content wow animated fadeInUp animated" data-wow-delay="0.1s"
                       data-wow-duration="1500ms"
                       style="visibility: visible; animation-duration: 1500ms; animation-delay: 0.1s; animation-name: fadeInUp;">
                    <ul class="blog__card-meta">
                      <li>
                        <span class="blog__card-meta-icon icon-user"></span>
                        <span class="blog__card-meta-author">By Admin</span>
                      </li>
                      <li>
                        <span class="blog__card-meta-icon icon-bubble-chat-1"></span>
                        <span class="blog__card-meta-author">2 Comment</span>
                      </li>
                    </ul><!-- /.blog__card-meta -->
                    <h3 class="blog__card-title">Gayer Anderson Museum In Cairo </h3>
                    <p class="blog__card-text">
                      Numerous fortunes from historical archives can be found in Cairo, a sprawling metropolis that spans both the past and the present. Nonetheless, among the improbable fortunes that beautify the city, the Gayer Anderson Museum that is included in our Egypt tours stands separated as a showing of the social luxuriousness and building marvel of Egypt. Despite this, most tourists in Egypt travel packages do not bother to look at it. Our Egypt day tours invite you to set out on a trip to examine the Gayer Anderson Museum, to dive into its rich history, extraordinary plan, and social significance that you will discover in Egypt luxury tours. We will uncover the historical center's entrancing past, its dazzling plan, and the mysteries that have made it a fundamental objective for history devotees in this thorough blog.
                    </p>
                    <h4>An Introduction To Gayer Anderson Museum</h4>
                    <p class="blog__card-text">
                      A prelude to the Gayer Anderson Museum, a fusion of culture, design, and history, is the ideal way to begin your Egypt Classic tours. Learn the significance of the buried treasure to culture and history. Learn about the best times to plan your Egypt budget tours to Gayer Anderson Museum corridor, contemplating factors like environment, swarm levels, and novel events to exploit your experience in Egypt adventure tours. Investigate Cairo, a city that has endured a great deal of adversity and is home to the Gayer Anderson Clear Center, a lingering reminder of the past.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="sidebar-blog @@extraClassName">
              <aside class="widget-area">
                <div class="sidebar-blog__single sidebar-blog__single--posts wow animated fadeInUp animated" data-wow-delay="0.1s" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0.1s; animation-name: fadeInUp;">
                  <h4 class="sidebar-blog__title">Latest posts</h4>
                  <ul class="sidebar-blog__posts ">

                    <li class="sidebar-blog__posts-item" v-for="item in 4" :key="item">
                      <div class="sidebar-blog__posts-image">
                        <img :src="img_latset" alt="latest-post">
                      </div>
                      <div class="sidebar-blog__posts-content">
                        <p class="sidebar-blog__posts-date">
                          <i class="far fa-clock"></i> 26 Mar, 2023</p>
                        <h4 class="sidebar-blog__posts-title"><a href="#">The Complete Web Developer Guideline</a></h4><!-- /.sidebar-blog__posts-title -->
                      </div>
                    </li>

                  </ul>
                </div>
                <div class="sidebar-blog__single sidebar-blog__single--categories wow animated fadeInUp animated" data-wow-delay="0.2s" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0.2s; animation-name: fadeInUp;">
                  <h4 class="sidebar-blog__title">Article Category</h4>
                  <ul class="sidebar-blog__categories ">
                    <li><a href="#"> Cairo Day Tours </a></li>
                    <li><a href="#"> Sphinx in White Desert </a></li>
                    <li><a href="#"> The English House in Egypt </a></li>
                    <li><a href="#"> Best National </a></li>
                    <li><a href="#"> Relax And Unwind </a></li>
                  </ul>
                </div>
              </aside>
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
  name:"DetailsBlog",
  components: {AskedQuestion, Testimonial_Home, WhyChoose},

  data(){
    return{
      img_main_blog: require ('@/assets/images/bg_homr.jpg'),
      img_latset: require ('@/assets/images/tour-2.jpg'),
    }
  }

}
</script>

<style lang="scss" scoped>

</style>