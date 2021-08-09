<template>
  <div class="list">
    <div class="list-row">
      <div class="list-row__element list-row__column1 list-row__header">ID</div>
      <div class="list-row__element list-row__column2 list-row__header">Номер накладной</div>
      <div class="list-row__element list-row__column3 list-row__header">Тип заказа</div>
      <div class="list-row__element list-row__column4 list-row__header">Дата создания</div>
      <div class="list-row__element list-row__column5 list-row__header"></div>
    </div>
    <ListRow v-for="order in orders"
    :key="order.id"
    :order_data="order" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListRow from './ListRow.vue';

export default {
  name: 'List',
  components: {
    ListRow,
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

<style lang="scss">
  .list {
    margin-top: 20px;
  }

  .list-row {
    display: flex;
    width: 100%;
    box-sizing: border-box;

    &__element {
      display: block;
      box-sizing: border-box;
      flex: 1;
      height: 40px;
      width: 100%;
      border-top: 1px solid #E6E6E6;
      background-color: #FFFFFF;

      font-weight: normal;
      font-size: 16px;
      line-height: 40px;
      color: #000000;
      text-align: center;

      &:first-child {
        text-align: left;
        padding-left: 20px;
      }
    }

    &__header {
      padding: 0;
      border: 0;
      border-right: 3px solid #F8F8F8;
      background-color: #E6E6E6;
      font-weight: bold;

      &:first-child {
        text-align: center;
        padding: 0;
      }

      &:last-child {
        border: 0;
      }
    }

    &__column1 {
      flex: 0 0 150px;
      width: 150px;
    }

    &__column5 {
      flex: 0 0 65px;
      width: 65px;
    }
  }
</style>
