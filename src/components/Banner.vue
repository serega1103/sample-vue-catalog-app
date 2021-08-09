<template>
  <div class="banner">
    <div class="wrapper">
      <h1>Тестовое задание</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style scoped lang="scss">
  .banner {
    height: 261px;
    background: rgb(73,67,205);
    background: linear-gradient(90deg, rgba(73,67,205,1) 0%, rgba(144,7,147,1) 100%);
  }

  h1 {
    margin-block-start: 0;
    margin-block-end: 0;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 261px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    vertical-align: middle
  }
</style>
