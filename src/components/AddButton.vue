<template>
  <div class="add-button">
    <button type="button" name="add-button"
    class="add__button purchase__button" @click="setModalStateTrue()">
      <span class="plus__icon"></span>
      <span>Добавить</span>
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'AddButton',
  methods: {
    ...mapMutations([
      'SET_MODAL_STATE',
    ]),
    setModalStateTrue() {
      this.SET_MODAL_STATE(true);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .add__button {
    height: 70px;
    width: 100%;
    background: #4943CD;
    box-shadow: 0px 4px 4px #EBEBEB;
    border-radius: 2px;

    font-weight: bold;
    font-size: 14px;
    line-height: 70px;
    color: #FFFFFF;

    text-align: center;
    text-transform: uppercase;

    & :first-child {
      margin-right: 10px;
    }
  }
</style>
