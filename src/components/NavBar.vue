<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand :to="{ name: 'MainPage' }">Feed de Noticias</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav></b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{ name: 'MainPage' }">Noticias</b-nav-item>
          <b-nav-item :to="{ name: 'Profile' }">Perfil</b-nav-item>
          <b-nav-item :to="{ name: 'Settings' }">Configuración</b-nav-item>
          <b-nav-item :to="{ name: 'Prueba' }">Prueba</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
