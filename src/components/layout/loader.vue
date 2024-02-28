
<template>

    <div v-if="isLoading" class="preloader">
          <div class="preloader">
            <div class="preloader__image" :style="img_logo"></div>
          </div>
    </div>


</template>

<script>

    import { ref  } from 'vue';

    export default {
      name:'ReloadHome',
      data(){
        return{
          img_logo:{
            backgroundImage: `url(${require('@/assets/images/loader.webp')})`
          },
        }
      },

      setup() {
        const isLoading = ref(true);
        setTimeout(() => {
          isLoading.value = false;
        }, 2000);

        return {
          isLoading
        };
      }

    }

</script>

<style lang="scss" scoped>

</style>