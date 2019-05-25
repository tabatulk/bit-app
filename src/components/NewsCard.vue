<template>
  <div id="cards">
    <div v-for="(source, index) in this.articles">
      <div v-for="article in source.items" v-show="source.status=='true'">
        <b-card
          id="card"
          v-bind:header="source.sourceName + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + article.pubDate"
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
    return {};
  },
  methods: {},
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
  margin: 5px;
}
</style>