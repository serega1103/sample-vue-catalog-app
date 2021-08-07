<template>
  <div class="cards-view">
    <Banner />
    <div class="wrapper">
      <div class="content">
        <LeftColumn />
        <div class="central-column">
          <ViewSwitcher />
          <Sorting />
          <Cards />
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
import Cards from '@/components/Cards.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: 'CardsView',
  components: {
    Banner,
    LeftColumn,
    Sorting,
    ViewSwitcher,
    Cards,
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
