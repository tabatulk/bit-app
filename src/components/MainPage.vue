<template>
    <div id="panelContainer">
      <Sources />
      <NewsContainer />
    </div>
</template>

<script>
import Sources from './Sources.vue';
import NewsContainer from './NewsContainer.vue';


export default {
  name: 'MainPage',
  components: {
    Sources,
    NewsContainer
  }
}
</script>

<style>
#panelContainer {
display: flex;
flex-direction: row;
}
</style>
