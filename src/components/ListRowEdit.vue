<template>
  <div class="list-row-edit">
    <div class="list-row-edit__icon"
    @click="isEditMenuVisible = true" v-if="!isEditMenuVisible">
      <span class="ellipsis__icon"></span>
    </div>
    <div class="list-row-edit__menu"
    @click="isEditMenuVisible = false" v-if="isEditMenuVisible">
      <div class="list-row-edit__menu-option" @click="SET_MODAL_STATE(2); APEND_ORDER(orderObject)">
        <div class="list-row-edit__menu-option-icon">
          <span class="pencil__icon"></span>
        </div>
      </div>
      <div class="list-row-edit__menu-option" @click="REMOVE_ORDER(orderObject.id)">
        <div class="list-row-edit__menu-option-icon">
          <span class="bucket__icon"></span>
        </div>
      </div>
      <div class="list-row-edit__menu-option" >
        <div class="list-row-edit__menu-option-icon">
          <span class="ellipsis__icon"></span>
        </div>
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
      right: 50px;
      height: 30px;
      width: 100px;
      border: 1px solid #F2F2F2;
      border-radius: 7px;
      background: #FFFFFF;
      overflow: hidden;

      &-option {
        height: 32px;
        width: 32px;
        padding-left: 6px;
        padding-top: 3px;
        display: inline-block;
        box-sizing: border-box;
        float: left;

        &-icon {
          height: 24px;
          width: 24px;
          text-align: center;
          line-height: 22px;

          &:hover {
            background-color: #E5E9EC;
            border-radius: 12px;

            & span {
              opacity: 0.5;
            }
          }
          &:active span {
            opacity: 1;
          }
        }
      }
    }
  }
</style>
