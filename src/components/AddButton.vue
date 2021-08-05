<template>
  <div class="add-button">
    <button type="button" name="add-button" class="add__button purchase__button">
      <span class="icon plus__icon"></span>
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

    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;

    text-align: center;
    text-transform: uppercase;
  }
</style>
