<template>
    <div id="leftPanel">
        <div id="sourcesTitle">
            <H3>Fuentes</H3>
            <b-form-checkbox
      id="checkbox1"
      v-model="status"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Fuente 1
    </b-form-checkbox>
        </div>
        

    </div>
</template>

<script>
export default {
    name: 'Sources'

}
</script>

<style>
#sourcesTitle {
    margin-top: 5px;
    }
#leftPanel {
width: 350px;
height: 800px;
margin: 10px;
background-color: gainsboro

}
</style>
