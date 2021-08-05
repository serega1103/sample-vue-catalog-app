<template>
  <div class="main-page">
    <Banner />
    <div class="wrapper">
      <Content />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Content from '@/components/Content.vue';

export default {
  name: 'MainPage',
  components: {
    Banner,
    Content,
  },
};
</script>
