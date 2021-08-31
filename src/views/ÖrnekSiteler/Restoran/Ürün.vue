<template>
<div>
  <ul class="list-unstyled list-group-item">
    <li v-for="(ürün,index) in Ürünler" :key="index" class="list-item">
      <h3> {{ürün.Ad}}</h3>
      <p> {{ürün.Aciklama}}</p>
      <p class="float-end"> {{ürün.Fiyat}}</p>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data(){
    return {
      Ürünler : [
        {id:'1',Ad : 'Tavuklu Ramen' , Aciklama : 'Tavuk eti, kırmızı biber, havuç, beyaz susam',Kategori : 'Ramen',Fiyat : 29,Foto : '1.jpg'},
        {id:'11',Ad : 'California Roll' , Aciklama : 'İç; salatalık, avokado, yengeç surimi, mayonez. Dış; beyaz susam, çörek otu',Kategori : 'Sushi',Fiyat : 40,Foto : '11.jpg'},
        {id:'21',Ad : 'Yumurtalı Noodle' , Aciklama : 'İç; salatalık, avokado, somon, krem peynir. Dış; beyaz susam',Kategori : 'Noodle',Fiyat : 15,Foto : '21.jpg'},
        ]
    }
  }
}
</script>
<style scoped>

</style>
