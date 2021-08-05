<template>
  <div class="filters">
    <div class="filters__header">
      <span class="filters__header-text">Filters</span>
    </div>
    <div class="filters__content">
      <span class="filters__content-invoice-text">Invoice number</span>
      <input type="search" name="filters" placeholder="Enter value" class="filters__content-input"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
      }
      &-input:active {
        border: 1px solid #D9D9D9;
      }
    }
  }

</style>
