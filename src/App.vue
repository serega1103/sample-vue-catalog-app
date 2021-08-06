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
  }
  .down-arrow__icon {
    content: url('assets/icons/down-arrow.svg');
  }
  .rotation270 {
    transform: rotate(270deg);
  }
</style>
