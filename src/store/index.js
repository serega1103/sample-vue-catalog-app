import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orders: [
      {
        id: '1',
        invoice_id: '3500',
        type: 'Принят',
        date: '12.03.2021',
      },
      {
        id: '2',
        invoice_id: '5900',
        type: 'Принят',
        date: '08.04.2015',
      },
      {
        id: '3',
        invoice_id: '1300',
        type: 'Принят',
        date: '26.08.2017',
      },
      {
        id: '4',
        invoice_id: '8908',
        type: 'Принят',
        date: '03.07.2016',
      },
    ],
    editableOrder: {},
    ordersCount: 4,
    invoiceNumberSorting: 0,
    invoiceNumberFilter: '',
    modalState: 0,
  },
  mutations: {
    APEND_ORDER: (state, order) => {
      if (order) {
        state.editableOrder = order;
      } else {
        const currentDate = new Date().toLocaleDateString();
        const newOrder = {
          id: (state.ordersCount + 1).toString(),
          invoice_id: '',
          type: 'Принят',
          date: currentDate,
        };
        state.orders.push(newOrder);
        state.editableOrder = newOrder;
        state.ordersCount += 1;
      }
    },
    REMOVE_ORDER: (state, orderId) => {
      Vue.delete(state.orders, state.orders.findIndex((item) => item.id === orderId));
    },
    EDIT_ORDER: (state, order) => {
      Vue.delete(state.orders, state.orders.findIndex((item) => item.id === order.id));
      state.orders.push(order);
    },
    SET_INVOICE_NUMBER_SORTING: (state, sortby) => {
      if (sortby) {
        state.invoiceNumberSorting = sortby;
      }
      if (state.invoiceNumberSorting === 0) {
        state.orders = state.orders.sort(
          (a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }),
        );
      } else if (state.invoiceNumberSorting === 1) {
        state.orders = state.orders.sort(
          (a, b) => a.invoice_id.localeCompare(b.invoice_id, undefined, { numeric: true }),
        );
      } else if (state.invoiceNumberSorting === 2) {
        state.orders = state.orders.sort(
          (a, b) => b.invoice_id.localeCompare(a.invoice_id, undefined, { numeric: true }),
        );
      }
    },
    SET_INVOICE_NUMBER_FILTER: (state, filter) => {
      state.invoiceNumberFilter = filter;
    },
    SET_MODAL_STATE: (state, modalState) => {
      if (modalState === 0 || !modalState) {
        state.modalState = 0;
      } else if (modalState === 1) {
        state.modalState = 1;
      } else if (modalState === 2) {
        state.modalState = 2;
      }
    },
  },
  modules: {
  },
  getters: {
    ORDERS(state) {
      return state.orders;
    },
    GET_ORDER(state, id) {
      return state.orders.findIndex((item) => item.id === id);
    },
    GET_EDITABLE_ORDER(state) {
      return state.editableOrder;
    },
    GET_ORDERS_COUNT(state) {
      return state.ordersCount;
    },
    GET_INVOICE_NUMBER_SORTING(state) {
      return state.invoiceNumberSorting;
    },
    GET_INVOICE_NUMBER_FILTER(state) {
      return state.invoiceNumberFilter;
    },
    GET_MODAL(state) {
      return state.modalState;
    },
  },
});
