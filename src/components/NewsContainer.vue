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
    getArticles(source) {
      axios.get(source.endpoint).then(
        function(res) {
          // eslint-disable-next-line no-console
          console.log(
            "Articulos procesados de " + source.title + " " + res.items.length
          );
          return res.items;
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
    var sources = Sources.data();

    for (var i = 0; i < sources.sourcesArray.length; i++) {
      comp.newsArticles.push(comp.getArticles(sources.sourcesArray[i]));
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
