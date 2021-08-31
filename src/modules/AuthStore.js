import  router  from "../router/index";
import  firebase from 'firebase/app'
import 'firebase/auth'

const state = {
  isAuthenticated : null,
};

const getters = {
 isAuthenticated(state)
 {
   return state.isAuthenticated
 }
};

const mutations = {
};

const actions = {
  authInit({ state }) {
    firebase.auth().onAuthStateChanged(user => {
      if(user)
      {
        state.isAuthenticated = true
      }
      else
      {
        state.isAuthenticated = false
      }
    })
  },
  Register(_, authData) {

      firebase.auth().createUserWithEmailAndPassword(authData.email,authData.sifre)
      .then(response => {
        response
        let user = firebase.auth().currentUser;
        user.sendEmailVerification();
        user.updateProfile({
          displayName : authData.Ad + " " + authData.Soyad
        }).then((response) => {
          response
        })
        alert(
          "Başarıyla Kayıt Oldunuz Lütfen Emailinize Gelen Aktivasyon Kodunu Onaylayın !"
        );

      }).catch(error => {
         if(error.code === "auth/email-already-in-use")
         {
           alert("Bu E-posta Önceden Alınmış.")
         }
          });
  },
  SifreDegis(_,email)
  {
   firebase.auth().sendPasswordResetEmail(email)
   .then(()=> {
     console.log("başarılı")
   })
  },
  Login({state}, authData) {
       firebase.auth().signInWithEmailAndPassword(authData.email,authData.sifre)
       .then(response => {
         response
        let user = firebase.auth().currentUser
        user
        alert("Başarıyla Giriş Yaptınız !");
        state.isAuthenticated = true
        router.push("/");
       }).catch(error => {
       console.log(error)
       if(error.code === "auth/user-not-found")
       {
         alert("Email Adresi Bulunamadı !")
       }
       else if (error.code ==="auth/invalid-email")
       {
         alert("Emaili Düzgün Yazınız !")
       }
       else if(error.code === "auth/wrong-password")
       {
         alert("Şifre Yanlış !")
       }
       else if(error.code === "auth/argument-error")
       {
         alert("E-mail'i Boş Bırakmayınız !")
       }
      });
  },
  logout({ state}) {
    state.isAuthenticated = false
    firebase.auth().signOut()
  },
};

export default {
  state,
  getters,
  mutations,
  actions
};
