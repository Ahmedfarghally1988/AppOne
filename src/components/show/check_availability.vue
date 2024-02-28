<template>
  <div>
    <aside class="tour-listing-details__sidebar">
      <div class="tour-listing-details__sidebar-book-tours tour-listing-details__sidebar-single wow animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
        <h3 class="tour-listing-details__sidebar-title">Check Availability </h3>
        <form action="#" class="tour-listing-details__sidebar-form contact-form-validated">
          <div class="tour-listing-details__sidebar-form-input">
            <input type="text" placeholder="Name" name="where_to">
          </div>
          <div class="tour-listing-details__sidebar-form-input">
            <input type="text" placeholder="E-mail" name="when">
          </div>
          <div class="tour-listing-details__sidebar-form-input">
            <input type="text" placeholder="No.Phone" name="Phone">
          </div>
          <div class="tour-listing-details__sidebar-form-input select2">
            <Select2 v-model="myValue" :options="myOptions" :placeholder="placeholderNationality" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
          </div>

          <div class="tour-listing-details__sidebar-form-input">
            <VueDatePicker class="dp__theme_light" v-model="date" :placeholder="placeholderDate" />
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="tour-listing-adult">
                  <small>Adults (+12 Years)</small>
                  <input type="number"  name="quantity" value="0" class="">
              </div>
            </div>
            <div class="col-md-6">
              <div class="tour-listing-adult">
                  <small>Children (1-11 Years)</small>
                  <input type="number"  name="quantity" value="0" class="">
              </div>
            </div>
          </div>


          <div class="tour-listing-details__sidebar-form-input">
            <div class="banner-form__control date--tour">
              <textarea name="form-one-message-input" id="form-one-message-input" cols="30" rows="10" placeholder="Write a Message" class="form-one__message form-one__input"></textarea>
            </div>
          </div>



          <button type="submit" class="tour-listing-details__sidebar-btn trevlo-btn trevlo-btn--base"><span>Book Now</span></button>

        </form>
        <div class="result"></div><!-- /.result -->
      </div>
    </aside>
  </div>
</template>

<script>
  import Select2 from "vue3-select2-component";
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';


  export  default {
    name:"CheckAvailability",
    components:{
      Select2,
      VueDatePicker
    },
    data() {
      return {
        myValue: ' ',
        myOptions: ['egypt', 'saudi', 'Dubai'],
        date:null,
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
      placeholderNationality: {
        type: String,
        default: 'Nationality ?' // Default placeholder text
      },
      placeholderDate: {
        type: String,
        default: 'Select Date ?' // Default placeholder text
      },
    }
  }
</script>

<style lang="scss" scoped>
.select2-container--default .select2-selection--single {
  border: 1px solid #ddd;
  border-radius: 0;
  height: 56px;
}
</style>