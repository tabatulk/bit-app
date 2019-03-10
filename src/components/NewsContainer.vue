<template>
  <div id="rightPanel">
    <div>
      <NewsCard v-bind:articles="this.newsArticles"/>
    </div>
    <div id="pagination">
      <NewsPagination/>
    </div>
  </div>
</template>

<script>
import NewsCard from "./NewsCard.vue";
import NewsPagination from "./NewsPagination.vue";
import Sources from "./Sources.vue";
import axios from "axios";
export default {
  name: "NewsContainer",
  components: {
    NewsCard,
    NewsPagination
  },
  data() {
    return {
      newsArticles: []
    };
  },

  methods: {
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
          articles.push({ fuente: source.title, items: res.data.items, sourceId: source.sourceId });
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
    var sources = Sources.data().sourcesArray;
    // Este for recorre el array de data de Sources, para ir usando la función getArticles en cada Source
    for (var i = 0; i < sources.length; i++) {
      comp.getArticles(sources[i], comp.newsArticles);
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
  justify-self: flex-end;
}
</style>
