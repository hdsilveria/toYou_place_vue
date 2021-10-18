import items from '../../services/items'

export default {
  namespaced: true,
  state: {
    apiInCall: false,
    products: [],
    cart: [],
    fav: [],
    product: null
  },

  getters: {
    getApiInCall: state => state.apiInCall,
    getProducts: state => state.products,
    getOneProduct: state => state.product,
    getCart: state => state.cart,
    getFav: state => state.fav
  },

  mutations:{
    SET_API_IN_CALL(state, val){
      state.apiInCall = val
    },
    SET_PRODUCTS(state, val){
      state.products = val
    },
    SET_CART(state, val){
      state.cart.push(val)
    },
    SET_FAV(state, val){
      state.fav.push(val)
    },
    SET_ONE_PRODUCT(state, val){
      state.product = val
    },   
  },
  actions: {
    setApiInCall({commit}, val){
      commit('SET_API_IN_CALL', val)
    },

    setOneProduct({commit}, val){
      items.getOne(val).then(res => {
        commit('SET_ONE_PRODUCT', res.data)
      })
    },

    addProductToCart({commit}, val){
      commit('SET_CART', val)
    },

    addProductToFav({commit}, val){
      commit('SET_FAV', val)
    },

    setProducts({commit}){
      items.getItems().then(res => {
        commit('SET_PRODUCTS', res.data)
      })
    }
  }
}