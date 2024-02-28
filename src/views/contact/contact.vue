<template>
  <div>

    <section class="page-header">
      <div class="page-header__bg"></div>
      <!-- /.page-header__bg -->
      <div class="container">
        <h2 class="page-header__title wow animated fadeInLeft animated animated" data-wow-delay="0s"
            data-wow-duration="1500ms"
            style="visibility: visible; animation-duration: 1500ms; animation-delay: 0s; animation-name: fadeInLeft;">
          Contact Us </h2>
        <div class="page-header__breadcrumb-box">
          <ul class="trevlo-breadcrumb">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li> Contact Us</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="contact-page mt-5 mb-5">
      <div class="container">
        <div class="contact-page__info">
          <div class="contact-page__info-container container">
            <div class="contact-page__info-row row">
              <div class="col-lg-4 wow animated fadeInUp animated" data-wow-delay="0s" data-wow-duration="1500ms"
                   style="visibility: visible; animation-duration: 1500ms; animation-delay: 0s; animation-name: fadeInUp;">
                <div class="contact-page__info-box">
                  <div class="contact-page__info-icon-box">
                    <span class="icon-phone-1"></span>
                  </div>
                  <div class="contact-page__info-text-box">
                    <p class="contact-page__info-title">Have any question?</p>
                    <a href="tel:23(000)-8050">
                      <h4 class="contact-page__info-text contact-page__info-text-link">Call +201281249676
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 wow animated fadeInUp animated" data-wow-delay="0.3s" data-wow-duration="1500ms"
                   style="visibility: visible; animation-duration: 1500ms; animation-delay: 0.3s; animation-name: fadeInUp;">
                <div class="contact-page__info-box">
                  <div class="contact-page__info-icon-box">
                    <span class="icon-envelope"></span>
                  </div>
                  <div class="contact-page__info-text-box">
                    <p class="contact-page__info-title">Send Email</p>
                    <a href="mailto:help@trevlo.com">
                      <h4 class="contact-page__info-text contact-page__info-text-link">Contact@egyptonlinetour.com</h4>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 wow animated fadeInUp animated" data-wow-delay="0.6s" data-wow-duration="1500ms"
                   style="visibility: visible; animation-duration: 1500ms; animation-delay: 0.6s; animation-name: fadeInUp;">
                <div class="contact-page__info-box contact-page__info-box--three">
                  <div class="contact-page__info-icon-box">
                    <span class="icon-location-1"></span>
                  </div>
                  <div class="contact-page__info-text-box">
                    <p class="contact-page__info-title">Address</p>
                    <h4 class="contact-page__info-text">Nasr City, Cairo, Egypt </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sec-title text-center">

          <p class="sec-title__tagline">Contact Us</p>

          <h2 class="sec-title__title">Feel Free to Write us Anytime</h2>
        </div>


        <form action="#" class="contact-page__form form-one  gutter-20 contact-form-validated" novalidate="novalidate">
          <div class="row">
            <div class="col-md-6 mb-3">
              <div class="form-one__group">
                <input type="text" name="name" id="form-one-name-input" placeholder="Your Name" class="form-one__input">
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="form-one__group">
                <input type="email" name="email" id="form-one-email-input" placeholder="Email Address"
                       class="form-one__input">
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="form-one__group">
                <input type="tel" name="phone" id="form-one-phone-input" placeholder="Phone" class="form-one__input">
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="form-one__group">
                <input type="text" name="subject" id="form-one-subject-input" placeholder="Subject"
                       class="form-one__input">
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="form-one__group">
              <textarea name="message" id="form-one-message-input" cols="30" rows="10" placeholder="Write a Message"
                        class="form-one__message form-one__input"></textarea>
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="form-one__btn-box">
                <button type="submit" class="form-one__btn trevlo-btn trevlo-btn--base"><span>Send Message</span></button>
              </div>
            </div>
          </div>

        </form>

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
  name: "ContactView",
  components: {AskedQuestion, Testimonial_Home, WhyChoose},

}
</script>

<style lang="scss" scoped>

</style>