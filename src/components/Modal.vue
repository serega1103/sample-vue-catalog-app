<template>
  <div class="modal">
    <div class="modal__background" @click="setModalStateFalse()">

    </div>
    <div class="modal__window">

    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Modal',
  methods: {
    ...mapMutations([
      'SET_MODAL_STATE',
    ]),
    setModalStateFalse() {
      this.SET_MODAL_STATE(false);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;

    &__background {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.3);
    }

    &__window {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 240px;
      width: 400px;
      margin: auto auto;
      background-color: #FFFFFF;
    }
  }
</style>
