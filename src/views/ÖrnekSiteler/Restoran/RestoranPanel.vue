<template>

  <div class="container">
    <div class="d-flex justify-content-around">
   <input type="text" v-model="Ürün.Ad"  placeholder="İsim Giriniz.">
    <input type="text" v-model="Ürün.Aciklama" placeholder="Açıklama Giriniz.">
    <input type="text" v-model="Ürün.Fiyat" placeholder="Fiyat Giriniz.">
    </div>
    <select class="form-select" v-model="Ürün.Kategori">
  <option selected disabled>Kategori Seçiniz.</option>
  <option value="Ramen">Ramen</option>
  <option value="Rolls">Rolls</option>
  <option value="Noodle">Noodle</option>
  </select>
  <button @click="Kaydet" class="btn btn-danger"> Kaydet</button>
  <ul class="list-unstyled list-group-item">
    <li class="list-item" v-for="(ürün,index) in Ürünler" :key="index">
      <h3> {{ürün.Ad}}</h3>
      <p> {{ürün.Aciklama}}</p>
      <p> {{ürün.Kategori}}</p>
      <p class="float-end"> {{ürün.Fiyat}}</p>
      <button class="btn btn-warning" @click="Sil(index)">X</button>
    </li>
  </ul>
  </div>
</template>
<script>
export default {
  data()
  {
    return {
      Ürün : {
        Ad : "",
        Aciklama : "",
        Fiyat : "",
        Kategori : "",
      },
      Ürünler : []
    }
  },
  methods: {
    Kaydet(){
      this.Ürünler.push(this.Ürün);
      this.Ürün = {
        Ad : "",
        Aciklama : "",
        Fiyat : "",
        Kategori : "",
      }
    },
    Sil(index)
    {
      this.Ürünler.splice(index,1)
    }
  },
}
</script>
<style scoped>
</style>
