<template>
  <div class="order-type-select">
    <p class="order-type-select__placeholder"
    @click="isOptionsVisible = !isOptionsVisible">
    <span>{{ orderType }}</span>
    <span class="down-arrow__icon
    down-arrow__icon-sorting" v-if="!isOptionsVisible"></span>
    <span class="down-arrow__icon
    down-arrow__icon-sorting rotation270" v-if="isOptionsVisible"></span></p>
    <div class="order-type-select__options" v-if="isOptionsVisible">
      <span @click="choiceType('Принят')">Принят</span>
      <span @click="choiceType('В обработке')">В обработке</span>
      <span @click="choiceType('Готов')">Готов</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderTypeSelect',
  props: {
    orderType: {
      type: String,
      default() {
        return '';
      },
    },
  },
  data() {
    return {
      isOptionsVisible: false,
    };
  },
  methods: {
    choiceType(type) {
      this.$emit('orderTypeEdit', type);
      this.isOptionsVisible = !this.isOptionsVisible;
    },
  },
};
</script>

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
