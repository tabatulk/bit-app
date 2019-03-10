<template>
<div id="bothPanels">
  <div id="leftPanel">


  </div>
<div id="rigthPanel">
<NewsContainer v-bind:sources="this.sourcesArray"/>
</div>
  </div>
</template>

<script>
import NewsContainer from "./NewsContainer.vue";


export default {
  name: "Sources",
  components: {
    NewsContainer
  },
  data() {
    return {
      sourcesArray: [
        {
          sourceId: "1",
          status: "true",
          title: "El observador",
          endpoint:
            "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.elobservador.com.uy%2Frss%2Felobservador.xml&api_key=ghex2mcxlgochpn4hlc0shegtv04gtccoemo3bn8"
        },
        {
          sourceId: "2",
          status: true,
          title: "Montevideo.com.uy",
          endpoint: ""
        },
        {
          sourceId: "3",
          status: "true",
          title: "Brecha",
          endpoint:
            "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fbrecha.com.uy%2Ffeed&api_key=ghex2mcxlgochpn4hlc0shegtv04gtccoemo3bn8"
        },
        {
          sourceId: "4",
          status: "true",
          title: "Agesic",
          endpoint:
            "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.agesic.gub.uy%2Fagesicweb%2Frss_carpeta.jsp%3Fcontentid%3D1937%26site%3D1%26channel%3Dagesic&api_key=ghex2mcxlgochpn4hlc0shegtv04gtccoemo3bn8"
        },
        {
          sourceId: "5",
          status: "true",
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
          status: "true",
          title: "Presidencia.gub.uy",
          endpoint:
            "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.presidencia.gub.uy%2Frss&api_key=ghex2mcxlgochpn4hlc0shegtv04gtccoemo3bn8"
        }
      ]
    };
  }
};
</script>

<style>
#sourcesTitle {
  margin-top: 5px;
}
#bothPanels {
  display: flex;
  flex-direction: row;
  width: 900px;
  height: 800px;
  margin: 10px;

}


#leftPanel {
  width: 350px;
  height: 800px;
  margin: 10px;
  background-color: gainsboro;
}
</style>
