<template>
  <div class="cards">
    <h1>Cards View</h1>
    <button class="button" @click="$router.push('/')">Switch to ListView</button>
  </div>
</template>

<script>
export default {
  name: 'Cards',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  //
</style>
