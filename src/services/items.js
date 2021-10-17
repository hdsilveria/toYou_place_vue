import api from '../libs/axios'

export default {

  getItems(){
    return api.get('/items')  
  }
  
}