import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orders: [
      {
        id: 'A',
        invoice_id: '3500',
        type: 'REUD',
        date: '12.03.2021',
      },
      {
        id: 'B',
        invoice_id: '5900',
        type: 'NEUD',
        date: '08.04.2015',
      },
      {
        id: 'С',
        invoice_id: '1300',
        type: 'NEUD',
        date: '26.08.2017',
      },
      {
        id: 'D',
        invoice_id: '8908',
        type: 'NEUD',
        date: '03.07.2016',
      },
    ],
    invoiceNumberSorting: 0,
    isModalVisible: false,
  },
  mutations: {
    SET_ORDERS_TO_STATE: (state, orders) => {
      state.orders = orders;
    },
    SET_INVOICE_NUMBER_SORTING: (state, sortby) => {
      state.invoiceNumberSorting = sortby;
      if (state.invoiceNumberSorting === 1) {
        state.orders = state.orders.sort((a, b) => a.invoice_id.localeCompare(b.invoice_id));
      }
      if (state.invoiceNumberSorting === 2) {
        state.orders = state.orders.sort((a, b) => b.invoice_id.localeCompare(a.invoice_id));
      }
    },
    SET_MODAL_STATE: (state) => {
      state.isModalVisible = !state.isModalVisible;
    },
  },
  modules: {
  },
  getters: {
    ORDERS(state) {
      return state.orders;
    },
    GET_INVOICE_NUMBER_SORTING(state) {
      return state.invoiceNumberSorting;
    },
    GET_MODAL(state) {
      return state.isModalVisible;
    },
  },
});
