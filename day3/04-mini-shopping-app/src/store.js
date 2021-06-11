import { createStore } from "vuex";

const store = createStore({
  state: {
    cart: []
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, product) {
      state.cart = state.cart.filter(i => i !== product);
    }
  },
  getters: {
    _userCart: state => state.cart,
    _cartCount: state => state.cart.length || 0
  }
});

export default store;
