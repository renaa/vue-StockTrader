<template>
  <div class="card m-3" style="width: 18rem;">
  <div class="card-header success">
    {{stock.name}} <span class="small text-success"> Price: {{stock.price}}</span>
  </div>
  <div class="card-body d-flex flex-row">
    <b-form-input type="number" class="form-cotroll m-1" v-model="quantity"></b-form-input>
    <b-button @click="buyStock" placeholder="Quantity"  class="btn-outline m-1" :disabled="quantity <=0 || !Number.isInteger(parseInt(quantity))">Buy</b-button>
  </div>
</div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return{
      quantity: 0,
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      console.log(order)
      this.quantity = 0
    },
    disableButton() {
      console.log( !Number.isInteger(this.quantity))
      return 
    }
  }
}
</script>

<style>

</style>