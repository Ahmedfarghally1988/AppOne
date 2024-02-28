<template>

  <div class="topbar-one">
    <div class="topbar-one__contaner container-fluid">
      <div class="topbar-one__inner">
        <div class="topbar-one__left">
          <ul class="topbar-one__info">

            <li class="topbar-one__info-item">
              <span class="topbar-one__info-icon"><font-awesome-icon :icon="['fas', 'phone']"/></span>
              <span class="topbar-one__info-text">+201281249676</span>
            </li>
            <li class="topbar-one__info-item">
              <span class="topbar-one__info-icon"><font-awesome-icon :icon="['fas', 'envelope']"/></span>
              <a href="mailto:needhelp@company.com" class="topbar-one__info-text">Contact@egyptonlinetour.com</a>
            </li>
            <li class="topbar-one__info-item">
              <span class="topbar-one__info-icon"><font-awesome-icon :icon="['fas', 'map-signs']"/></span>
              <a href="mailto:needhelp@company.com" class="topbar-one__info-text">Nasr City, Cairo,
                Egypt</a>
            </li>
          </ul>
          <ul class="topbar-one__info">

            <li class="topbar-one__info-item">
              <span class="topbar-one__info-icon icon-user-1"></span>
              <span class="topbar-one__info-text">
                <router-link to="/about"> About Us </router-link>
              </span>
            </li>
            <li class="topbar-one__info-item">
              <span class="topbar-one__info-icon icon-envelope"></span>
              <span class="topbar-one__info-text">
              <router-link to="/contact"> Contact Us </router-link>
              </span>
            </li>
            <li class="topbar-one__info-item">
              <span class="topbar-one__info-icon icon-Booking"></span>
              <span class="topbar-one__info-text">
              <router-link to="/blog"> Our Blog </router-link>
              </span>
            </li>

          </ul>

        </div>
        <div class="topbar-one__right ms-5">
          <ul class="topbar-one__social">
            <li class="topbar-one__info-item">
              <div class="dropdown">
                <button class="btn_lang dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="../../assets/images//United-States.png" height="20"> EN
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#"> <img src="../../assets/images//United-States.png" height="24"> English </a></li>
                  <li><a class="dropdown-item" href="#"> <img src="../../assets/images//Spain.png"  height="24"> Spain </a></li>
                </ul>
              </div>
            </li>
            <li class="topbar-one__info-item">
              <div class="dropdown">
                <button class="btn_lang dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="../../assets/images//Spain.png" height="20"> USD
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                    <img src="../../assets/images//United-States.png" height="24"> English </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#"> <img src="../../assets/images//Spain.png" height="24"> Spain </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <header class="main-header sticky-header sticky-header--normal">
    <div class="container">
      <div class="main-header__inner">
        <div class="main-header__left">
          <div class="main-header__logo">
            <a href="#"> <img src="../../assets/images/loader.webp" width="100"></a>
          </div>
          <nav class="main-header__nav main-menu">
            <ul class="main-menu__list">
              <li class="dropdown megamenu">
                <router-link to="/">Home</router-link>
              </li>
              <li class="dropdown">
                <router-link to="/category">Egypt Day Tours</router-link>
                <ul class="sub-menu">
                  <li><a href="#"> Cairo Day Tours </a></li>
                  <li><a href="#"> Alexandria Day Tours </a></li>
                  <li><a href="#"> Sharm El Sheikh Day Tours </a></li>
                  <li><a href="#"> Hurghada Day Tours </a></li>
                  <li><a href="#"> Luxor Day Tours </a></li>
                  <li><a href="#"> Aswan Day Tours </a></li>
                </ul>
              </li>
              <li class="dropdown">
                <router-link to="/category">Egypt Shore Excursions</router-link>
                <ul class="sub-menu">
                  <li><a href="#"> Cairo Day Tours </a></li>
                  <li><a href="#"> Alexandria Day Tours </a></li>
                  <li><a href="#"> Sharm El Sheikh Day Tours </a></li>
                  <li><a href="#"> Hurghada Day Tours </a></li>
                  <li><a href="#"> Luxor Day Tours </a></li>
                  <li><a href="#"> Aswan Day Tours </a></li>
                </ul>
              </li>
              <li class="dropdown">
                <router-link to="/category">Egypt Vacation Packages</router-link>
                <ul class="sub-menu">
                  <li><a href="#"> Cairo Day Tours </a></li>
                  <li><a href="#"> Alexandria Day Tours </a></li>
                  <li><a href="#"> Sharm El Sheikh Day Tours </a></li>
                  <li><a href="#"> Hurghada Day Tours </a></li>
                  <li><a href="#"> Luxor Day Tours </a></li>
                  <li><a href="#"> Aswan Day Tours </a></li>
                </ul>
              </li>
              <li class="dropdown">
                <router-link to="/category">Middle East Tours</router-link>
                <ul class="sub-menu">
                  <li><a href="#"> Cairo Day Tours </a></li>
                  <li><a href="#"> Alexandria Day Tours </a></li>
                  <li><a href="#"> Sharm El Sheikh Day Tours </a></li>
                  <li><a href="#"> Aswan Day Tours </a></li>
                </ul>
              </li>
              <li class="dropdown">
                <router-link to="/category">Egypt Nile Cruises</router-link>
                <ul class="sub-menu">
                  <li><a href="#"> Cairo Day Tours </a></li>
                  <li><a href="#"> Alexandria Day Tours </a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div class="main-header__right">
          <div class="main-header__right-right">
            <div class="main-header__phone">
              <div class="main-header__phone-icon">
                <span class="icon-traveling-1"></span>
              </div>
              <div class="main-header__phone-text">
                <p class="main-header__phone-title"> Egypt Private Tours</p>
                <h4 class="main-header__phone-number"><a href="#"> Customize My Trip </a></h4>
              </div>
            </div>
            <div class="main-header__divider"></div>
            <ul class="main-header__search-user">
              <li class="main-header__search-user-item">
                <a href="#" class="main-header__search search-toggler" @click="toggleClass">
                  <span class="icon-search"></span>
                </a>
              </li>
            </ul>
              <div class="search-popup" :class="{ active: isActive }">
              <div class="search-popup__overlay search-toggler" @click="toggleClass"></div>
              <div class="search-popup__content">
                <form role="search" method="get" class="search-popup__form" action="#">
                  <input type="text" id="search" placeholder="Search Here..."/>
                  <button type="submit" aria-label="search submit" class="search-popup__btn trevlo-btn trevlo-btn--base">
                    <span class="icon-search"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>


          <menu-mobile></menu-mobile>

        </div>
      </div>
    </div>



  </header>





</template>

<script>

import MenuMobile from "@/components/layout/menumobile";

export default {
  name: "HeaderMain",
  components:{MenuMobile},

  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    }
  },

}

</script>

<style lang="scss" scoped>

</style>
