<template>
  <div id="rightPanel">
    <div>
      <NewsCard v-bind:allNews="this.allNews" />
    </div>
    <div id="pagination">
      <NewsPagination/>
    </div>
  </div>
</template>

<script>
import NewsCard from "./NewsCard.vue";
import NewsPagination from "./NewsPagination.vue";
export default {
  name: "NewsContainer",
  components: {
    NewsCard,
    NewsPagination
  },
  props: {
      allNews:{ 
          type: Array,
          required: true
      },
  },
  data() {
    return {
      newsArticles: []
    };
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