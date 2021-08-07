<template>
  <div class="view-switcher">
    <router-link class="view-switcher__cards" :to="{ name: 'CardsView' }">
    <span class="cards__icon"></span></router-link>
    <router-link class="view-switcher__list" :to="{ name: 'ListView' }">
    <span class="list__icon"></span></router-link>
  </div>
</template>

<script>
export default {
  name: 'ViewSwitcher',
  data() {
    return {
      isOptionsVisible: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .view-switcher {
    float: right;
    margin-top: 15px;
    border: 1px solid #647A8C;
    border-radius: 7px;
    background: #FFFFFF;
    text-align: center;
    line-height: 37px;
    overflow: hidden;

    &__cards {
      height: 40px;
      width: 40px;
      display: inline-block;
      border-right: 1px solid #647A8C;
      box-sizing: border-box;
      float: left;
    }

    &__list {
      height: 40px;
      width: 40px;
      display: inline-block;
      box-sizing: border-box;
      float: left;
    }
  }

  .router-link-exact-active {
    background-color: #E5E9EC;
  }
</style>
