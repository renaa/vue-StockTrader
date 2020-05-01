<template>
  <div>
    <b-navbar class="custom-header noselect" toggleable="sm" type="dark" variant="info">
      <b-navbar-brand to="/" class="my-widget">StockTrader</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/portfolio">Portfolio</b-nav-item>
          <b-nav-item to="/stocks">Stocks</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" @click="endDay">End Day</b-nav-item>
          <b-nav-item-dropdown text="Save & Load" right>
            <b-dropdown-item @click="saveData" href="#">Save</b-dropdown-item>
            <b-dropdown-item @click="loadData" href="#">Load</b-dropdown-item>
          </b-nav-item-dropdown>
          <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>

          <!-- <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks()
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data)
    },
    loadData() {
      this.fetchData()
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../custom.scss";

.custom-header {
  // https://www.gradient-animator.com/
  background: linear-gradient(270deg, #00eeb0, #ad00ee, #eeb400);
  background-size: 600% 600%;
  z-index: 1;
  animation: custom 30s ease infinite;

  @keyframes custom {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}
</style>
