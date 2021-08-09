<template>
  <div class="list-view">
    <Banner />
    <div class="wrapper">
      <div class="content">
        <LeftColumn />
        <div class="central-column">
          <ViewSwitcher />
          <Sorting />
          <List />
        </div>
      </div>
    </div>
    <Modal v-if="GET_MODAL" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Banner from '@/components/Banner.vue';
import LeftColumn from '@/components/LeftColumn.vue';
import Sorting from '@/components/Sorting.vue';
import ViewSwitcher from '@/components/ViewSwitcher.vue';
import List from '@/components/List.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: 'ListView',
  components: {
    Banner,
    LeftColumn,
    Sorting,
    ViewSwitcher,
    List,
    Modal,
  },
  computed: {
    ...mapGetters([
      'GET_MODAL',
    ]),
  },
};
</script>

<style scoped lang="scss">
  .content {
    margin-top: 30px;
  }
  .central-column {
    margin-left: 310px;
    min-width: 440px;
  }
</style>
