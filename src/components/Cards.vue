<template>
  <div class="cards">
    <Card v-for="order in orders"
    :key="order.id"
    :order_data="order" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from './Card.vue';

export default {
  name: 'Cards',
  components: {
    Card,
  },
  computed: {
    ...mapGetters([
      'ORDERS',
      'GET_INVOICE_NUMBER_FILTER',
    ]),
    orders() {
      return this.ORDERS.filter((order) => (order.invoice_id
        .indexOf(this.GET_INVOICE_NUMBER_FILTER) !== -1));
    },
  },
};
</script>

<style scoped lang="scss">
  .cards {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 20px;
    justify-content: space-between;
  }
</style>
