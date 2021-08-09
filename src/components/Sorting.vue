<template>
  <div class="sorting">
    <SortingSelect />
  </div>
</template>

<script>
import SortingSelect from './SortingSelect.vue';

export default {
  name: 'Sorting',
  components: {
    SortingSelect,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sorting {
  height: 70px;
  min-width: 320px;
  margin-right: 100px;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px #E7E7E7;
  border-radius: 3px;
}
</style>
