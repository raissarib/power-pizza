<template>
    <div>

      <div>
        <section id="menu" class="mt-5">
          <h2 class="text-center">CARDÁPIO</h2>
          <p class="text-center">Confira nossas deliciosas opções de pizzas.</p>
        </section>
      </div>

      <div id="app">
  <b-container fluid>
    <b-row class="center">
      <!-- Primeiro Card -->
      <b-col md="6" class="mb-4">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col>
              <b-card-img :src="require('@/img/img6.png')" alt="Pizza de Calabresa" class="rounded-0"></b-card-img>
            </b-col>
            <b-col>
              <b-card-body title="Calabresa">
                <b-card-text>
                  Queijo, calabresa, cebola e oregano.
                </b-card-text>
                <b-button variant="success" v-b-popover.hover="'Popover content for Card 1'">Preço</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <!-- Segundo Card -->
      <b-col md="6" class="mb-4">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col>
              <b-card-img :src="require('@/img/img5.png')" alt="Pizza de Marguerita" class="rounded-0"></b-card-img>
            </b-col>
            <b-col>
              <b-card-body title="Marguerita">
                <b-card-text>
                  Queijo, tomate, oregano e manjericão.
                </b-card-text>
                <b-button variant="success" v-b-popover.hover="'Popover content for Card 2'">Preço</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <b-col md="6" class="mb-4">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col>
              <b-card-img :src="require('@/img/img8.png')" alt="Pizza a Moda da Casa" class="rounded-0"></b-card-img>
            </b-col>
            <b-col>
              <b-card-body title="Moda da Casa">
                <b-card-text>
                  Peperoni, azeitona, cebola e pimentão
                </b-card-text>
                <b-button variant="success" v-b-popover.hover="'Popover content for Card 3'">Preço</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <b-col md="6" class="mb-4">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col>
              <b-card-img :src="require('@/img/img9.png')" alt="Pizza de 4 Queijos" class="rounded-0"></b-card-img>
            </b-col>
            <b-col>
              <b-card-body title="4 Queijos">
                <b-card-text>
                  Queijo, requeijão, oregano e parmesão ralado.
                </b-card-text>
                <b-button variant="success" v-b-popover.hover="'Popover content for Card 4'">Preço</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <b-col md="6" class="mb-4">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col>
              <b-card-img :src="require('@/img/img7.png')" alt="Pizza de Chocolate" class="rounded-0"></b-card-img>
            </b-col>
            <b-col>
              <b-card-body title="Chocolate">
                <b-card-text>
                  Chocolate ao leite.
                </b-card-text>
                <b-button variant="success" v-b-popover.hover="'Popover content for Card 5'">Preço</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <b-col md="6" class="mb-4">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col>
              <b-card-img :src="require('@/img/img4.png')" alt="Pizza de Banana" class="rounded-0"></b-card-img>
            </b-col>
            <b-col>
              <b-card-body title="Banana">
                <b-card-text>
                  Banana e canela.
                </b-card-text>
                <b-button variant="success" v-b-popover.hover="'Popover content for Card 6'">Preço</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>


    </b-row>
  </b-container>
</div>

<div class="carousel-pizza">
      <b-carousel id="carousel" img-width="1024" img-height="480" :interval="10000">
        <b-carousel-slide :img-src="require('@/img/anuncio1.png')"></b-carousel-slide>
        <b-carousel-slide :img-src="require('@/img/anuncio2.png')"></b-carousel-slide>
        <b-carousel-slide :img-src="require('@/img/anuncio3.png')"></b-carousel-slide>
      </b-carousel>
    </div>
  
    </div>
  </template>
  
  <script>
  export default {
    name: 'MenuSection',
  }
  </script>
  
  <style scoped>

  .center {
  margin-left: 60px;
}

.text-center{
  text-shadow:
      0px 1px 0 #1d4e28;
}


  </style>
  