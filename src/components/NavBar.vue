<template>
  <div>

    <b-navbar class="navbar-custom">
      <b-container>

        <b-navbar-brand class="navbar-brand" href="#">
          PP
        </b-navbar-brand>


        <b-navbar-nav class="ml-auto">
          <b-nav-item class="navbar-item">
            CARDÁPIO
          </b-nav-item>

          <b-nav-item class="navbar-item">
            PROMOÇÕES
          </b-nav-item>

          <b-nav-item class="navbar-item">
            NOSSA HISTÓRIA
          </b-nav-item>

          <b-nav-item class="navbar-item">
            CONTATO
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
@import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Poppins:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

.navbar-custom {
  background-color: #1d4e28
}

.navbar-brand {
  font-family: 'Agbalumo', sans-serif;
  color: #ff0000df;
  font-size: 25px;
  text-shadow:
    1px 1px 0 #000;
}

.navbar-item {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
}

</style>
  