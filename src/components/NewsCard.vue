<template>
  <div>
    <div v-for="source in allNews" id="card">
      <div v-for="article in allNews">
          <div v-if="article.sourceStatus==1">
        <b-card 
          v-bind:header="article.pubDate"
          header-tag="header"
          footer="Card Footer"
          footer-tag="footer"
          v-bind:title="article.title"
        >
          <b-card-text v-html="article.description">{{article.description}}</b-card-text>
          <b-button v-bind:href="article.link" variant="primary" target="_blank">{{source.fuente}}</b-button>
        </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    allNews: {
      type: Array,
      required: true
    },
  }
};
</script>

<style>
#card {
  margin: 5px;
}
</style>