<template>
  <div class="list-row-edit">
    <div class="list-row-edit__icon"
    @click="isEditMenuVisible = true" v-if="!isEditMenuVisible">
      <span class="ellipsis__icon"></span>
    </div>
    <div class="list-row-edit__menu"
    @click="isEditMenuVisible = false" v-if="isEditMenuVisible">
      <div @click="SET_MODAL_STATE(2); APEND_ORDER(orderObject)">
        <span class="pencil__icon"></span>
      </div>
      <div @click="REMOVE_ORDER(orderObject.id)">
        <span class="bucket__icon"></span>
      </div>
      <div>
        <span class="ellipsis__icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ListRowEditMenu',
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
  },
};
</script>

<style scoped lang="scss">
  .list-row-edit {
    user-select: none;

    &__icon {
      & span {
        position: relative;
        top: -1px
      }
    }

    &__menu {
      position: relative;
      top: 4px;
      right: 51px;
      height: 30px;
      width: 100px;
      border: 1px solid #647A8C;
      border-radius: 7px;
      background: #FFFFFF;
      text-align: center;
      line-height: 27px;
      overflow: hidden;

      & div {
        height: 30px;
        width: 33px;
        display: inline-block;
        box-sizing: border-box;
        float: left;
      }
    }
  }
</style>
