<template>
  <div class="container">
    <div class="row text-center">
      <div class="col-10 offset-1">
        <div class="h1 m-1 p-1 pb-5 anabaslik">Hizmetlerimiz</div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1200">
        <div class="shadow-lg card col-10 offset-1 mt-5">
          <div class="borderbaslik">
            <h2 style="color: #8780cf" class="baslik">Web Yazılım</h2>
          </div>
          <p class="aciklamayazi">
            En gelişmiş teknolojileri kullanarak sizlere her şekilde
            kullanabileceğiniz siteler üretiyoruz. Bunu sizler için çok değerli
            olan <span style="color: #897ffa">zaman</span> kavramını unutmadan,
            olabildiğince hızlı şekilde yapıyoruz.
          </p>

          <p class="aciklamayazi">Yazılım için kullandığımız teknolojiler:</p>
          <ul>
            <li><span style="color: #897ffa">Vue.js</span></li>
            <li>JavaScript</li>
            <li>Nuxt.js</li>
            <li>Firebase/MYSQL/MongoDB</li>
            <li>PHP</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="1200">
        <div class="shadow-lg card col-10 offset-1 mt-5 mb-5">
          <div class="borderbaslik">
            <h2 style="color: #8780cf" class="baslik">Web Tasarım</h2>
          </div>
          <p class="aciklamayazi">
            Söz verdiğimiz gibi şablon kullanmadan, bütün tasarımlarınızı el ile
            sizler için kodluyoruz. Sizler için her seferinde tekrar
            oluşturduğumuz renk paletlerimiz ile siteniz çok daha özel ve hedefe
            yönelik oluyor. Yaptığımız sitelerin mobil, tablet, dizüstü,
            masaüstü görüntüleri <span style="color: #897ffa">Responsive</span> şekilde tek tek ayarlanıyor.
          </p>
          <p class="aciklamayazi">Tasarım için kullandığımız teknolojiler:</p>
          <ul>
            <li><span style="color: #897ffa">Vue.js</span></li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.container {
  font-family: "Quicksand", sans-serif;
}
.anabaslik {
  font-size: 3.2rem;
  letter-spacing: 0.2rem;
  color: #000000;
  border-bottom: 2px solid gray;
  color: #897ffa;
}
.baslik {
  padding: 1rem;
  font-size: 2.2rem;
  font-family: "Quicksand", sans-serif;
}
.card {
  border: 1px solid rgb(212, 212, 212);
  background-color: rgb(226, 226, 226);
}
.card:hover {
  background-color: rgb(214, 214, 214);
}
.card:hover .borderbaslik{
  background-color: rgb(204, 204, 204);

}
.aciklamayazi {
  font-size: 1.2rem;
}
ul {
  list-style-type: none;
}
.borderbaslik {
  margin-bottom: 1.3rem;
  border-bottom: 1px solid rgb(255, 255, 255);
  background-color: rgb(216, 216, 216);
}


</style>
