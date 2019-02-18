<template>
    <div>
        <div>
        <b-pagination-nav base-url="#" :number-of-pages="10" v-model="currentPage" />
        </div>
    </div>
</template>

<script>
  export default {
    name: 'NewsPagination',
    data() {
      return {
        currentPage: 1
      }
    },
    methods: {
      linkGen(pageNum) {
        return '#page/' + pageNum + '/foobar'
      }
    }
  }
</script>

<style>

</style>
