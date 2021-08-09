<template>
  <div class="list-row">
    <div class="list-row__element list-row__column1">{{ order_data.id }}</div>
    <div class="list-row__element list-row__column2">{{ order_data.invoice_id }}</div>
    <div class="list-row__element list-row__column3">{{ order_data.type }}</div>
    <div class="list-row__element list-row__column4">{{ order_data.date }}</div>
    <div class="list-row__element list-row__column5 cursor-pointer">
      <ListRowEdit :orderObject = "order_data" />
    </div>
  </div>
</template>

<script>
import ListRowEdit from './ListRowEdit.vue';

export default {
  name: 'ListRow',
  components: {
    ListRowEdit,
  },
  props: {
    order_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  //
</style>
