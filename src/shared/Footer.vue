<template>
  <div class="container-fluid">
    <div class="row bg-dark text-light justify-content-center align-items-center">
      <div class="col-12 col-md-6 py-3 col-xl-3">
        <h1 class="text-center fonticin"><span style="color: #9f97f8;">K2</span> Software</h1>
      </div>
      <div class="col-12 col-md-6 py-3 col-xl-3 ">
        <ul class="marginicin3 margin-top-lg">
          <li class="mb-2">
            <router-link tag="a" to="/">Anasayfa</router-link>
          </li>
          <li class="mb-2">
            <router-link tag="a" to="/iletisim">İletişim</router-link>
          </li>
          <li class="mb-2">
            <router-link tag="a" to="/Hakkimizda">Hakkımızda</router-link>
          </li>
          <li class="mb-2">
            <router-link tag="a" to="/Hizmetlerimiz">Hizmetlerimiz</router-link>
          </li>
        </ul>
      </div>
      <div class="ilkcol col-12 col-md-6 py-3 col-xl-3">
        <h2 class="marginicin">İletişim Bilgileri</h2>
        <ul>
          <li class="mb-2">Telefon : 0539 661 99 65</li>
          <li class="mb-2">Telefon2 : 0546 964 93 44</li>

          <li>E-Mail : kaan.konak1@gmail.com</li>
        </ul>
      </div>
      <div class="col-12 col-md-6 col-xl-3 py-3 ikincicol">
        <h2 class="marginicin2">Sosyal Medya</h2>
        <ul>
          <li>Twitter :</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
ul{
  list-style-type: none;
  padding: 0 !important;
}
.fonticin{
font-family: "Quicksand", sans-serif;
letter-spacing: 0.20rem;
}
.row {
font-family: 'Raleway', sans-serif;
}
ul li a {
  text-decoration: none;
  color: white;
}
.col-xl-3{
text-align: center;
justify-items: center;
}
*{
  box-sizing: border-box;
}
@media (max-width:1200px){
  .margin-top-lg{
    margin-top: 2rem;
  }}
</style>
