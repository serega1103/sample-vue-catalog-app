<template>
  <div class="content">
    <LeftColumn />
    <CentralColumn />
  </div>
</template>

<script>
import LeftColumn from './LeftColumn.vue';
import CentralColumn from './CentralColumn.vue';

export default {
  name: 'Content',
  components: {
    LeftColumn,
    CentralColumn,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .content {
    margin-top: 30px;
  }
</style>
