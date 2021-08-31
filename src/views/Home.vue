<template>
<div class="flexicin">
  <Carousel></Carousel>
  <div class="container">
  <HomeAciklamalar></HomeAciklamalar>
  <OrnekTasarimlar></OrnekTasarimlar>
  <Hizmetlerimiz></Hizmetlerimiz>
  </div>
</div>

</template>
<script>
import Hizmetlerimiz from './Hizmetlerimiz.vue'
import Carousel from '../components/Carousel.vue'
import HomeAciklamalar from '../components/HomeAciklamalar.vue'
import OrnekTasarimlar from './OrnekTasarimlar.vue'
export default {
  components : {
    Carousel,
    HomeAciklamalar,
    OrnekTasarimlar,
    Hizmetlerimiz
  }

}
</script>

<style scoped>
.flexicin{
  display: flex;
  flex-direction: column;
}
</style>
