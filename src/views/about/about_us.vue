<template>
  <div>

    <section class="page-header">
      <div class="page-header__bg"></div>
      <!-- /.page-header__bg -->
      <div class="container">
        <h2 class="page-header__title wow animated fadeInLeft animated animated" data-wow-delay="0s" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0s; animation-name: fadeInLeft;"> About Us </h2>
        <div class="page-header__breadcrumb-box">
          <ul class="trevlo-breadcrumb">
            <li> <router-link to="/">Home</router-link> </li>
            <li>  About Us</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="about-three">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 wow fadeInLeft animated" data-wow-delay="200ms" style="visibility: visible; animation-delay: 200ms; animation-name: fadeInLeft;">
            <div class="about-three__content">
              <div class="sec-title text-left">
                <p class="sec-title__tagline"> About Us</p>
                <h2 class="sec-title__title">With Egypt Online Tour, Explore Egypt With The Best Tour Operator In The Country</h2>
              </div>
              <p class="about-three__content__text">
                Have you ever dreamed to witness a real pyramid or marvel at the most awe-inspiring architectural in all of history? Or enter & explore the fascinating tunnels and chasms inside? Have you ever visualized yourself exploring the burial chambers of ancient kings and inspecting invaluable pieces ancient Egyptian culture? If yes, then planning a customized Egypt tour with Egypt Online Tour is what you should be looking at.
              </p>
            </div>
          </div>
          <div class="col-xl-6 wow fadeInRight animated" data-wow-delay="200ms" style="visibility: visible; animation-delay: 200ms; animation-name: fadeInRight;">
            <div class="about-three__image">
              <div class="about-three__image__one trevlo-tilt" data-tilt-options="{ &quot;glare&quot;: false, &quot;maxGlare&quot;: 0, &quot;maxTilt&quot;: 3, &quot;speed&quot;: 700, &quot;scale&quot;: 1 }">
                <img :src="img_about" alt="trevlo">
              </div>

            </div>
          </div>

          <div class="col-xl-12 wow fadeInRight animated" data-wow-delay="200ms" style="visibility: visible; animation-delay: 200ms; animation-name: fadeInRight;">

            <ul class="about-three__content__list">
              <li><span class="fas fa-check-circle"></span>Let Us Plan The Perfect Egypt Tour For You:</li>
            </ul>
            <p class="about-three__content__text">
              Incredible ancient wonders, never-ending golden sands and full of character local souqs make Egypt the ultimate tourist destination. You have got to see it to believe – the chaos of Cairo; the full of life bazaars; the magnificent glory of the Pyramids of Giza and the globe’s most popular lion with a human head (the legendary Sphinx). Only in Egypt one can cruise into the dusk on a felucca cruise next to the Nile, ride a camel into Luxor’s Valley of the Kings, and then float in the famous Red Sea.
            </p>

            <p class="about-three__content__text">
              Our company Established in 1990, we at Egypt Online Tour, take pride in offering specialized Egypt tour to tourists across the globe. We’ve a license from the ministry of tourism with license number 151 A. With more than 25 years of experience, we specialized in arranging both individual and group tours for our valued clients. Our tour service covers all of Egypt including Aswan, Cairo, Abu Simbel, Luxor, Alexandria, St. Catherine sailing, Oasis, Sinai, Dahab, Nuweiba, Nile Cruise trips from Aswan to Luxor, airport transfers, shore excursions, desert trips, etc. We’re working with hotels and transfer service providers for almost 30 years – which means we’ve a relationship that offers us special advantages when you want to book a hotel or transportation in Egypt. Egypt online tour operated by Whole trips travel ( mother company)
            </p>

          </div>
        </div>
      </div>
    </section>

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
    name:"AboutView",
    components: {AskedQuestion, Testimonial_Home, WhyChoose},

    data(){
      return{
        img_about:require ('@/assets/images/bg_homr.jpg'),
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>