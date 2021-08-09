<template>
  <div class="order-type-select">
    <p class="order-type-select__placeholder"
    @click="isOptionsVisible = !isOptionsVisible">
    <span v-if="!GET_INVOICE_NUMBER_SORTING">Sorting</span>
    <span v-if="GET_INVOICE_NUMBER_SORTING == 1">Sort by Invoice number: ascending</span>
    <span v-if="GET_INVOICE_NUMBER_SORTING == 2">Sort by Invoice number: descending</span>
    <span class="down-arrow__icon
    down-arrow__icon-sorting" v-if="!isOptionsVisible"></span>
    <span class="down-arrow__icon
    down-arrow__icon-sorting rotation270" v-if="isOptionsVisible"></span></p>
    <div class="order-type-select__options" v-if="isOptionsVisible">
      <span>Принят</span>
      <span>В обработке</span>
      <span>Готов</span>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'OrderTypeSelect',
  data() {
    return {
      isOptionsVisible: false,
    };
  },
  methods: {
    ...mapMutations([
      'SET_INVOICE_NUMBER_SORTING',
    ]),
    setInvoiceNumberSorting(sortby) {
      this.SET_INVOICE_NUMBER_SORTING(sortby);
      this.isOptionsVisible = false;
    },
  },
  computed: {
    ...mapGetters([
      'GET_INVOICE_NUMBER_SORTING',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .order-type-select {
    position: relative;
    width: 100%;
    height: 30px;
    margin-top: 10px;
    user-select: none;

    &__placeholder {
      margin: 0;
      height: 30px;
      padding-left: 10px;
      background-color: white;
      border: 1px solid #E0E5E6;
      border-radius: 2px;
      box-sizing: border-box;

      font-weight: normal;
      font-size: 16px;
      line-height: 30px;
      color: #A5A5A5;
    }

    &__options {
      position: absolute;
      top: 28px;
      width: 100%;
      border: 1px solid #E0E5E6;
      border-top: 1px solid #FFFFFF;
      box-sizing: border-box;

      & span {
        display: block;
        margin: 0;
        padding-left: 10px;
        background-color: white;
        border-top: 1px solid #E0E5E6;

        font-weight: normal;
        font-size: 12px;
        line-height: 30px;
        color: #2B2839;
      }
    }
  }
  .down-arrow__icon-sorting {
    position: absolute;
    right: 10px;
    top: 12px;
  }
</style>
