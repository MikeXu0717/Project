<template>
  <div>
    <Card></Card>
    <Sale></Sale>
    <Observe></Observe>
  </div>
</template>

<script>
import Card from './Card'
import Sale from './Sale'
import Observe from './Observe'
export default {
  name: '',
  components:{
    Card,
    Sale,
    Observe
  },
  mounted(){
    this.$store.dispatch('getData');
  }
}
</script>

<style scoped>

</style>

