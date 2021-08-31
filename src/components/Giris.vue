<template>
  <div class="container py-3 mt-2">
    <div class="row">
      <div
        class="
          col-10
          col-lg-5
          col-md-8
          col-sm-10
          col-sm-offset-2
          col-md-offset-2
          col-centered
        "
      >
        <form class="bordericin">
          <div class="kgirisyazi">
            <h1 style="color: white">Kullanıcı Girişi</h1>
          </div>
          <div class="my-3">
            <input
              placeholder="E-Mail"
              type="email"
              class="form-control"
              v-model="state.email"
            />
          </div>
          <div class="mb-3">
            <input
              placeholder="Şifre"
              type="password"
              class="form-control"
              v-model="state.sifre"
            />
          </div>
          <button
            type="submit"
            class="
              mx-3
              mb-4
              mt-1
              px-3
              btn
              transitionicin
              hvr-sweep-to-right
            "
            @click.prevent="Giris"
          >
            Giriş Yap
          </button>
          <div>
            <router-link
              tag="a"
              class="renktext m-2 mt-4 px-3 text-info"
              to="/KayitOl"
              >Bir hesabın yok mu? <strong>Kayıt ol.</strong></router-link
            >
            <div class="w-100"></div>
            <router-link
              tag="a"
              class="renktext sifreunuttum m-2 pt-2 mt-5 px-3 text-info"
              to="/KayitOl"
              ><strong>Şifremi Unuttum.</strong></router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import {useStore} from 'vuex'
import {reactive } from 'vue'
export default {
  setup()
  {
    const state = reactive({
      email: "",
      sifre: "",
    })
    const store = useStore();
    function Giris (){
      if(state.email.length <= 0 || state.sifre.length <= 0 )
      {
       alert("Lütfen Bilgilerinizi Boş Bırakmayın !")
      }
      else
      {
        let User = {
          email: state.email,
          sifre: state.sifre,
        };
        store.dispatch("Login", { ...User });
        state.email ="";
        state.sifre ="";
      } 
    }
    return {state,Giris,store}
  },
};
</script>
<style scoped>
.renktext {
  color: #897ffa !important;
}
small {
  font-size: 0.9rem;
  color: rgb(173, 173, 173) !important;
}
.col-centered {
  float: none;
  margin: 0 auto;
  border: 3px solid #6861b8;
  border-radius: 8px;
  background-color: rgb(61, 61, 61);
}
.transitionicin {
  color: #897ffa;
  border-color: #897ffa;
}
input.form-control {
  margin-top: 1.3rem;
  margin-bottom: 0.5rem;
}
.girisyazi {
  font-size: 1.8rem;
  padding: 0.2rem;
}
.sifremiunuttum {
  margin-top: 2rem;
}
.container {
  text-align: center;
  font-family: "Raleway", sans-serif;
}
.bordericin {
  padding: 1.7rem;
}
.kgirisyazi {
  border-bottom: 2px solid #6861b8;
}
a {
  text-decoration: none;
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
