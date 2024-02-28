<template>

  <div class="mobile-nav__btn mobile-nav__toggler" @click="toggleClassmegaMenu">
    <span></span>
    <span></span>
    <span></span>
  </div>


  <div class="mobile-nav__wrapper" :class="{ expanded: isExpanded }">
    <div class="mobile-nav__overlay mobile-nav__toggler" @click="toggleClassmegaMenu"></div>

    <div class="mobile-nav__content">
      <span class="mobile-nav__close mobile-nav__toggler" @click="toggleClassmegaMenu"><font-awesome-icon :icon="['fas', 'times']" /></span>
      <div class="logo-box">
        <a href="index.html" aria-label="logo image">
          <img :src="img_logo_footer" width="100" alt="">
        </a>
      </div>

      <div class="mobile-nav__container">
        <ul class="main-menu__list">

          <li class="dropdown megamenu">
            <a href="#" class="">Home</a>
          </li>


          <li class="dropdown">
            <a href="#" class="">Egypt Day Tours
              <button aria-label="dropdown toggler" :class="{expandedicon: isExpandedicon }"  @click="toggleClassMenu"><font-awesome-icon :icon="['fas', 'angle-down']" /></button>
            </a>
            <ul class="sub-menu" :class="{ 'd-block': isBlock }">
              <li><a href="#"> Cairo Day Tours </a></li>
              <li><a href="#"> Alexandria Day Tours </a></li>
              <li><a href="#"> Sharm El Sheikh Day Tours </a></li>
              <li><a href="#"> Hurghada Day Tours </a></li>
              <li><a href="#"> Luxor Day Tours </a></li>
              <li><a href="#"> Aswan Day Tours </a></li>
            </ul>
          </li>

          <li class="dropdown">
            <a href="#" class="">Egypt Day Tours
              <button aria-label="dropdown toggler" :class="{expandedicon: isExpandedicon }"  @click="toggleClassMenu"><font-awesome-icon :icon="['fas', 'angle-down']" /></button>
            </a>
            <ul class="sub-menu" :class="{ 'd-block': isBlock }">
              <li><a href="#"> Cairo Day Tours </a></li>
              <li><a href="#"> Alexandria Day Tours </a></li>
              <li><a href="#"> Sharm El Sheikh Day Tours </a></li>
              <li><a href="#"> Hurghada Day Tours </a></li>
              <li><a href="#"> Luxor Day Tours </a></li>
              <li><a href="#"> Aswan Day Tours </a></li>
            </ul>
          </li>


        </ul>
      </div>
      <ul class="mobile-nav__contact list-unstyled">
        <li>
          <i class="fa fa-envelope"></i>
          <a href="mailto:seo@seoera.com">seo@seoera.com</a>
        </li>
        <li>
          <i class="fa fa-phone-alt"></i>
          <a href="tel:(002)5550105">(002) 555-0105</a>
        </li>
      </ul>
      <div class="mobile-nav__social">
        <a href="https://twitter.com/">
          <i class="fab fa-twitter" aria-hidden="true"></i>
          <span class="sr-only">Twitter</span>
        </a>
        <a href="https://facebook.com/">
          <i class="fab fa-facebook" aria-hidden="true"></i>
          <span class="sr-only">Facebook</span>
        </a>
        <a href="https://pinterest.com/">
          <i class="fab fa-pinterest-p" aria-hidden="true"></i>
          <span class="sr-only">Pinterest</span>
        </a>
        <a href="https://instagram.com/">
          <i class="fab fa-instagram" aria-hidden="true"></i>
          <span class="sr-only">Instagram</span>
        </a>
      </div>
    </div>
  </div>



</template>

<script>
  export default {
    name:"MenuMobile",
    data() {
      return {
        isExpanded: false,
        isExpandedicon: false,
        isBlock: false,
        img_logo_footer: require('@/assets/images/loader.webp')
      };
    },
    methods: {
      toggleClassmegaMenu() {
        this.isExpanded = !this.isExpanded;
      },

      toggleClassMenu() {
        this.isBlock = !this.isBlock;
        this.isExpandedicon = !this.isExpandedicon;
      },


    },




  }


</script>



<style lang="scss" scoped>

</style>