<template>
  <footer class="main-footer @@extraClassName">

    <div class="container">

      <div class="main-footer__top row">
        <div class="col-lg-4 col-sm-5">
          <div class="main-footer__logo-box">
            <img :src="img_logo_footer" height="75" alt="logo-dark" class="main-footer__logo">
          </div>
        </div>
        <div class="col-lg-8 col-sm-7">
          <ul class="main-footer__social">
            <li class="main-footer__social-item">
              <a href="https://facebook.com/" class="main-footer__social-link"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
            </li>
            <li class="main-footer__social-item">
              <a href="https://linkedin.com/" class="main-footer__social-link"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
            </li>
            <li class="main-footer__social-item">
              <a href="https://twitter.com/" class="main-footer__social-link"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            </li>
            <li class="main-footer__social-item">
              <a href="https://youtube.com/" class="main-footer__social-link"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
            </li>
          </ul><!-- /.main-footer__logo-box -->
        </div>
        <div class="col-12 mt-4">
          <div class="main-footer__line"></div>
        </div>
      </div>

      <div class="row">

        <div class="col-lg-3 col-md-4 col-xl-3 wow animated fadeInUp" data-wow-delay="0.5s" data-wow-duration="1500ms">
          <div class="footer-widget footer-widget--contact">
            <h2 class="footer-widget__title">Contact</h2>
            <p>Have you ever dreamed to witness a real pyramid or marvel at the most awe-inspiring architectural in all of history? Or enter & explore the fascinating tunnels and chasms inside?</p>
            <ul class="footer-widget__info">
              <li> <span class="icon-phone-1"></span> <a href="tel:(002)123-4567-89">(002) 123-4567-891</a></li>
              <li> <span class="icon-location-1"></span> <a href="#"> Nasr City, Cairo, Egypt </a> </li>
              <li> <span class="icon-envelope"></span> <a href="mailto:domin@example.com">Contact@egyptonlinetour.com</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-9 col-md-9 col-sm-9 col-xl-9 wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6 col-xl-3 wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
              <div class="footer-widget footer-widget--links">
                <h2 class="footer-widget__title">Travel Resources</h2>
                <ul class="footer-widget__links">
                  <li><a href="#">Egypt Day Tours</a></li>
                  <li><a href="#">Airport Transfers</a></li>
                  <li><a href="#">Safaga Port</a></li>
                  <li><a href="#">Sharm El Sheikh Day Tours</a></li>
                  <li><a href="#">Aswan Day Tours</a></li>
                  <li><a href="#">Egypt Honeymoon Packages</a></li>
                  <li><a href="#">Alexandria Shore Excursions</a></li>
                  <li><a href="#">Sharm Airport Transfers</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xl-3 wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
              <div class="footer-widget footer-widget--links">
                <h2 class="footer-widget__title">Christmas Tours</h2>
                <ul class="footer-widget__links">
                  <li><a href="#">Egypt Day Tours</a></li>
                  <li><a href="#">Airport Transfers</a></li>
                  <li><a href="#">Safaga Port</a></li>
                  <li><a href="#">Sharm El Sheikh Day Tours</a></li>
                  <li><a href="#">Aswan Day Tours</a></li>
                  <li><a href="#">Egypt Honeymoon Packages</a></li>
                  <li><a href="#">Alexandria Shore Excursions</a></li>
                  <li><a href="#">Sharm Airport Transfers</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xl-3 wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
              <div class="footer-widget footer-widget--links">
                <h2 class="footer-widget__title">Day Tours</h2>
                <ul class="footer-widget__links">
                  <li><a href="#">Egypt Day Tours</a></li>
                  <li><a href="#">Airport Transfers</a></li>
                  <li><a href="#">Safaga Port</a></li>
                  <li><a href="#">Sharm El Sheikh Day Tours</a></li>
                  <li><a href="#">Aswan Day Tours</a></li>
                  <li><a href="#">Egypt Honeymoon Packages</a></li>
                  <li><a href="#">Alexandria Shore Excursions</a></li>
                  <li><a href="#">Sharm Airport Transfers</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xl-3 wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
              <div class="footer-widget footer-widget--links">
                <h2 class="footer-widget__title">Egypt Shore Excursions</h2>
                <ul class="footer-widget__links">
                  <li><a href="#">Egypt Day Tours</a></li>
                  <li><a href="#">Airport Transfers</a></li>
                  <li><a href="#">Safaga Port</a></li>
                  <li><a href="#">Sharm El Sheikh Day Tours</a></li>
                  <li><a href="#">Aswan Day Tours</a></li>
                  <li><a href="#">Egypt Honeymoon Packages</a></li>
                  <li><a href="#">Alexandria Shore Excursions</a></li>
                  <li><a href="#">Sharm Airport Transfers</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div class="main-footer__bottom">
      <div class="container">
        <div class="main-footer__bottom-inner">
          <p class="main-footer__copyright">
            &copy; Copyright <span class="dynamic-year"></span> by SeoEra All rights reserved .
          </p>
        </div>
      </div>
    </div>
  </footer>

  <a v-if="showButton" @click="scrollToTop" data-target="html" class="scroll-to-target scroll-to-top show">
    <span class="scroll-to-top__text">back top</span>
    <span class="scroll-to-top__wrapper"><span class="scroll-to-top__inner"></span></span>
  </a>

  </template>

<script>



import {ref} from "vue";

export default {
  name:"FooterMain",

  data(){
    return{
      img_logo_footer: require('@/assets/images/loader.webp')
    }
  },

  // SCROLL
  setup() {
    const showButton = ref(false);
    const handleScroll = () => {
      showButton.value = window.scrollY > 400;
    };

    const mounted = () => {
      window.addEventListener('scroll', handleScroll);
    };
    const unmounted = () => {
      window.removeEventListener('scroll', handleScroll);
    };
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    return {
      showButton,
      mounted,
      unmounted,
      scrollToTop
    };
  },
  mounted() {
    this.mounted();
  },
  // END SCROLL

}
</script>

<style lang="scss" scoped>

</style>
