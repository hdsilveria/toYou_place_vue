<template>
  <div>
    <b-row align-h="center">
      <!-- <abaPayment /> -->
      <b-col class="main-colum" md="9">
        <div class="mt-4">
          <b-row class="cart_page">
            <b-col>
              <b-button variant="primary" @click="$router.push({name:'index'})">
                Voltar
              </b-button>      
            </b-col>
            <b-col md="7">
              <h3>Meu Carrinho</h3>
            </b-col>
          </b-row>
          <b-row align-h="center" class="cart_page" v-for="item in getCart" :key="item._id">
            <b-col class="text-center" md="6">
              <b-row>
                <b-col md="auto">
                  <b-img style="width: 120px; height: 120px;" :src="item.photo" />
                </b-col>
                <b-col align-self="center" md="auto">
                  <strong style="cursor: pointer;"  @click="$router.push({path: `/produto/${item._id}`})">
                    {{item.item }}
                  </strong>
                </b-col>
              </b-row>
            </b-col>
            <b-col md="2" align-self="center">
              <b-row >
                  <b-form-spinbutton id="sb-wrap" wrap min="1" max="25" v-model="item.qtd" />
              </b-row>
            </b-col>
            <b-col md="4" align-self="center" class="text-center">
                <strong class="value-item text-center">
                 R$ {{ (item.price * item.qtd).toFixed(2).replace('.', ',') }}
                 <!-- <input type="number" v-model="item.price"> -->
                </strong>
            </b-col>
          </b-row><br><br><hr>

          <b-row align-h="end">
            <b-col md="4">
              <span class="total-value">Valor do Frete </span><br>
              <strong style="font-size: 21pt;" class="value-item">R$ 298</strong>
            </b-col>

            <b-col md="4">
                <span class="total-value">Valor total do pedido </span><br>
                <strong style="font-size: 21pt;" class="value-item">
                  <!-- R${{(items.map(arr => arr.price).reduce((total, soma) => total + soma, 0 + 0))}} -->
                  R$ {{ 
                    (getCart.map(arr => arr.price).reduce((total, soma) => total + soma, 0 + 0).toFixed(2)).replace('.', ',') 
                  }}
                </strong>
            </b-col>
        
            <b-col md="4" class="text-center" align-self="center">
              <b-button variant="primary" class="continue-pay">
                <span>Continuar Compra</span>
              </b-button>
            </b-col>
          </b-row><br>

        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
// import abaPayment from '../components/abaPayment.vue'

export default {
    computed: {
    ...mapGetters({
      getCart: 'app/getCart',
    }),
  },

  components: {
    // abaPayment
  },

  created(){
    // this.getCart.map(arr => this.items.push({
    //   item: arr.item,
    //   price: arr.price * arr.qtd,
    //   qtd: arr.qtd,
    //   photo: arr.photo
    // }))
  },

  data(){
    return {
      qtdItem: 1,
      items: []
    }
  },

  methods: {
    ...mapActions({
      addProductToCart: 'app/addProductToCart',
      removeProductCart: 'app/removeProducCart'
    }),
  }
}

</script>

<style lang="scss" scoped>

.total-value {
  font-size: 16pt !important;
  font-weight: 380;
}

.continue-pay {
  font-size: 18pt;
}

</style>
