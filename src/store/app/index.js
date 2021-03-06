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
    REMOVE_FAV(state, val){
      let indice = state.fav.findIndex(arr => arr._id == val)
      state.fav.splice(indice, 1)
    },
    REMOVE_CART(state, val){
      let indice = state.cart.findIndex(arr => arr._id == val)
      state.cart.splice(indice, 1)
    },
    EDIT_CART(state, val){
      state.cart[val.indice].qtd = val.qtd
    },
    SET_ONE_PRODUCT(state, val){
      state.product = val
    },   
  },
  actions: {
    setApiInCall({commit}, val){
      commit('SET_API_IN_CALL', val)
    },

    editCart({commit}, val){
      commit('EDIT_CART', val)
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

    removeProducFav({commit}, val){
      commit('REMOVE_FAV', val)
    },

    removeProducCart({commit}, val){
      commit('REMOVE_CART', val)
    },

    setProducts({commit}){
      items.getItems().then(res => {
        commit('SET_PRODUCTS', res.data)
      })
    }
  }
}