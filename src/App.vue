<template>
  <div class="bgicin">
    <Header></Header>
    <div  style="margin-top:91px;"></div>
    <router-view ></router-view>
    <Footer />
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from "./shared/Header.vue";
import Footer from "./shared/Footer.vue"
export default {
  components: {
    Header,
    Footer,
  },
  created()
  {
    this.$store.dispatch("authInit")
  }
}
</script>

<style scoped>

</style>
