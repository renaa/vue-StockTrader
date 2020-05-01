<template>
  <div class="card m-3" style="width: 18rem;">
    <div class="card-header success">
      {{stock.name }}
      <span class="small ">Price: </span>
      <span class="small text-success">{{stock.price}}</span>
      <span class="small "> Quantity: </span>
      <span class="small text-success"> {{stock.quantity}}</span>
    </div>
    <div class="card-body d-flex flex-row">
      <b-form-input
        type="number"
        class="form-cotroll m-1"
        :class="{danger: insufficientQuantity}"
        v-model="quantity"
      ></b-form-input>
      <b-button
        @click="sellStock"
        placeholder="Quantity"
        class="btn-outline m-1"
        :disabled="insufficientQuantity || quantity <=0 || !Number.isInteger(parseInt(quantity))"
      >{{insufficientQuantity ? '🤔' : 'Sell'}}</b-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      console.log(this.quantity > this.stock.qunatity);
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellorder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellorder(order);
      this.quantity = 0;
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