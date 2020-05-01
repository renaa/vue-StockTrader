<template>
  <div class="card m-3" style="width: 18rem;">
    <div class="card-header success">
      {{stock.name}}
      <span class="small text-success">Price: {{stock.price}}</span>
    </div>
    <div class="card-body d-flex flex-row">
      <b-form-input
        type="number"
        class="form-cotroll m-1"
        :class="{danger: insufficientFunds}"
        v-model="quantity"
      ></b-form-input>
      <b-button
        @click="buyStock"
        placeholder="Quantity"
        class="btn-outline m-1"
        :disabled="insufficientFunds || quantity <=0 || !Number.isInteger(parseInt(quantity))"
      >{{insufficientFunds ? '💸' : 'Buy'}}</b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
    disableButton() {
      console.log(!Number.isInteger(this.quantity));
      return;
    }
  }
};
</script>

<style scoped>
.danger {
  color: var(--danger);
}
.danger:focus {
  color: var(--danger);
}
</style>