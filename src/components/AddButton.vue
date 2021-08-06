<template>
  <div class="add-button">
    <button type="button" name="add-button" class="add__button purchase__button">
      <span class="plus__icon plus__icon-add-button"></span>
      Добавить
    </button>
  </div>
</template>

<script>
export default {
  name: 'AddButton',
  props: {
    msg: String,
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
    cursor: pointer;

    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;

    text-align: center;
    text-transform: uppercase;
  }
  .plus__icon-add-button {
    position: relative;
    top: 2px;
    margin-right: 10px;
  }
</style>
