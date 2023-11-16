<template>
  
  <div>
    <b-navbar variant="dark" type="dark">
      <b-navbar-brand href="#">Pizzaria Saborosa</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#about">Sobre</b-nav-item>
        <b-nav-item href="#menu">Menu</b-nav-item>
        <b-nav-item href="#contact">Contato</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <b-carousel id="carousel" fade controls indicators>
      <!-- Slides para o carousel -->
      <b-carousel-slide caption="Pizza Deliciosa" :img-src="require('@/assets/img1.png')"></b-carousel-slide>
      <b-carousel-slide caption="Ambiente Aconchegante" :img-src="require('@/assets/logo.png')"></b-carousel-slide>
      <!-- Adicione mais slides conforme necessário -->
    </b-carousel>

    <section id="about" class="mt-5">
      <h2 class="text-center">Sobre Nós</h2>
      <p class="text-center">Somos apaixonados por pizza e servimos a melhor da cidade desde 1990.</p>
    </section>

    <section id="menu" class="mt-5">
      <h2 class="text-center">Nosso Menu</h2>
      <p class="text-center">Confira nossas deliciosas opções de pizzas.</p>
      <!-- Aqui você pode adicionar um grid de imagens ou lista de pizzas -->
    </section>

    <section id="contact" class="mt-5">
      <h2 class="text-center">Contato</h2>
      <p class="text-center">Entre em contato conosco para encomendas ou reservas.</p>
      <!-- Formulário de contato ou informações de contato aqui -->
    </section>

    <b-footer class="mt-5">
      <div class="text-center">
        <p>&copy; 2023 Pizzaria Saborosa. Todos os direitos reservados.</p>
      </div>
    </b-footer>
  </div>

</template>

<script>
export default {
  name: 'App',
}
</script>

<style>


</style>
