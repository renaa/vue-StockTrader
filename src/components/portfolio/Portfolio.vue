<template>
  <div class="portfolio">
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Stock from './Stock'
export default {
  methods: {},
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components: {
    appStock: Stock
  }
  
}
</script>

<style scoped>

</style>
