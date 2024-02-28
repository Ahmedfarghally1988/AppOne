<template>
  <div class="col-md-4 mb-4" v-for="item in 6" :key="item">
    <div class="blog-card">
      <a href="#" class="blog-card__image-link">
        <img :src="img_blog" alt="" class="blog-card__image">
        <div class="blog-card__overlay">
          <span class="blog-card__plus icon-plus"></span>
        </div>
      </a>
      <div class="blog-card__content">
        <ul class="blog-card__meta">
          <li>
            <span class="blog-card__meta-icon icon-user"></span>
            <span class="blog-card__meta-author"> By Admin </span>
          </li>
          <li>
            <span class="blog-card__meta-icon icon-calendar-5"></span>
            <span class="blog-card__meta-author">05 AUG 2023</span>
          </li>
        </ul>
        <h3 class="blog-card__title"><a href="#">All That Worth Knowing About The Giza Pyramids </a></h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"BoxBlog",
    data(){
      return{
        img_blog: require ('@/assets/images/tour-2.jpg') ,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>