<template>
  <div class="filters">
    <div class="filters__header">
      <span class="filters__header-text">Filters</span>
    </div>
    <div class="filters__content">
      <span class="filters__content-invoice-text">Invoice number</span>
      <input type="search" name="filters" placeholder="Enter value"
      v-model="invoiceNumberFilter" class="filters__content-input"/>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Filters',
  data() {
    return {
      invoiceNumberFilter: '',
    };
  },
  methods: {
    ...mapMutations([
      'SET_INVOICE_NUMBER_FILTER',
    ]),
  },
  watch: {
    invoiceNumberFilter() {
      this.SET_INVOICE_NUMBER_FILTER(this.invoiceNumberFilter);
    },
  },
};
</script>

<style scoped lang="scss">
  .filters {
    width: 100%;
    margin-top: 20px;
    background: white;
    box-shadow: 0px 4px 4px #EBEBEB;
    border-radius: 2px;

    &__header {
      height: 40px;
      border-bottom: 1px solid #F8F8F8;

      &-text {
        position: relative;
        top: 15px;
        left: 40px;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #2B2839;
      }
    }

    &__content {
      padding: 20px 30px;
      border-bottom: 1px solid #F8F8F8;

      &-invoice-text {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
      }
      &-input {
        width: 100%;
        margin-top: 10px;
        padding: 7px 10px;
        outline: none;

        background: #FFFFFF;
        border: 1px solid #D9D9D9;
        border-radius: 2px;

        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #A5A5A5;

        &::placeholder {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 30px;
          color: #A5A5A5;
        }
      }
      &-input:active {
        border: 1px solid #D9D9D9;
      }
    }
  }

</style>
