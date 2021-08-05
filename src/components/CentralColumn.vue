<template>
  <div class="central-column">
    <Sorting />
  </div>
</template>

<script>
import Sorting from './Sorting.vue';
// import ViewSwitcher from './ViewSwitcher.vue';

export default {
  name: 'CentralColumn',
  components: {
    Sorting,
    // ViewSwitcher,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .central-column {
    margin-left: 310px;
  }
</style>
