<template>
    <div id="leftPanel">
        <H3>Fuentes</H3>
            <div id="sourcesTitle" v-for="item in sources" v-bind:key="item">
                <b-form-checkbox
                    v-bind:id=item.sourceId
                    v-model="status"
                    value="accepted"
                    unchecked-value="not_accepted"
                    >
                    {{item.title}}
                </b-form-checkbox>
        </div>
        <br>
        <a href="#">AGREGAR FUENTE</a>
    </div>
</template>

<script>
export default {
    name: 'Sources',
    data() {
        return {
            sources: [{sourceId: "1",title:"fuente 1", endpoint:"https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-18&sortBy=publishedAt&apiKey=50ecf648f934413d99f3b15fe1535412"},
            {sourceId: "2",title:"fuente 2"},
            {sourceId: "3",title:"fuente 3"}
            
            ],
        }
    },

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
