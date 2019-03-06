<template>
<<<<<<< HEAD
  <div id="leftPanel">
    <H3>Fuentes</H3>
    <div id="sourcesTitle" v-for="item in sourcesArray" v-bind:key="item">
      <b-form-checkbox
        v-bind:id="item.sourceId"
        v-model="status"
        value="accepted"
        unchecked-value="not_accepted"
      >{{item.title}}</b-form-checkbox>
    </div>
    <br>
    <a href="#">AGREGAR FUENTE</a>
=======
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
>>>>>>> origin/master
  </div>
</template>

<script>
import NewsContainer from "./NewsContainer.vue";
import axios from "axios";

export default {
  name: "Sources",
<<<<<<< HEAD

  data() {
    return {
      sourcesArray: [
        {
          sourceId: "1",
          title: "El observador",
          endpoint:
            "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.elobservador.com.uy%2Frss%2Felobservador.xml&api_key=ghex2mcxlgochpn4hlc0shegtv04gtccoemo3bn8"
        },
        {
          sourceId: "2",
          title: "Montevideo.com.uy",
          endpoint: ""
        },
        {
          sourceId: "3",
          title: "Brecha",
          endpoint:
            "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fbrecha.com.uy%2Ffeed&api_key=ghex2mcxlgochpn4hlc0shegtv04gtccoemo3bn8"
        },
        {
          sourceId: "4",
          title: "Agesic",
          endpoint:
            "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.agesic.gub.uy%2Fagesicweb%2Frss_carpeta.jsp%3Fcontentid%3D1937%26site%3D1%26channel%3Dagesic&api_key=ghex2mcxlgochpn4hlc0shegtv04gtccoemo3bn8"
        },
        {
          sourceId: "5",
          title: "180.com.uy",
          endpoint:
            "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2F180.com.uy%2Ffeed.php&api_key=ghex2mcxlgochpn4hlc0shegtv04gtccoemo3bn8"
        },
        /*{
          sourceId: "6",
          title: "Ministerio de Relaciones Exteriores",
          endpoint:
            "http://www.mrree.gub.uy/frontend/arss?1,1,1961,15,1961,S,15,0,0,0"
        },*/
        {
          sourceId: "7",
          title: "Presidencia.gub.uy",
          endpoint:
            "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.presidencia.gub.uy%2Frss&api_key=ghex2mcxlgochpn4hlc0shegtv04gtccoemo3bn8"
        }
      ]
    };
=======
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
>>>>>>> origin/master
  }
};
</script>

<style>
#sourcesTitle {
  margin-top: 5px;
}
<<<<<<< HEAD
=======
#bothPanels {
  width: 1200px;
  height: 800px;
  display: flex;
  flex-direction: row;
}
>>>>>>> origin/master
#leftPanel {
  width: 350px;
  height: 800px;
  margin: 10px;
  background-color: gainsboro;
}
</style>
