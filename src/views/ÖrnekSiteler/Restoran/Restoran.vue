<template>
  <div class="bgicin">
    <div class="container">
      <div class="row justify-content-evenly">
        <div class="col-3">
          <div class=" sepet baslikmenu position-fixed">
          <div class=" text-center mt-3 text-danger borderbottom"><h2>Sepetiniz</h2></div>
</div>
<div class="sepet baslikmenu position-fixed">
  <router-link
  tag="a"
  to="/RestoranPanel">
  aaaa</router-link>

</div>
        </div>
        <div class="col-7">
          <h2 class="text-center text-danger baslikmenu" >
            Nindo Ramen Menu
          </h2>
          <Urunler />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Urunler from './Ürünler.vue'
export default {
  components: {
    Urunler
  },

  data() {
    return {
      yemekler : [{

      }]
    }
  }
};
</script>
<style scoped>
.borderbottom{
    border-bottom: 1px solid #dc3545;

}
.sepet{
  height: 22rem;
  background-color: rgb(233, 233, 233);
  border: 1px solid #dc3545;
  border-radius: 3px;
  padding-right: 5rem;
  padding-left: 5rem;
}
.bgicin {
  background-color: rgb(255, 255, 255);
}

.baslikmenu {
  font-family: "Quicksand", sans-serif;
  letter-spacing: 0.2rem;
  margin-top: 3rem;
  border-bottom: 1px solid #dc3545;
  padding-bottom: 1.5rem;
}
.container {
  height: 100vh;
  background-color: rgb(255, 255, 255);
  margin-top: 3rem;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.15rem;
}
</style>
