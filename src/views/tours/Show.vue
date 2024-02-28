<template>
  <div>

    <div class="tour-listing-details__destination">
      <div class="container">
        <div class="tour-listing-details__destination-row row">
          <div class="col-xl-5 wow animated fadeInLeft animated animated" data-wow-delay="0.1s" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0.1s; animation-name: fadeInLeft;">
            <div class="tour-listing-details__destination-left">
              <h3 class="tour-listing-details__dastination-title">Overday To Cairo By Flight From Sharm</h3>
            </div>
          </div><!-- /.col-xl-4 -->
          <div class="col-xl-7">
            <div class="tour-listing-details__destination-right">
              <div class="tour-listing-details__destination-info wow animated fadeInUp animated animated" data-wow-delay="0.1s" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0.1s; animation-name: fadeInUp;">
                <span class="icon-clock-1"></span>
                <div class="tour-listing-details__destination-info-title">
                  <h4 class="tour-listing-details__destination-info-top">Duration</h4>
                  <h4 class="tour-listing-details__destination-info-bottom">3 Days</h4>
                </div>
              </div><!-- /.tour-listing-details__destination-info -->
              <div class="tour-listing-details__destination-info wow animated fadeInUp animated animated" data-wow-delay="0.3s" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0.3s; animation-name: fadeInUp;">
                <span class="icon-credit-card"></span>
                <div class="tour-listing-details__destination-info-title">
                  <h4 class="tour-listing-details__destination-info-top">Price</h4>
                  <h4 class="tour-listing-details__destination-info-bottom">1500 USD</h4>
                </div>
              </div><!-- /.tour-listing-details__destination-info -->
              <div class="tour-listing-details__destination-info wow animated fadeInUp animated animated" data-wow-delay="0.5s" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0.5s; animation-name: fadeInUp;">
                <span class="icon-plane"></span>
                <div class="tour-listing-details__destination-info-title">
                  <h4 class="tour-listing-details__destination-info-top">Tour Type</h4>
                  <h4 class="tour-listing-details__destination-info-bottom">Adventure. Fun</h4>
                </div>
              </div><!-- /.tour-listing-details__destination-info -->
              <div class="tour-listing-details__destination-info wow animated fadeInUp animated animated" data-wow-delay="0.7s" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0.7s; animation-name: fadeInUp;">
                <span class="icon-location-1"></span>
                <div class="tour-listing-details__destination-info-title">
                  <h4 class="tour-listing-details__destination-info-top">Location</h4>
                  <h4 class="tour-listing-details__destination-info-bottom">Egypt,  Sharm El Sheikh</h4>
                </div>
              </div><!-- /.tour-listing-details__destination-info -->
            </div><!-- /.tour-listing-details__destination-right -->
          </div><!-- /.col-xl-8 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </div>

    <div class="container">
      <div class="row">
          <div class="col-md-8 col-lg-8 col-xl-8 col-12">
               <SliderView></SliderView>
            <div class="container">
              <div class="row">
               <DescriptionShow></DescriptionShow>
               <PriceShow></PriceShow>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 col-xl-4 col-12">
            <CheckAvailability></CheckAvailability>
          </div>
       </div>
      <div class="row mt-5 mb-5">
          <RelatedTours></RelatedTours>
      </div>
    </div>


  </div>
</template>

<script>




import SliderView from "@/components/show/slider";
import DescriptionShow from "@/components/show/description";
import PriceShow from "@/components/show/price";
import CheckAvailability from "@/components/show/check_availability";
import RelatedTours from "@/components/show/related_tours";
export  default {
  name:"ShowView",
  components:{
    RelatedTours,
    CheckAvailability,
    PriceShow,
    DescriptionShow,
    SliderView

  },
}
</script>