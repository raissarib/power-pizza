<template>
  <div>

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

    <div class="secao-pedidos">
        <h2>Faça seu Pedido</h2>
        <form>
          <label for="nome">Nome:</label>
          <input type="text" id="nome">

          <label for="endereco">Endereço:</label>
          <input type="text" id="endereco">

          <label for="cep">CEP:</label>
          <input type="text" id="cep">

          <label for="telefone">Número de Telefone:</label>
          <input type="text" id="telefone">

          <label for="sabor">Sabor da Pizza:</label>
          <select id="sabor">
            <option value="margherita">Margherita</option>
            <option value="pepperoni">Pepperoni</option>
            <option value="calabresa">Calabresa</option>
            <!-- Adicione mais opções conforme necessário -->
          </select>

          <label for="observacoes">Observações:</label>
          <textarea id="observacoes"></textarea>

          <button type="submit">Enviar Pedido</button>
        </form>
      </div>

    <div>
      <section id="about" class="mt-5">
        <h2 class="text-center">Sobre Nós</h2>
        <p class="text-center">Somos apaixonados por pizza e servimos a melhor da cidade desde 1990.</p>
      </section>
    </div>

    <div>
      <section id="menu" class="mt-5">
        <h2 class="text-center">Nosso Menu</h2>
        <p class="text-center">Confira nossas deliciosas opções de pizzas.</p>
        <!-- Aqui você pode adicionar um grid de imagens ou lista de pizzas -->
      </section>
    </div>

    <div>
      <section id="contact" class="mt-5">
        <h2 class="text-center">Contato</h2>
        <p class="text-center">Entre em contato conosco para encomendas ou reservas.</p>
        <!-- Formulário de contato ou informações de contato aqui -->
      </section>
    </div>

    <div>
      <b-footer class="mt-5">
        <div class="text-center">
          <p>&copy; 2023 Pizzaria Saborosa. Todos os direitos reservados.</p>
        </div>
      </b-footer>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
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

.secao-pedidos {
  text-align: center;
  padding: 50px 0; /* Ajuste o espaçamento interno conforme necessário */
}

.secao-pedidos form {
  max-width: 400px;
  margin: auto;
}

.secao-pedidos label {
  display: block;
  margin-bottom: 8px;
}

.secao-pedidos input,
.secao-pedidos textarea,
.secao-pedidos button {
  width: 100%;
  margin-bottom: 16px;
}

</style>
