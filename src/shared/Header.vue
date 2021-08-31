<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <router-link  class="navbar-brand" to="/" style="font-size: 1.8rem"
        ><span style="color: #897ffa">K2</span> Software</router-link
      ><button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="navbarsagkisim collapse navbar-right navbar-collapse flex-grow-0"
        id="navbarNavDropdown"
      >
        <ul class="nav navbar-nav navbar-right">
          <li class="hvr-underline-from-center nav-item ba">
            <router-link
              style="color: white"
              tag="a"
              class="nav-link"
              aria-current="page"
              to="/Hakkimizda"
              >Hakkımızda</router-link
            >
          </li>
          <li class="hvr-underline-from-center nav-item ba">
            <router-link
              style="color: white"
              tag="a"
              class="nav-link"
              aria-current="page"
              to="/Hizmetlerimiz"
              >Hizmetlerimiz</router-link
            >
          </li>
          <li class="pr-0">
            <router-link
              class="hvr-sweep-to-right annen btn btnwdth transitionicin me-2 pb-2"
              to="/Giris"
              v-if="!isAuthenticated"
            >
              Giriş yap
            </router-link>
            <button
              type="button"
              v-else
              class="btn btnwdth transitionicin hvr-sweep-to-right me-2 pb-2"
              @click.prevent="Cikis"
            >
              Çıkış Yap
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return {
    }
  },
computed : {
  ...mapGetters(["isAuthenticated"])
},
methods : {
Cikis()
{
  this.$store.dispatch("logout")
}
},
}
</script>
<style scoped>
* {
  font-family: "Quicksand", sans-serif;
}
.nav-link:hover {
  color: #897ffa !important;
}
.pr-0 {
  padding-right: 0;
}
.navbar {
  letter-spacing: 0.18rem;
  color: #aaa2fd;
  padding: 0;
}
.navbarsagkisim {
  margin-right: 2rem;
  height: 100% !important;
}
.navbarsagkisim ul li {
  padding-left: 0.6rem;
  padding-right: 0.6rem;
}
.transitionicin {
  transition: 350ms;
  color: #897ffa;
  border-color: #897ffa;
}

ul li a {
  font-family: "Quicksand", sans-serif !important;
  font-weight:bolder
}


ul li {
  transition: 350ms;
  height: 100%;
}
.navbar-brand {
  margin-left: 8rem;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
}
.btnwdth{
  min-width: 5rem;
}
ul{
  height: 100%;

}
.hvr-underline-from-center {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-center:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  bottom: 0;
  background: #897ffa;
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {
  left: 0;
  right: 0;
}
.hvr-sweep-to-right {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-sweep-to-right:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #897ffa;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-sweep-to-right:hover, .hvr-sweep-to-right:focus, .hvr-sweep-to-right:active {
  color: white;
}
.hvr-sweep-to-right:hover:before, .hvr-sweep-to-right:focus:before, .hvr-sweep-to-right:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

</style>
