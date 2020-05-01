<template>
  <div class="stocks">
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock" class="stocks"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style scoped>
.stocks {
  display: flex;
  flex-wrap: wrap;
}
</style>
