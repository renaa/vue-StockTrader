<template>
  <div class="home">
    <br>
   <h1>Trade or view your Portfolio</h1>
   <br>
   <h6>You may Save & Load your Data</h6>
   <h6>Click on 'End Day' to begin a New Day!</h6>
   <br>
   <p>Your Funds: {{funds | currency}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds(){
      return this.$store.getters.funds
    }
  }
  
}
</script>

<style scoped>

</style>
