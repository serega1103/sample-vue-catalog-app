<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  body {
    margin: 0;
    background-color: #F8F8F8;
    font-family: Roboto;
    font-style: normal;
  }
  .wrapper {
    margin: 0 110px;
  }
  .purchase__button {
    border: none;
    outline: none;
  }
  .plus__icon {
    content: url('assets/icons/plus.svg');
    vertical-align: middle;
  }
  .down-arrow__icon {
    content: url('assets/icons/down-arrow.svg');
    vertical-align: middle;
  }
  .cards__icon {
    content: url('assets/icons/cards.svg');
    vertical-align: middle;
  }
  .list__icon {
    content: url('assets/icons/list.svg');
    vertical-align: middle;
  }
  .ellipsis__icon {
    content: url('assets/icons/ellipsis.svg');
    vertical-align: middle;
  }
  .pencil__icon {
    content: url('assets/icons/pencil.svg');
    vertical-align: middle;
  }
  .bucket__icon {
    content: url('assets/icons/bucket.svg');
    vertical-align: middle;
  }
  .rotation270 {
    transform: rotate(270deg);
  }
  .cursor-pointer {
    cursor: pointer;
  }
</style>
