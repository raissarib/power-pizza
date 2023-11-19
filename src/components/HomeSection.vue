<template>
  <div>

    <div class="home">
      <h1 class="title">Power Pizza</h1>
      <p class="sub-title">descubra nosso sabores deliciosos</p>
      <b-button variant="success">Fazer Pedido</b-button>
    </div>


  </div>
</template>
  
<script>
export default {
  name: 'HomeSection',
}
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Poppins:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

.home {
  background-image: url('@/img/img1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  padding: 225px 0;
}

.title {
  font-family: 'Agbalumo', sans-serif;
  color: #ff0000df;
  font-size: 105px;
  text-shadow:
    1px 1px 0 #000;
}

.sub-title {
  font-family: 'Roboto Condensed', sans-serif;
  color: #ffffff;
  font-size: 20px;
}
</style>
  