<template>
    <div id="rightPanel">
        <div>
        <NewsCard v-bind:newsSource1='this.newsSource1' />
        </div>
        <div id="pagination">
            <NewsPagination />
        </div>
        
    </div>
    
</template>

<script>
import NewsCard from './NewsCard.vue';
import NewsPagination from './NewsPagination.vue';
import axios from 'axios';
export default {
    name: 'NewsContainer',
    components: {
       NewsCard,
       NewsPagination
  },
  data() {
        return {
            newsSource1: [],
            
        }
    },
    mounted () {
        var comp = this
        axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-18&sortBy=publishedAt&apiKey=50ecf648f934413d99f3b15fe1535412')
        .then(function(res){
            comp.newsSource1 = res.data.articles;
            // eslint-disable-next-line no-console
            console.log(comp.newsSource1)
        },
        function(err){
            // eslint-disable-next-line no-console
            console.log(err)
        })

    }
}

</script>

<style>
#rightPanel {
width: 800px;
height: 100%;
margin: 10px;
background-color: cadetblue;
display: flex;
flex-direction: column;
justify-content: space-between;
}
#pagination {
    align-self: center;
    justify-self: flex-end
}
</style>
