<template>
  <div class="left-column">
    <AddButton />
    <Filters />
  </div>
</template>

<script>
import AddButton from './AddButton.vue';
import Filters from './Filters.vue';

export default {
  name: 'LeftColumn',
  components: {
    AddButton,
    Filters,
  },
};
</script>

<style scoped lang="scss">
  .left-column {
    float: left;
    width: 280px;
  }
</style>
