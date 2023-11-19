<template>

      <div>
  
        <b-navbar class="navbar-custom">
          <b-container>
            <!-- Logotipo da Pizzaria -->
            <b-navbar-brand href="#">
              <img src="@/img/logo.png" alt="Logotipo da Pizzaria" class="logo">
              <span class="">Power Pizza</span>
            </b-navbar-brand>
  
            <!-- Links de Navegação -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item>
                <b-button variant="success" href="#about">Sobre Nós</b-button>
              </b-nav-item>
              <b-nav-item>
                <b-button variant="success" href="#menu">Nosso Menu</b-button>
              </b-nav-item>
              <b-nav-item>
                <b-button variant="success" href="#contact">Contato</b-button>
              </b-nav-item>
            </b-navbar-nav>
          </b-container>
        </b-navbar>
  
      </div>
  
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  }
  </script>
  
  <style scoped>
  /* Estilos específicos do componente */
  
  .navbar-custom {
    background-color: #ff0000df
      /* Cor de fundo da navbar */
  }
  
  .logo {
    max-height: 40px;
    /* Altura máxima do logotipo */
  }
  
  </style>
  