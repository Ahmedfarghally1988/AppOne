<template>
  <div>
    <aside class="tour-listing-sidebar">
      <form action="#" class="tour-listing-sidebar__form tour-listing-sidebar__item wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
        <div class="banner-form">

          <div class="banner-form__control">
            <label>Select  Category</label>
            <Select2 v-model="myValue" :options="myOptions" :placeholder="placeholderCat" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
            <i class="icon-location-2"></i>
          </div>

          <div class="banner-form__control">
            <label>Select Sub Category</label>
            <Select2 v-model="myValue2" :options="myOptions2" :placeholder="placeholderSub" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
            <i class="icon-hiking"></i>
          </div>

          <div class="banner-form__control">
            <label>Select Date</label>
            <VueDatePicker class="dp__theme_light" v-model="date" range multi-calendars />
            <i class="icon-calendar-5"></i>
          </div>

          <div class="banner-form__control">
            <label for="guests">Guests</label>

            <input id="guests" type="number" value="2" name="guests" placeholder="2">

          </div>

        </div>

        <div class="tour-listing-sidebar__price-ranger">
          <label for="guests">Range Price</label>
          <div class="banner-form__popup__slider-wrapper mt-5 w-100 px-0 mx-0">
            <Slider v-model="value_rin_price" />
          </div>
        </div>

        <div class="tour-listing-sidebar__amenities">
          <h3 class="tour-listing-sidebar__title tour-listing-sidebar__amenities-title">Amenities</h3>
          <div class="tour-listing-sidebar__amenities-box">
            <div class="form-checked-box">
              <input type="checkbox" name="save-data-one" id="save-data-one">
              <label for="save-data-one"><span></span>Accepts Credit Cards</label>
            </div>
            <div class="form-checked-box">
              <input type="checkbox" name="save-data-two" id="save-data-two">
              <label for="save-data-two"><span></span>Car Parking</label>
            </div>
            <div class="form-checked-box">
              <input type="checkbox" name="save-data-one" id="save-data-three">
              <label for="save-data-three"><span></span>Free Coupons</label>
            </div>
            <div class="form-checked-box">
              <input type="checkbox" name="save-data-one" id="save-data-four">
              <label for="save-data-four"><span></span>Reservations</label>
            </div>
            <div class="form-checked-box">
              <input type="checkbox" name="save-data-one" id="save-data-five">
              <label for="save-data-five"><span></span>Restaurant</label>
            </div>
          </div><!-- /.tour-listing-sidebar__amenities-box -->
        </div>
        <div class="tour-listing-sidebar__btn-box">
          <button type="submit" class="tour-listing-sidebar__btn trevlo-btn trevlo-btn--base">
            <span class="icon-search"></span>
            <span>Search</span>
          </button>
        </div>
      </form>
      <div class="tour-listing-sidebar__post-box tour-listing-sidebar__item wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
        <h3 class="tour-listing-sidebar__post-title tour-listing-sidebar__post-title">Last Minute</h3>
        <ul class="tour-listing-sidebar-post">

          <li class="tour-listing-sidebar-post__item" v-for="item in 4" :key="item">
            <div class="tour-listing-sidebar-post__image">
              <img :src="img_last_minute" width="70" height="70" alt="last-post">
            </div>
            <div class="tour-listing-sidebar-post__content">
              <p class="tour-listing-sidebar-post__price">$380</p>
              <h5 class="tour-listing-sidebar-post__link"><a href="/show">The Complete Web</a></h5>
              <div class="tour-listing-sidebar-post__location">
                <span class="icon-location-1"></span>
                <p class="tour-listing-sidebar-post__location-text text-small">Sharm El Sheikh</p>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </aside>
  </div>
</template>

<script>

  import Select2 from "vue3-select2-component";
  import Slider from "@vueform/slider";

  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';


  export  default {
    name:"SideBar",
    components:{
      Select2,
      Slider,
      VueDatePicker
    },

    data() {
      return {
        value_rin_price:[0,100] ,
        myValue: ' ',
        myValue2: ' ',
        myOptions: ['op1', 'op2', 'op3'],
        myOptions2: ['op1', 'op2', 'op3'],
        date:null,
        img_last_minute: require('@/assets/images/tour-1.jpg'),
      }
    },
    methods:{
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

<style lang="scss">
  .dp__pointer {
    border: 0;
    padding: 10px 0 5px 0;
    font-size: 14px;
  }
  .dp__icon {
    display: none;
  }

</style>