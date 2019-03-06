<template>
  <div>
    <div v-for="source in articles" v-bind:key="source">
      <div v-for="article in source.items" v-bind:key="article" id="card">
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
export default {
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