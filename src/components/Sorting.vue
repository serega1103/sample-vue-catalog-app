<template>
  <div class="sorting">
    <select class="sorting__select">
      <option style="display:none">Sorting</option>
      <option class="sorting__select-option">Sort by Invoice number: ascending</option>
      <option class="sorting__select-option">Sort by Invoice number: descending</option>
    </select>

    <div class="custom-select" style="width: 300px;">
      <select>
        <option value="0">Select car:</option>
        <option value="1">Sort by Invoice number: ascending</option>
        <option value="2">Sort by Invoice number: descending</option>
      </select>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Sorting',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /* The container must be positioned relative: */
  .custom-select {
    position: relative;
    font-family: Arial;
  }

  .custom-select select {
    display: none; /*hide original SELECT element: */
  }

  .select-selected {
    background-color: DodgerBlue;
  }

  /* Style the arrow inside the select element: */
  .select-selected:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
  }

  /* Point the arrow upwards when the select box is open (active): */
  .select-selected.select-arrow-active:after {
    border-color: transparent transparent #fff transparent;
    top: 7px;
  }

  /* style the items (options), including the selected item: */
  .select-items div,.select-selected {
    color: #ffffff;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
  }

  /* Style items (options): */
  .select-items {
    position: absolute;
    background-color: DodgerBlue;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
  }

  /* Hide the items when the select box is closed: */
  .select-hide {
    display: none;
  }

  .select-items div:hover, .same-as-selected {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .sorting {
    height: 70px;
    margin-right: 20px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px #E7E7E7;
    border-radius: 3px;

    &__select {
      height: 30px;
      width: 250px;
      margin: 20px 0 0 20px;
      border: 1px solid #E0E5E6;
      background-color: #FFFFFF;
      outline: none;

      font-weight: bold;
      font-size: 16px;
      line-height: 19px;

      &-option {
        height: 30px;
        width: 250px;
        margin: 20px 0 0 20px;
        border: 1px solid #E0E5E6;
        background-color: #FFFFFF;
        outline: none;

        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
</style>
