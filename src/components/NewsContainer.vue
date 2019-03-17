<template>
  <div id="c1">
    <div id="c2">
      <H3>Fuentes</H3>
      <br>
    <div id="sourcesTitle" v-for="(item, index) in newsArticles">
      
        
      <b-form-checkbox
        v-bind:id="item.sourceId"
        v-model="item.status"
        value="true"
        unchecked-value="false"
        checked-value="true"
        v-on:change="statusUpdate()"
      >{{item.fuente}}</b-form-checkbox>
   
    </div>
           <br>
    <a href="#">AGREGAR FUENTE</a>
    </div>

    <div id="c3">
      <div>
        <NewsCard v-bind:articles="this.newsArticles"/>
      </div>

      <div id="pagination">
        <NewsPagination/>
      </div>
    </div>

  </div>
</template>

<script>



import NewsCard from "./NewsCard.vue";
import NewsPagination from "./NewsPagination.vue";
import axios from "axios";
export default {
  name: "NewsContainer",
  components: {
    NewsCard,
    NewsPagination
  },
  props: {
    sources: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      newsArticles: []
    };
  },

  methods: {
    statusUpdate() {
      // eslint-disable-next-line no-console
     console.log(this.newsArticles);
    },
    // Este método es para traer los artículos del Endpoint del Source
    getArticles(source, articles) {
      axios.get(source.endpoint).then(
        function(res) {
          // eslint-disable-next-line no-console
          // console.log("Estamos imprimiendo el res feed");
          // eslint-disable-next-line no-console
          console.dir(
            source.title // dice que res.items está uncaught in promise - cannot read length of undefined
          );

          // Creando un Array
          //articles.push.apply(articles, res.data.items);

          //Creando Array de Objetos con Título e items
          articles.push({
            fuente: source.title,
            items: res.data.items,
            sourceId: source.sourceId,
            sourceName: source.title,
            status: "true"
          });
        },
        function(err) {
          // eslint-disable-next-line no-console
          console.log(err);
        }
      );
    }

  },

  mounted() {
    var comp = this;
    /* var sources = Sources.data().sourcesArray; */
    // Este for recorre el array de data de Sources, para ir usando la función getArticles en cada Source
    for (var i = 0; i < comp.sources.length; i++) {
      comp.getArticles(comp.sources[i], comp.newsArticles);
    }
    // eslint-disable-next-line no-console
    console.log("Imprimiendo luego del for");
    // eslint-disable-next-line no-console
    console.dir(
      comp.newsArticles // dice que res.items está uncaught in promise - cannot read length of undefined
    );
  }
};
</script>

<style>
#c1 {
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#c2 {
  margin-top: 20px;
  margin-right: 40px;
  margin-left: 40px;
}

#c3 {
  width: 800px;
  height: 100%;
  margin-bottom: 10px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#pagination {
  align-self: center;
  justify-self: flex-end;
}
</style>
