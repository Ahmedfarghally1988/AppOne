<template>
  <div>
    <SliderHome></SliderHome>
    <FeatureOne></FeatureOne>
    <TourType></TourType>
    <WhyChoose></WhyChoose>
    <SpecialTours></SpecialTours>
    <BestTravel></BestTravel>
    <FeaturedTours></FeaturedTours>
    <ArticlesBlog></ArticlesBlog>
    <Testimonial_Home></Testimonial_Home>
    <AskedQuestion></AskedQuestion>
  </div>
</template>

<script>
import SliderHome from "@/components/home/slider";
import FeatureOne from "@/components/home/feature";
import TourType from "@/components/home/tourtype";
import WhyChoose from "@/components/home/whychoose";
import SpecialTours from "@/components/home/specialtours";
import BestTravel from "@/components/home/besttravel";
import FeaturedTours from "@/components/home/featuredtours";
import ArticlesBlog from "@/components/home/articles";
import Testimonial_Home from "@/components/home/Testimonial";
import AskedQuestion from "@/components/home/faq";

export default {

  name: "HomeView",
  components: {
    AskedQuestion,
    Testimonial_Home,
    ArticlesBlog,
    FeaturedTours,
    BestTravel,
    SpecialTours,
    WhyChoose,
    TourType,
    FeatureOne,
    SliderHome
  }
}
</script>

<style lang="sass" scoped>

</style>
