<template>
  <div id="app">
    <NavBar />
    <div id="panelContainer">
      <Sources />
      <NewsContainer />
    </div>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Sources from './components/Sources.vue';
import NewsContainer from './components/NewsContainer.vue';


export default {
  name: 'app',
  components: {
    NavBar,
    Sources,
    NewsContainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
#panelContainer {
display: flex;
flex-direction: row;
}
.panel {
   
}


</style>
