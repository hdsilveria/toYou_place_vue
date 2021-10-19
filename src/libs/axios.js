import axios from 'axios'
import store from '../store/index'

const api = axios.create({
  baseURL: 'http://localhost:8081/',
})

export default api

api.interceptors.response.use(
  response => {
    store.commit('app/SET_API_IN_CALL', true)
    return response
  },
)

api.interceptors.response.use(
  response => {
      store.commit('app/SET_API_IN_CALL', false)
      return response
  },
  error => {
      const { response } = error

      if (response && response.status === 401) {
          localStorage.clear()
          window.location.replace("/")
      }
      return Promise.reject(error)
  }
)
