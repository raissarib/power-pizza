<template>
  <div>

    <div class="secao-pedidos">
      <h2>Faça seu Pedido</h2>
      <form>
        <label for="nome">Nome:</label>
        <b-form-input id="nome" type="text" placeholder="Digite seu nome..." required></b-form-input>

        <label for="endereco">Endereço:</label>
        <b-form-input id="endereco" type="text" placeholder="Digite seu endereço..." required></b-form-input>

        <div class="form-group">
          <label for="cep">CEP:</label>
          <div class="input-group">
            <TheMask class="form-control" id="cep" type="text" mask="#####-###" placeholder="Digite seu CEP..." required />
          </div>
        </div>

        <div class="form-group">
          <label for="telefone">Número de Telefone:</label>
          <div class="input-group">
            <TheMask class="form-control" id="telefone" type="text" mask="(##)#####-####" placeholder="Digite seu telefone com DDD..." required />
          </div>
        </div>

        <label for="sabor">Sabor da Pizza:</label>
        <b-form-select id="sabor">
          <b-form-select-option value="margherita">Margherita</b-form-select-option>
          <b-form-select-option value="pepperoni">Pepperoni</b-form-select-option>
          <b-form-select-option value="calabresa">Calabresa</b-form-select-option>
          <!-- Adicione mais opções conforme necessário -->
        </b-form-select>

        <label for="observacoes">Observações:</label>
        <textarea id="observacoes"></textarea>

        <button type="submit">Enviar Pedido</button>
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
.secao-pedidos button {
  width: 100%;
  margin-bottom: 16px;
}
</style>
  