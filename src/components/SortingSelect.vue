<template>
  <div class="sorting-select">
    <p class="sorting-select__placeholder"
    @click="isOptionsVisible = !isOptionsVisible">
    <span v-if="!GET_INVOICE_NUMBER_SORTING">Sorting</span>
    <span v-if="GET_INVOICE_NUMBER_SORTING == 1">Sort by Invoice number: ascending</span>
    <span v-if="GET_INVOICE_NUMBER_SORTING == 2">Sort by Invoice number: descending</span>
    <span class="down-arrow__icon
    down-arrow__icon-sorting" v-if="!isOptionsVisible"></span>
    <span class="down-arrow__icon
    down-arrow__icon-sorting rotation270" v-if="isOptionsVisible"></span></p>
    <div class="sorting-select__options" v-if="isOptionsVisible">
      <span @click="setInvoiceNumberSorting(1)">Sort by Invoice number: ascending</span>
      <span @click="setInvoiceNumberSorting(2)">Sort by Invoice number: descending</span>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'SortingSelect',
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
  .sorting-select {
    position: relative;
    width: 300px;
    top: 20px;
    left: 20px;
    user-select: none;
    border: 1px solid #E0E5E6;
    box-sizing: border-box;

    &__placeholder {
      margin: 0;
      padding-left: 10px;
      background-color: white;
      box-sizing: border-box;

      font-weight: bold;
      font-size: 16px;
      line-height: 30px;
    }

    &__options {
      position: absolute;
      top: 30px;
      right: -1px;
      width: 300px;
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
