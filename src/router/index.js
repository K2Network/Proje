import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'
import Home from '../views/Home'
import iletisim from '../views/İletişim'
import Hakkımızda from '../views/Hakkımızda'
import Hizmetlerimiz from '../views/Hizmetlerimiz'
import Restoran from '../views/ÖrnekSiteler/Restoran/Restoran'
import KayitOl from '../components/KayitOl'
import Giris from '../components/Giris'
import RestoranPanel from '../views/ÖrnekSiteler/Restoran/RestoranPanel'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/iletisim",
    name: "iletisim",
    component: iletisim
  },
  {
    path: "/Hakkimizda",
    name: "Hakkimizda",
    component: Hakkımızda
  },
  {
    path: "/Hizmetlerimiz",
    name: "Hizmetlerimiz",
    component: Hizmetlerimiz
  },

  {
    path: "/Restoran",
    name: "Restoran",
    component: Restoran,

  },
  {
    path: "/RestoranPanel",
    name: "RestoranPanel",
    component: RestoranPanel
  }, {
    path: "/Giris",
    name: "Giris",
    component: Giris,
    beforeEnter(to, from, next) {
            store.dispatch("logout")
            next();
    }
  },
  {
    path: "/KayitOl",
    name: "KayitOl",
    component: KayitOl,
    beforeEnter(to, from, next) {
            store.dispatch("logout")
            next();
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
