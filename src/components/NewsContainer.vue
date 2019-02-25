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
      newsArticles: {}
    };
  },

  methods: {
    // Este método es para traer los artículos del Endpoint del Source
    getArticles(source, articles) {
      axios.get(source.endpoint).then(
        function(res) {
          // eslint-disable-next-line no-console
          console.log("Estamos imprimiendo el res feed");
          // eslint-disable-next-line no-console
          //console.dir(
          //res.data.items // dice que res.items está uncaught in promise - cannot read length of undefined
          //);
          //articles.push.apply(articles, res.data.items);
          articles[source.title] = res.data.items;
          // eslint-disable-next-line no-console
          console.log(articles);
        },
        function(err) {
          // eslint-disable-next-line no-console
          console.log(err);
        }
      );
    }
  },

  mounted() {
    // eslint-disable-next-line no-console
    console.log(">>MOUNTED");
    var comp = this;
    var sources = Sources.data();
    // Este for recorre el array de data de Sources, para ir usando la función getArticles en cada Source
    for (var i = 0; i < sources.sourcesArray.length; i++) {
      comp.getArticles(sources.sourcesArray[i], comp.newsArticles);
      // eslint-disable-next-line no-console
      console.log("Estamos imprimiendo el NewsArticles" + comp.newsArticles);
    }
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
