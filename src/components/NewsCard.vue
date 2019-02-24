<template>
  <div>
    <div v-for="item2 in articles" v-bind:key="item2" id="card">
      <b-card
        header="featured"
        header-tag="header"
        footer="Card Footer"
        footer-tag="footer"
        v-bind:title="item.title"
      >
        <b-card-text>{{item.description}}</b-card-text>
        <b-button v-bind:href="item.url" variant="primary">Fuente</b-button>
      </b-card>
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
  margin: 5px;
}
</style>
