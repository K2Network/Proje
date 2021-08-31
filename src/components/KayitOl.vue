<template>
  <div class="container py-3 mt-2">
    <div class="row justify-items-center align-items-center">
      <div
        class="
          col-10
          col-lg-5
          col-md-8
          col-sm-10
          col-sm-offset-2
          col-md-offset-2
          col-centered
          marginicin
        "
      >
        <form class="bordericin">
          <div class="kgirisyazi">
            <h1 style="color: white">Ücretsiz Kayıt Ol</h1>
          </div>
          <div class="mb-3">
            <input
              class="form-control"
              type="text"
              v-model="state.Ad"
              placeholder="İsim"
            />
            <small class="form-text text-muted" v-if="!v$.Ad.required.$response"
              >İsim alanı zorunludur.<br></small
            >
            <small class="form-text text-muted" v-if="!v$.Ad.minLength.$response"
              >İsim en az {{ v$.Ad.minLength.$params.min }} karakterden
              oluşmalıdır.<br>
            </small>
            <small class="form-text text-muted" v-if="!v$.Ad.alpha.$response"
              >Adınız harflerden oluşmalıdır.<br>
            </small>
            <small class="form-text text-muted" v-if="!v$.Ad.maxLength.$response"
              >Adınız en fazla {{ v$.Ad.maxLength.$params.max }} karakterden
              oluşmalıdır.</small
            >
          </div>
          <div class="mb-3">
            <input
              class="form-control"
              type="text"
              v-model="state.Soyad"
              placeholder="Soyisim"
            />
            <small class="form-text text-muted" v-if="!v$.Soyad.alpha.$response"
              >Soyadınız harflerden oluşmalıdır.<br>
            </small>
            <small class="form-text text-muted" v-if="!v$.Soyad.required.$response"
              >Soyisim alanını doldurmak zorunludur.<br></small
            >
            <small class="form-text text-muted" v-if="!v$.Soyad.minLength.$response"
              >Soyadınız en az {{ v$.Soyad.minLength.$params.min}} karakterden
              oluşmalıdır.<br>
            </small>
            <small class="form-text text-muted" v-if="!v$.Soyad.maxLength.$response"
              >Soyadınız en fazla
              {{ v$.Soyad.maxLength.$params.max }}karakterden
              oluşmalıdır.</small
            >
          </div>
          <div class="mb-3">
            <input
              placeholder="E-Mail"
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="state.email"
              :class="{ 'is-invalid': v$.email.$error }"
            />
            <small class="form-text text-muted" v-if="!v$.email.required.$response"
              >E-mail girmek Zorunludur.<br></small
            >
            <small class="form-text text-muted" v-if="!v$.email.email.$response"
              >Lütfen geçerli bir E-mail adresi giriniz.</small
            >
          </div>
          <div class="mb-3">
            <input
              placeholder="Şifre"
              type="password"
              class="form-control"
              v-model="state.sifre"
            />
            <small class="form-text text-muted" v-if="!v$.sifre.required.$response"
              >Bu alanı doldurmak zorunludur.<br></small
            >
            <small class="form-text text-muted" v-if="!v$.sifre.valid.$response"
              >Şifre en az 1 Büyük 1 küçük ve 1 sayı içermelidir.<br></small
            >
            <small class="form-text text-muted" v-if="!v$.sifre.minLength.$response"
              >Şifre en az {{v$.sifre.minLength.$params.min }} karakterden
              oluşmalıdır.<br>
            </small>
            <small class="form-text text-muted" v-if="!v$.sifre.maxLength.$response"
              >Şifre en fazla {{v$.sifre.maxLength.$params.max }} karakterden
              oluşmalıdır.</small
            >
          </div>
          <div class="mb-3">
            <input
              placeholder="Şifre Tekrarı"
              type="password"
              class="form-control"
              v-model="state.resifre"
            />
            <small class="form-text text-muted" v-if="!v$.resifre.required.$response"
              >Bu alanı doldurmak zorunludur.<br></small
            >
            <small class="form-text text-muted" v-if="!v$.resifre.sameAs.$response"
              >Girdiğiniz şifreler uyuşmamaktadır.</small
            >
          </div>
          <button
            type="submit"
            class="mx-3 mb-4 mt-1 px-3 btn transitionicin hvr-sweep-to-right"
            @click.prevent="KayitOl"
          >
            Kayıt Ol.
          </button>
          <div>
            <router-link tag="a" class="m-2 mt-4 px-3 renktext" to="/Giris"
              >Zaten bir hesabınız var mı?
              <strong>Giriş yap.</strong></router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import {useStore} from "vuex"
import { required,alpha, email,sameAs,minLength,maxLength } from '@vuelidate/validators'
import {reactive , computed} from 'vue'
export default {
  setup() 
  {
    const state = reactive({
      Ad: "",
      Soyad: "",
      email: "",
      sifre: "",
      resifre: "",
    })
    const store = useStore();
   const rules = computed(() => {
     return {
    email: {required,email,},
    sifre: {required,minLength:minLength(6),maxLength:maxLength(18),
     valid : (value) => {
       const containsUppercase = /[A-Z]/.test(value)
       const containsLowercase = /[a-z]/.test(value)
       const containsNumber = /[0-9]/.test(value)
       return containsUppercase && containsLowercase && containsNumber
      },
    },
    resifre: {
      required,
      sameAs: sameAs(state.sifre),
    },
    Ad: {alpha,required,minLength: minLength(2),maxLength: maxLength(15)},
    Soyad: {alpha,required,minLength:minLength(2),maxLength:maxLength(15)}
    }   
   })
    const v$ = useVuelidate(rules,state)
    return {v$,state,store}
  },
  methods : {
    KayitOl()
    {
      this.v$.$validate();
      if (!this.v$.$error) {
        let User = {
          Ad: this.state.Ad,
          Soyad: this.state.Soyad,
          email: this.state.email,
          sifre: this.state.sifre,
        };
        this.store.dispatch("Register", { ...User });
        this.state.Ad = "";
        this.state.Soyad ="";
        this.state.email ="";
        this.state.sifre ="";
        this.state.resifre ="";
      } else {
        alert("Lütfen Bilgilerinizi Kontrol Ediniz !");
      }
    }
  }
};
</script>

<style scoped>
input {
  max-width: 70%;
  margin: auto;
}
.transitionicin {
  transition: 350ms;
  color: #897ffa;
  border-color: #897ffa;
}
.renktext {
  color: #897ffa !important;
}

.col-centered {
  float: none;
  margin: 0 auto;
  border: 3px solid #6861b8;
  border-radius: 8px;
  background-color: rgb(61, 61, 61);
}
.girisyazi {
  font-size: 1.8rem;
  padding: 0.2rem;
  color: white;
}
.container {
  text-align: center;
  font-family: "Raleway", sans-serif;
  height: 50rem;
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
input.form-control {
  margin-top: 1.3rem;
  margin-bottom: 0.5rem;
}
small {
  font-size: 0.9rem;
  color: rgb(173, 173, 173) !important;
}
.marginicin {
  margin: auto !important;
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
.hvr-sweep-to-right:hover,
.hvr-sweep-to-right:focus,
.hvr-sweep-to-right:active {
  color: white;
}
.hvr-sweep-to-right:hover:before,
.hvr-sweep-to-right:focus:before,
.hvr-sweep-to-right:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
</style>
