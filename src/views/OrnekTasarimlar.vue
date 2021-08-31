<template>
  <div class="container p-2">
    <div class="row text-center py-5">
      <router-link
        data-aos-duration="1500"
        data-aos="fade-right"
        class="px-0 col-12 col-lg-4 my-3  margin-sm-y text-decoration-none"
        :to="{name : 'Restoran'}"
      >
          <div class="shadow-lg card">
            <div class="card-header">
              <h1 style="color: #8780cf;">Restoran</h1>
            </div>
            <img src="" class="card-img-top" alt="" />
            <div class="card-body">

            <ul class="liste">
              <img class="aciklamaicon p-2" src="../assets/restaurant.svg" />

              <li style="margin: 0;" class="listelemani">
                Restoranınız için tamamen isteğinize göre şekillendirilmiş
                sipariş sitesi.
              </li>
              <li class="listelemani">
                Kodlama bilgisi gerektirmeyen İçerik girişi.
              </li>
              <li class="listelemani">Üyelik / ödeme sistemi.</li>
              <li class="listelemani">
                Restoranınız için bir çok şeyi görebileceğiniz admin paneli.
              </li>
            </ul></div>
          </div></router-link>
      <div
        data-aos-duration="1500"
        data-aos="fade-up"
        class="px-0 col-12 col-lg-4 my-3 margin-sm-y"
      >
        <div class="shadow-lg card">
          <div class="card-header">
            <h1 style="color: #8780cf">Kurumsal</h1>
          </div>
          <img src="" class="card-img-top" alt="" />
          <div class="card-body">

          <ul class="liste  ">
            <img class="aciklamaicon p-2" src="../assets/enterprise.svg" />

            <li style="margin: 0" class="listelemani">
              Restoranınız için tamamen isteğinize göre şekillendirilmiş sipariş
              sitesi.
            </li>
            <li class="listelemani">
              Kodlama bilgisi gerektirmeyen İçerik girişi.
            </li>
            <li class="listelemani">Üyelik / ödeme sistemi.</li>
            <li class="listelemani">
              Restoranınız için bir çok şeyi görebileceğiniz admin paneli.
            </li>
          </ul></div>
        </div>
      </div>
      <div
        data-aos-duration="1500"
        data-aos="fade-left"
        class="px-0 col-12 col-lg-4 my-3 mr-0 pr-0 margin-sm-y"
      >
        <div class="shadow-lg card">
          <div class="card-header">
            <h1 style="color: #8780cf">E-Ticaret</h1>
          </div>
          <img src="" class="card-img-top" alt="" />
          <div class="card-body">

          <ul class="liste">
            <img
              class="aciklamaicon p-2 p-2"
              src="../assets/online-shopping.svg"
            />

            <li style="margin: 0" class="listelemani">
              Restoranınız için tamamen isteğinize göre şekillendirilmiş sipariş
              sitesi.
            </li>
            <li class="listelemani">
              Kodlama bilgisi gerektirmeyen İçerik girişi.
            </li>
            <li class="listelemani">Üyelik / ödeme sistemi.</li>
            <li class="listelemani">
              Restoranınız için bir çok şeyi görebileceğiniz admin paneli.
            </li>
          </ul></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    Restoran() {
      this.$router.push({name : 'Restoran'})
    },
  },
};
</script>
<style scoped>
.col-12 {
  transition: 250ms;
}
.col-12:hover {
  cursor: pointer;
}
.aciklamaicon {
  width: 7rem;
  margin-bottom: 2rem;
}
.card-header {
  border-bottom: 1px solid white;
}
.card {
  margin-right: 2rem;
  border: none;
  color: black;
  transition: 250ms;
  background-color: rgb(226, 226, 226);
}
.card:hover {
  background-color: rgb(214, 214, 214);
  cursor: pointer;

}
.liste {
  list-style-type: none;
  padding: 0;
  font-family: "Raleway", sans-serif !important;
}
.listelemani {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}
.container {
  font-family: "Quicksand", sans-serif;
}
.soncol {
  border: none;
}
@media (min-width: 576px) {
  .margin-sm-y{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .border-sm-top {
    border-top: 1px solid #9f97f8 !important;
  }
  .border-sm-right {
    border-right: 10px solid #9f97f8 !important;
  }
  .border-sm-bottom {
    border-bottom: 1px solid #e3e7eb !important;
  }
  .border-sm-left {
    border-left: 1px solid #9f97f8 !important;
  }
  .border-sm-top-0 {
    border-top: 0 !important;
  }
  .border-sm-right-0 {
    border-right: 0 !important;
  }
  .border-sm-bottom-0 {
    border-bottom: 0 !important;
  }
  .border-sm-left-0 {
    border-left: 0 !important;
  }
  .border-sm-x {
    border-left: 1px solid #e3e7eb !important;
    border-right: 1px solid #e3e7eb !important;
  }
  .border-sm-y {
    border-top: 1px solid #e3e7eb !important;
    border-bottom: 1px solid #e3e7eb !important;
  }
  .border-sm {
    border-top: 1px solid #e3e7eb !important;
    border-bottom: 1px solid #e3e7eb !important;
    border-left: 1px solid #e3e7eb !important;
    border-right: 1px solid #e3e7eb !important;
  }
  .border-sm-0 {
    border-top: 0 !important;
    border-bottom: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important;
  }


}
@media (min-width: 768px) {
  .border-md-top {
    border-top: 1px solid #e3e7eb !important;
  }
  .border-md-right {
    border-right: 8px solid #9f97f8 !important;
  }
  .border-md-bottom {
    border-bottom: 1px solid #e3e7eb !important;
  }
  .border-md-left {
    border-left: 8px solid #9f97f8 !important;
  }
  .border-md-top-0 {
    border-top: 0 !important;
  }
  .border-md-right-0 {
    border-right: 0 !important;
  }
  .border-md-bottom-0 {
    border-bottom: 0 !important;
  }
  .border-md-left-0 {
    border-left: 0 !important;
  }
  .border-md-x {
    border-left: 1px solid #e3e7eb !important;
    border-right: 1px solid #e3e7eb !important;
  }
  .border-md-y {
    border-top: 1px solid #e3e7eb !important;
    border-bottom: 1px solid #e3e7eb !important;
  }
  .border-md {
    border-top: 1px solid #e3e7eb !important;
    border-bottom: 1px solid #e3e7eb !important;
    border-left: 1px solid #e3e7eb !important;
    border-right: 1px solid #e3e7eb !important;
  }
  .border-md-0 {
    border-top: 0 !important;
    border-bottom: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important;
  }
}

@media (min-width: 992px) {
  .border-lg-top {
    border-top: 1px solid #e3e7eb !important;
  }
  .border-lg-right {
    border-right: 3px solid #e3e7eb !important;
  }
  .border-lg-bottom {
    border-bottom: 1px solid #e3e7eb !important;
  }
  .border-lg-left {
    border-left: 3px solid #e3e7eb !important;
  }
  .border-lg-top-0 {
    border-top: 0 !important;
  }
  .border-lg-right-0 {
    border-right: 0 !important;
  }
  .border-lg-bottom-0 {
    border-bottom: 0 !important;
  }
  .border-lg-left-0 {
    border-left: 0 !important;
  }
  .border-lg-x {
    border-right: 2px solid #dbdbdb !important;
  }
  .border-lg-y {
    border-top: 1px solid #000000 !important;
    border-bottom: 1px solid #e3e7eb !important;
  }
  .border-lg {
    border-top: 1px solid #e3e7eb !important;
    border-bottom: 1px solid #e3e7eb !important;
    border-left: 1px solid #e3e7eb !important;
    border-right: 1px solid #e3e7eb !important;
  }
  .border-lg-0 {
    border-top: 0 !important;
    border-bottom: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important;
  }
}

@media (min-width: 1200px) {
  .border-xl-top {
    border-top: 1px solid #e3e7eb !important;
  }
  .border-xl-right {
    border-right: 1px solid #e3e7eb !important;
  }
  .border-xl-bottom {
    border-bottom: 1px solid #e3e7eb !important;
  }
  .border-xl-left {
    border-left: 1px solid #e3e7eb !important;
  }
  .border-xl-top-0 {
    border-top: 0 !important;
  }
  .border-xl-right-0 {
    border-right: 0 !important;
  }
  .border-xl-bottom-0 {
    border-bottom: 0 !important;
  }
  .border-xl-left-0 {
    border-left: 0 !important;
  }
  .border-xl-x {
    border-left: 1px solid #e3e7eb !important;
    border-right: 1px solid #e3e7eb !important;
  }
  .border-xl-y {
    border-top: 1px solid #e3e7eb !important;
    border-bottom: 1px solid #e3e7eb !important;
  }
  .border-xl {
    border-top: 1px solid #e3e7eb !important;
    border-bottom: 1px solid #e3e7eb !important;
    border-left: 1px solid #e3e7eb !important;
    border-right: 1px solid #e3e7eb !important;
  }
  .border-xl-0 {
    border-top: 0 !important;
    border-bottom: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important;
  }
}
</style>
