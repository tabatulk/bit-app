<template>
  <div id="c1">
    <div id="c2">
      <H3>Fuentes</H3>
      <br>
      <div id="sourcesTitle" v-for="(item) in newsArticles" :key="item.sourceId">
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
      <b-modal id="modal-center" centered title="Agregar fuente" @ok="addSource">
        <p class="my-4">Ingrese eñ nombre de la fuente</p>
        <input id="addedtitle" type="text">
        <p class="my-4">Ingrese la URL del feed rss</p>
        <input id="addedurl" type="text">
      </b-modal>
      <b-button v-b-modal.modal-center>AGREGAR FUENTE</b-button>
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
import Vue from "vue";
import NewsCard from "./NewsCard.vue";
import NewsPagination from "./NewsPagination.vue";
import axios from "axios";
export default {
  name: "NewsContainer",
  components: {
    NewsCard,
    NewsPagination
  },

  data() {
    return {
      newsArticles: [],
      sourcesArray: [
        {
          sourceId: "1",
          status: "true",
          title: "Brecha",
          endpoint:
            "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fbrecha.com.uy%2Ffeed&api_key=ghex2mcxlgochpn4hlc0shegtv04gtccoemo3bn8"
        },
        {
          sourceId: "2",
          status: "true",
          title: "Agesic",
          endpoint:
            "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.agesic.gub.uy%2Fagesicweb%2Frss_carpeta.jsp%3Fcontentid%3D1937%26site%3D1%26channel%3Dagesic&api_key=ghex2mcxlgochpn4hlc0shegtv04gtccoemo3bn8"
        },
        {
          sourceId: "3",
          status: "true",
          title: "180.com.uy",
          endpoint:
            "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2F180.com.uy%2Ffeed.php&api_key=ghex2mcxlgochpn4hlc0shegtv04gtccoemo3bn8"
        },

      ]
    };
  },

  methods: {

    algo() {
    var comp = this;
    comp.newsArticles=[]
    for (var i = 0; i < comp.sourcesArray.length; i++) {
      comp.getArticles(comp.sourcesArray[i], comp.newsArticles);
    }
    // eslint-disable-next-line no-console
    console.log("Imprimiendo luego del for");
    // eslint-disable-next-line no-console
    console.dir(
      comp.newsArticles // dice que res.items está uncaught in promise - cannot read length of undefined
    );
  },


    launchModal() {
            this.$root.$emit('launchModal', this.value)
        },
    addSource () {
      
      this.addedSource = 
      Vue.set(this.sourcesArray, this.sourcesArray.length, {sourceId: (this.sourcesArray.length+1).toString(), status: "true", title: document.getElementById('addedtitle').value, endpoint:"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2F"+document.getElementById('addedurl').value+"&api_key=ghex2mcxlgochpn4hlc0shegtv04gtccoemo3bn8"})
      console.log(this.sourcesArray)
      this.algo()
      console.log("asdasdas")
    },
    statusUpdate() {
      console.log(this.newsArticles);
    },
    // Este método es para traer los artículos del Endpoint del Source
    getArticles(source, articles) {
      axios.get(source.endpoint).then(
        function(res) {
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
    for (var i = 0; i < comp.sourcesArray.length; i++) {
      comp.getArticles(comp.sourcesArray[i], comp.newsArticles);
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
