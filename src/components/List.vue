<template>
  <div class="list">
    <div class="list-row">
      <div class="list-row__element list-row__column1 list-row__header">ID</div>
      <div class="list-row__element list-row__column2 list-row__header">Номер накладной</div>
      <div class="list-row__element list-row__column3 list-row__header">Тип заказа</div>
      <div class="list-row__element list-row__column4 list-row__header">Дата создания</div>
      <div class="list-row__element list-row__column5 list-row__header"></div>
    </div>
    <ListRow v-for="order in ORDERS"
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
    ]),
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
      }

      &:last-child {
        border: 0;
      }
    }

    &__column1 {
      flex: 0 0 15%;
      max-width: 15%;
    }
    &__column2 {
      flex: 0 0 27%;
      max-width: 27%;
    }
    &__column3 {
      flex: 0 0 22%;
      max-width: 22%;
    }
    &__column4 {
      flex: 0 0 29%;
      max-width: 29%;
    }
    &__column5 {
      flex: 0 0 7%;
      max-width: 7%;

      &-edit-menu {
        position: relative;
        height: 30px;
        width: 100px;
        background-color: green;
      }
    }
  }
</style>
