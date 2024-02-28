<template>
  <div>

    <section class="main-slider-one">
      <div class="main-slider-one__carousel">
        <div class="item">

          <div class="main-slider-one__image" :style="cssProps"></div>

          <div class="container">
            <div class="main-slider-one__content">
              <h3 class="main-slider-one__title"> Unlock Egypt's attractions from Anywhere! </h3>
            </div>
          </div>
        </div>
      </div><!-- banner-slider -->
      <div class="banner-form wow fadeInUp" data-wow-delay="300ms">
        <div class="container">
          <form class="banner-form__wrapper" action="#">
            <div class="row">
              <div class="col-lg-4">
                <div class="banner-form__control">
                  <label>Select  Category</label>
                  <Select2 v-model="myValue" :options="myOptions" :placeholder="placeholderCat" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
                  <i class="icon-location-2"></i>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="banner-form__control">
                  <label>Select Sub Category</label>
                  <Select2 v-model="myValue2" :options="myOptions2" :placeholder="placeholderSub" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
                  <i class="icon-hiking"></i>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="banner-form__popup__slider-wrapper">
                  <Slider v-model="value_rin_price" />
                </div>
              </div>
              <div class="col-lg-1">
                <div class="banner-form__btn">
                  <button type="submit" aria-label="search submit" class="trevlo-btn trevlo-btn--base">
                    <span><i class="icon-search"></i></span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- banner-form -->
    </section>
  </div>
</template>

<script>



import Slider from '@vueform/slider'
import Select2 from 'vue3-select2-component';



export default{
  name:"SliderHome",
  components:{
    Select2,
    Slider,
  },
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/images/backgrounds/slider-1-1.jpg')})`,
      },
      value_rin_price:[0,100] ,
      myValue: ' ',

      myValue2: ' ',
      myOptions: ['op1', 'op2', 'op3'],
      myOptions2: ['op1', 'op2', 'op3'],
    }
  },
  methods: {
    myChangeEvent(val){
      console.log(val);
    },
    mySelectEvent({id, text}){
      console.log({id, text})
    }
  },
  props: {
    placeholderCat: {
      type: String,
      default: 'Where to Next?' // Default placeholder text
    },
    placeholderSub: {
      type: String,
      default: 'Booking Type' // Default placeholder text
    }
  }
}
</script>



<style lang="css">
  .select2-container--default .select2-selection--single {
    border: 0;
    border-radius: 0;
    height: 34px;
  }
  .select2-container .select2-selection--single .select2-selection__rendered{
    padding: 0;
  }
  .select2-dropdown{
    border: 0;
    padding:10px;
  }
  .select2-container--default .select2-selection--single .select2-selection__arrow{
    display: none;
  }
  @import "@vueform/slider/themes/default.css";
</style>
