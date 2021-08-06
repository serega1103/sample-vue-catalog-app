<template>
  <div class="sorting-select">
    <p class="sorting-select__placeholder"
    @click="isOptionsVisible = !isOptionsVisible">{{ selected }}
    <span class="down-arrow__icon
    down-arrow__icon-sorting" v-if="!isOptionsVisible"></span>
    <span class="down-arrow__icon
    down-arrow__icon-sorting rotation270" v-if="isOptionsVisible"></span></p>
    <div class="sorting-select__options" v-if="isOptionsVisible">
      <p v-for="option in options" :key="option.value"
      @click="selectOption(option)">{{ option.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortingSelect',
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option);
      this.isOptionsVisible = false;
    },
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
    cursor: pointer;
    user-select: none;
    border: 1px solid #E0E5E6;

    &__placeholder {
      margin: 0;
      padding-left: 10px;
      background-color: white;

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

      & p {
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
