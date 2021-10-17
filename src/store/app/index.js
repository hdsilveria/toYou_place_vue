import items from '../../services/items'

export default {
  namespaced: true,
  state: {
    apiInCall: false,
    products: [],
    cart: []
  },

  getters: {
    getApiInCall: state => state.apiInCall,
    getProducts: state => state.products
  },

  mutations:{
    SET_API_IN_CALL(state, val){
      state.apiInCall = val
    },
    SET_PRODUCTS(state, val){
      state.products = val
    },
    SET_CART(state, val){
      state.cart = val
    },
    
  },
  actions: {
    setApiInCall({commit}, val){
      commit('SET_API_IN_CALL', val)
    },

    setProducts({commit}){
      items.getItems().then(res => {
        commit('SET_PRODUCTS', res.data)
      })
    }
  }
}