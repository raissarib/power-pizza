<template>

  <div class="order">

    <div class="secao-pedidos">
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
        <b-form-select id="sabor" placeholder="Selecione um sabor" required>
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

        <b-button pill variant="danger" type="submit" v-b-popover.hover="'A ajuda já está a caminho'">Enviar Pedido</b-button>

      </form>
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
.secao-pedidos {
  text-align: center;
  padding: 50px 0;
  /* Ajuste o espaçamento interno conforme necessário */
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
.secao-pedidos select,
.secao-pedidos textarea,
.secao-pedidos b-button {
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
    /* Cor do texto na seção, ajuste conforme necessário */
    text-shadow:
      2px 2px 0 #1d4e28;
    font-size: 20px;
    text-align: center;
    padding: 20px 0;
    /* Ajuste o espaçamento interno conforme necessário */
  }
</style>
  