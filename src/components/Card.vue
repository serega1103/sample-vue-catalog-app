<template>
  <div class="card">
    <div class="card__header">
      <span class="card__header-text">Card</span>
    </div>
    <div class="card__content">
      <span class="card__content-order-data">{{ order_data.id }}</span>
      <span class="card__content-order-data">{{ order_data.invoice_id }}</span>
      <span class="card__content-order-data">{{ order_data.type }}</span>
      <span class="card__content-order-data">{{ order_data.date }}</span>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Card',
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
  .card {
    background: #F6FAFB;
    box-shadow: 0px 4px 12px #EBEBEB;
    border-radius: 3px;

    &__header {
      height: 25px;
      padding: 15px 0 0 20px;
      background: rgba(237, 232, 245, 0.5);

      &-text {
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #2B2839;
      }
    }

    &__content {
      padding: 0 20px 20px 20px;

      &-order-data {
        display: block;
        height: 30px;
        border-bottom: 1px solid #F2F2F2;

        font-weight: normal;
        font-size: 14px;
        line-height: 30px;
        color: #2B2839;
      }
    }
  }
</style>
