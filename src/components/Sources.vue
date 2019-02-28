<template>
  <div id="bothPanels">
    <div id="leftPanel">
      <H3>Fuentes</H3>
      <div id="sourcesTitle" v-for="item in sources">
        <div @click="sourceCheckbox(item)">
          <b-form-checkbox
            v-bind:id="item.sourceId"
            v-model="item.status"
            value="accepted"
            unchecked-value="not_accepted"
          >{{item.title}}</b-form-checkbox>
        </div>
      </div>
      <br>
      <a href="#">AGREGAR FUENTE</a>
    </div>
    <NewsContainer v-bind:allNews="this.allNews"/>
  </div>
</template>

<script>
import NewsContainer from "./NewsContainer.vue";
import axios from "axios";

export default {
  name: "Sources",
  components: {
    NewsContainer
  },
  data() {
    return {
      allNews: [],
      currentSource: [],
      sources: [
        {
          sourceId: "1",
          status: "",
          title: "fuente 1",
          endpoint:
            "https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-28&sortBy=publishedAt&apiKey=50ecf648f934413d99f3b15fe1535412"
        },
        {
          sourceId: "2",
          status: "",
          title: "fuente 2",
          endpoint: ""
        }
      ]
    };
  },
  methods: {
    // Este método es para traer los artículos del Endpoint del Source
    getArticles(source) {
      var comp = this;
      axios.get(source.endpoint).then(
        function(res) {
          comp.currentSource = res.data.articles;
          // eslint-disable-next-line no-console
          console.log(comp.currentSource);
          for (var i = 0; i < comp.currentSource.length; i++) {
            comp.allNews.push({
              title: comp.currentSource[i].title,
              description: comp.currentSource[i].description,
              sourceId: source.sourceId,
              sourceStatus: 1
            });
          }
        },
        function(err) {
          // eslint-disable-next-line no-console
          console.log(err);
        }
      );
    },
    sourceCheckbox(item) {
      /* for (var i = 0; i < this.allNews.length; i++) {
        if (item.sourceId == this.allNews[i].sourceId) {
          this.allNews[i].sourceStatus = this.allNews[i].sourceStatus * -1;
        }
      } */
    }
  },
  mounted() {
    var comp = this;
    // Este for recorre el array de data de Sources, para ir usando la función getArticles en cada Source
    for (var i = 0; i < comp.sources.length; i++) {
      comp.getArticles(comp.sources[i]);
    }
  }
};
</script>

<style>
#sourcesTitle {
  margin-top: 5px;
}
#bothPanels {
  width: 1200px;
  height: 800px;
  display: flex;
  flex-direction: row;
}
#leftPanel {
  width: 350px;
  height: 800px;
  margin: 10px;
  background-color: gainsboro;
}
</style>
