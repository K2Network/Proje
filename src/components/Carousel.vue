<template>
<div>
  <div class="carousel-fade carousel w-100 transitionicin">
    <div class="imgyazi">
      <div class="borderbottom">
      <span style="color: #897ffa">{{ carouselimg[imgindex].mortext }}</span>
      <span>{{ carouselimg[imgindex].text }}</span>
      </div>
      <span class="deneme">Hem <span style="color: #897ffa">Şık</span>  Hem <span style="color: #897ffa">Hızlı</span></span>
    </div>
    <img
      class="carouselimg"
      :src="carouselimg[imgindex].url"
      alt=""
    />
    <button
      @click="imgindex == 0 ? (imgindex = 2) : imgindex--"
      class="carousel-control-prev carousel-control"
    >
      <font-awesome-icon class="fas" :icon="['fas', 'chevron-left']" />
    </button>
    <button
      @click="imgindex == 2 ? (imgindex = 0) : imgindex++"
      class="carousel-control-next carousel-control"
    >
      <font-awesome-icon class="fas" :icon="['fas', 'chevron-right']" />
    </button>
  </div>
</div>
</template>

<script>
import restaurant from '../assets/restaurant.jpg'
import carousel1 from '../assets/carousel1.png'
import carousel2 from '../assets/carousel2.jpg'

export default {
  data() {
    return {
      imgindex: 0,
      carouselimg: [
        {
          url: restaurant,
          text: "RESPONSIVE TASARIMLAR",
          mortext: "SİZE ÖZEL ",
        },
        {
          url: carousel1,
          text: "HİZMET UYGUN FİYATLAR",
          mortext: "PROFESYONEL ",
        },
        {
          url: carousel2,
          text: "İLETİŞİM İMKANI",
          mortext: "7/24 KESİNTİSİZ ",
        },
      ],
    };
  },
};
</script>


<style scoped>

.carousel-control{
  color: #9f97f8;
  opacity: 30%;
  transition: 450ms;
}
.carousel-control:hover{
  background-color: gray;
}
.deneme2{
  font-family: 'Mate SC', serif;
  font-size: 3rem;
}
.deneme{
font-family: "Caveat", cursive;
}
.imgyazi {
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4vw !important;
  letter-spacing: 0.2rem;
  font-family: "Quicksand", sans-serif;
  z-index: 1;
}
.borderbottom{
    border-bottom: 1px solid white;

}
.carousel {
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: rgb(54, 54, 54);
  position: relative;
  text-align: center;
}
.carouselimg {
  width: 100%;
  height: 45vw;
  filter: grayscale(70%);
  opacity: 20%;
  z-index: 0;
}
.fas {
  font-size: 3rem !important;
}
.transitionicin {
  transition: 2s;
}
</style>
