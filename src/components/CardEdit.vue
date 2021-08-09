<template>
  <div class="card-edit" @click="switchMenuVisible()">
    <span class="ellipsis__icon card-edit__icon"></span>
    <div class="card-edit__menu" v-if="isEditMenuVisible">
      <div class="card-edit__menu-option"
      @click="SET_MODAL_STATE(2); APEND_ORDER(orderObject)">
        <div class="card-edit__menu-option-icon">
          <span class="pencil__icon"></span>
        </div>
        <span class="card-edit__menu-option-text">редактировать</span>
      </div>
      <div @click="REMOVE_ORDER(orderObject.id)"
      class="card-edit__menu-option">
        <div class="card-edit__menu-option-icon">
          <span class="bucket__icon"></span>
        </div>
        <span class="card-edit__menu-option-text">удалить</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'CardEdit',
  props: {
    orderObject: {
      type: Object,
      default() {
        return '';
      },
    },
  },
  data() {
    return {
      isEditMenuVisible: false,
    };
  },
  methods: {
    ...mapMutations([
      'APEND_ORDER',
      'REMOVE_ORDER',
      'SET_MODAL_STATE',
    ]),
    switchMenuVisible() {
      this.isEditMenuVisible = !this.isEditMenuVisible;
    },
  },
};
</script>

<style scoped lang="scss">
  .card-edit {
    position: relative;
    height: 40px;
    width: 40px;
    user-select: none;
    float: right;

    &__icon {
      position: absolute;
      top: 12px;
      right: 25px;
    }

    &__menu {
      position: absolute;
      top: 31px;
      right: 20px;
      height: 55px;
      width: 150px;

      background: #FFFFFF;
      box-shadow: 0px 4px 4px rgba(182, 182, 182, 0.25);
      border-radius: 2px;

      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: #2B2839;

      &-option {
        height: 27px;
        width: 100%;
        line-height: 27px;

        &-icon {
          width: 16px;
          display: inline-block;
          margin-left: 10px;
        }
        &-text {
          margin-left: 5px;
        }
      }
    }
  }
</style>
