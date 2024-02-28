<template>
  <div>
    <section class="faq-page section-space">
      <div class="container">
        <div class="sec-title text-left">
          <p class="sec-title__tagline">FREQUENTLY ASKED QUESTIONS</p>
          <h2 class="sec-title__title">Frequently asked Question & Answers Here</h2>
        </div>
        <div class="row">
          <div class="col-xl-3 col-lg-4 wow animated fadeInLeft" data-wow-delay="0.1s" data-wow-duration="1500ms">
            <div class="faq-page__contact">
              <div class="faq-page__contact-icon">
                <span class="icon-phone-1"></span>
              </div>
              <h3 class="faq-page__contact-title">Do You Still Have Question?</h3>
              <div class="faq-page__contact-number">
                <p class="faq-page__contact-number-title">Call Anytime</p>
                <a href="tel:123456789" class="faq-page__contact-number-text">(002) 123-45678</a>
              </div>
            </div>

            <div class="banner_faq">
              <img :src="img_faq">
            </div>

          </div>


          <div class="col-xl-9 col-lg-8">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name:"AskedQuestion",

  data(){
    return{
      img_faq: require('@/assets/images/tour-1.jpg')
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
