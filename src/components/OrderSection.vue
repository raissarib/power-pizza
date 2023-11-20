<template>
  <div>
    <div class="order">

      <div class="order-section">
        <h2>FAÇA SEU PEDIDO</h2>

        <form>
          <label for="nome">Nome:</label>
          <b-form-input id="nome" v-model="text" placeholder="Digite seu nome..." required></b-form-input>

          <label for="endereco">Endereço:</label>
          <b-form-input id="endereco" v-model="text" placeholder="Digite seu endereço..." required></b-form-input>

          <div class="form-group">
            <label for="cep">CEP:</label>
            <div class="input-group">
              <TheMask class="form-control" id="cep" v-model="text" mask="#####-###" placeholder="Digite seu CEP..."
                required />
            </div>
          </div>

          <div class="form-group">
            <label for="telefone">Número de Telefone:</label>
            <div class="input-group">
              <TheMask class="form-control" id="telefone" v-model="text" mask="(##)#####-####"
                placeholder="Digite seu telefone com DDD..." required />
            </div>
          </div>

          <label for="sabor">Sabor da Pizza:</label>
          <b-form-select class="custom-select" id="sabor" placeholder="Selecione um sabor" required>
            <b-form-select-option value="calabresa">Calabresa</b-form-select-option>
            <b-form-select-option value="margherita">Margherita</b-form-select-option>
            <b-form-select-option value="modadacasa">Moda da casa</b-form-select-option>
            <b-form-select-option value="pepperoni">4 Queijos</b-form-select-option>
            <b-form-select-option value="chocolate">Chocolate</b-form-select-option>
            <b-form-select-option value="banana">Banana</b-form-select-option>
          </b-form-select>

          <label for="observacoes">Observações:</label>
          <b-form-textarea id="textarea" v-model="text" placeholder="Tem alguma observação..." rows="3"
            max-rows="6"></b-form-textarea>

          <b-button class="btn-custom" type="submit" v-b-popover.hover="'A ajuda já está a caminho'">ENVIAR
            PEDIDO</b-button>

        </form>
      </div>
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

import { TheMask } from 'vue-the-mask'

export default {
  name: 'OrderSection',
  components: {
    TheMask,
  }
}

</script>
  
<style scoped>

.order-section {
  text-align: center;
  padding: 50px 0;
}

.order-section form {
  max-width: 400px;
  margin: auto;
}

.order-section label {
  display: block;
  margin-bottom: 8px;
}

.order-section input,
.order-section select,
.order-section textarea,
.order-section b-button {
  width: 100%;
  margin-bottom: 16px;

}

.custom-select {
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.order {
  background-color: #1d4e28;
  color: #ffffff;
  text-shadow:
    2px 2px 0 #1d4e28;
  font-size: 20px;
  text-align: center;
  padding: 20px 0;
}

.btn-custom {
  color: #fff;
  background-color: #ff0000df;
  border-color: #ff0000df;
}

.btn-custom:hover {
  background-color: #ff0000df;
  border-color: #1d4e28;
}

</style>