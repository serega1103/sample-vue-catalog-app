<template>
  <div class="sorting">
    <SortingSelect :options="options" @select="optionSelect" :selected="selected"/>
  </div>
</template>

<script>
import SortingSelect from './SortingSelect.vue';

export default {
  name: 'Sorting',
  components: {
    SortingSelect,
  },
  data() {
    return {
      options: [
        {
          name: 'Sort by Invoice number: ascending',
          value: 1,
        },
        {
          name: 'Sort by Invoice number: descending',
          value: 2,
        },
      ],
      selected: 'Sorting',
    };
  },
  methods: {
    optionSelect(option) {
      this.selected = option.name;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sorting {
  height: 70px;
  margin-right: 20px;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px #E7E7E7;
  border-radius: 3px;
}
</style>
