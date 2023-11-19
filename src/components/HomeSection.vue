<template>
    <div>
  
      <!--<b-carousel id="carousel" fade controls indicators>-->
      <!--<b-carousel-slide caption="Pizza Deliciosa" :img-src="require('@/img/img1.png')"></b-carousel-slide>-->
      <!--<b-carousel-slide caption="Ambiente Aconchegante" :img-src="require('@/img/logo.png')"></b-carousel-slide>-->
      <!--</b-carousel>-->
  
      <div class="home">
        <!-- Conteúdo adicional na seção com imagem de fundo -->
        <h1 class="title">Power Pizza</h1>
        <p>DESCUBRA NOSSOS SABORES DELICIOSOS</p>
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
  
  .home {
    background-image: url('@/img/img1.png');
    /* Substitua pelo caminho real da sua imagem */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: #ffffff;
    /* Cor do texto na seção, ajuste conforme necessário */
    font-size: 20px;
    text-align: center;
    padding: 225px 0;
    /* Ajuste o espaçamento interno conforme necessário */
  }
  
  .title {
    color: #ff0000df;
    font-size: 105px;
    font-family: 'Agbalumo';
    text-shadow:
      1px 1px 0 #000;
  }

  </style>
  