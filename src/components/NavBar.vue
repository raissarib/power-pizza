<template>

      <div>
  
        <b-navbar class="navbar-custom">
          <b-container>

            <b-navbar-brand href="#">
              <img src="@/img/logo1.png" alt="Logotipo da Pizzaria" class="logo">
            </b-navbar-brand>
  

            <b-navbar-nav class="ml-auto">
              <b-nav-item>
                <b-button variant="light" href="#menu">CARDÁPIO</b-button>
              </b-nav-item>
              
              <b-nav-item>
                <b-button variant="light" href="#about">PROMOÇÕES</b-button>
              </b-nav-item>
             
              <b-nav-item>
                <b-button variant="light" href="#contact">CONTATO</b-button>
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
  
  .navbar-custom {
    background-color: #1d4e28
  }
  
  .logo {
    max-height: 40px;
  }
  
  </style>
  