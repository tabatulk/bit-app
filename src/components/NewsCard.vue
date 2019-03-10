<template>
  <div>
    <div v-for="(source, index) in articles">
      <div v-for="article in source.items" v-show="checkStatus[index].status==true">
        <b-card 
          v-bind:header="article.pubDate"
          header-tag="header-tag"
          v-bind:title="article.title"
        >
          <b-card-text v-html="article.description">{{article.description}}</b-card-text>
          <b-button v-bind:href="article.link" variant="primary" target="_blank">Leer el artículo</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Sources from "./Sources.vue";


export default {
  data() {
    return {
      checkStatus: Sources.data().sourcesArray
    }
  },
  methods: {

  },
  name: "NewsCard",
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
#card {
  margin: 24px;
}
</style>