<template>
  <div class="stocks">
   <app-stock class="stocks" v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: 110 },
        { id: 2, name: "Google", price: 210 },
        { id: 3, name: "Apple", price: 250 },
        { id: 4, name: "Twitter", price: 10 },
      ]
    }
  },
  components: {
    appStock: Stock
  }
}
</script>

<style scoped>
  .stocks{
    display:  flex;
    flex-wrap: wrap;
  }
</style>
