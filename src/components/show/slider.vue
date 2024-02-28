<template>
  <div class="container">

    <div class="row">
      <div class="col-md-9">

        <div class="gallery-single gallery_larg">
          <div v-for="(img, index) in imgs" :key="index" >
            <div v-if="index >= 0 && index <= 0" class="pic gallery-single__img-box mor_images" @click="() => showImg(index)">
              <img :src="img.src" :alt="img.alt" :title="img.title" class="gallery-single__img" />
              <div class="nu_photo"> <font-awesome-icon :icon="['fas', 'camera']" /> 22 Photo </div>
            </div>
          </div>



        </div>
      </div>

      <div class="col-md-3">
        <div class="gallery-single">
          <div v-for="(img, index) in imgs" :key="index" >
            <div v-if="index >= 1 && index <= 3" class="pic gallery-single__img-box mor_images" @click="() => showImg(index)">
              <img :src="img.src" :alt="img.alt" :title="img.title" class="gallery-single__img" />
            </div>
          </div>
          <vue-easy-lightbox :visible="visibleRef" :imgs="imgs" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
        </div>
      </div>
    </div>

  </div>
</template>

<script>



import { ref  } from 'vue'


  export  default {
      name:"SliderView",
      components: {

      },
      data(){
        return{
          larg_slier: require ('@/assets/images/bg_homr.jpg'),
        }
      },

      setup() {
        const visibleRef = ref(false)
        const indexRef = ref(0)
        const imgs = [
          { src: require ('@/assets/images/slider-2-1.jpg'),  alt: 'Image 1' , title:'Image 1' },
          { src: require ('@/assets/images/slider-2-2.jpg') , alt: 'Image 2' , title:'Image 2' },
          { src: require ('@/assets/images/slider-3-1.jpg') , alt: 'Image 3' , title:'Image 3' },
          { src: require ('@/assets/images/video-bg-1.jpg') , alt: 'Image 4' , title:'Image 4' },
          { src: require ('@/assets/images/tour-2-2.jpg')   , alt: 'Image 5' , title:'Image 5' },
          { src: require ('@/assets/images/tour-2-3.jpg')   , alt: 'Image 6' , title:'Image 6' },
          { src: require ('@/assets/images/tour-2-4.jpg')   , alt: 'Image 7' , title:'Image 7' },
        ]

        const showImg = (index) => {
          indexRef.value = index
          visibleRef.value = true
        }
        const onHide = () => visibleRef.value = false
        return {
          visibleRef,
          indexRef,
          imgs,
          showImg,
          onHide
        }
      }
  }
</script>


<style lang="scss" scoped>

</style>