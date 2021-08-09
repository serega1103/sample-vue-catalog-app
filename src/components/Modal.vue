<template>
  <div class="modal">
    <div class="modal__background"
    @click="SET_MODAL_STATE(0); EDIT_ORDER(orderObject); SET_INVOICE_NUMBER_SORTING()"></div>
    <div class="modal__window">
      <div class="modal__window-header">
        <span v-if="GET_MODAL === 1">Добавление</span>
        <span v-if="GET_MODAL === 2">Изменение</span>
      </div>
      <div class="modal__window-content">
        <div class="modal__window-content-input">
          <p>Номер накладной</p>
          <input type="text" name="invoice-id"
          placeholder="Введите значение" v-model="orderObject.invoice_id">
        </div>
        <div class="modal__window-content-input">
          <p>Тип заказа</p>
          <OrderTypeSelect />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import OrderTypeSelect from './OrderTypeSelect.vue';

export default {
  name: 'Modal',
  components: {
    OrderTypeSelect,
  },
  data() {
    return {
      orderObject: {
        id: '',
        invoice_id: '',
        type: '',
        date: '',
      },
    };
  },
  methods: {
    ...mapMutations([
      'EDIT_ORDER',
      'SET_MODAL_STATE',
      'SET_INVOICE_NUMBER_SORTING',
    ]),
  },
  computed: {
    ...mapGetters([
      'GET_ORDER',
      'GET_EDITABLE_ORDER',
      'GET_ORDERS_COUNT',
      'GET_MODAL',
    ]),
  },
  mounted() {
    if (this.GET_EDITABLE_ORDER) {
      this.orderObject = this.GET_EDITABLE_ORDER;
    }
  },
};
</script>

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
      height: 190px;
      width: 360px;
      margin: auto auto;
      padding: 25px 20px;
      background-color: #FFFFFF;

      &-header {
        text-align: center;
        font-weight: normal;
        font-size: 16px;
        line-height: 16px;
      }

      &-content {
        padding-top: 10px;

        &-input {
          margin-top: 20px;

          & input {
            width: 100%;
            height: 30px;
            margin: 15px 20px 0 0;
            padding: 7px 10px;
            outline: none;
            box-sizing: border-box;

            background: #FFFFFF;
            border: 1px solid #D9D9D9;
            border-radius: 2px;

            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            color: #A5A5A5;

            & :active {
              border: 1px solid #D9D9D9;
            }
          }
          & input::placeholder {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 30px;
            color: #A5A5A5;
          }
        }

        & p {
          margin: 0;
          font-weight: normal;
          font-size: 16px;
          line-height: 16px;
        }
      }
    }
  }
</style>
