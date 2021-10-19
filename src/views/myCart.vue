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
          <b-row align-h="center" class="cart_page" v-if="getCart == ''">
            <b-col class="text-center">
              <strong>Não há produtos no seu carrinho!</strong>
            </b-col>
          </b-row>
          <b-row align-h="center" class="cart_page" v-for="item in getCart" :key="item._id">
            <b-col class="text-center" md="5">
              <b-row>
                <b-col md="auto">
                  <b-img style="width: 120px; height: 120px; cursor: pointer;" @click="$router.push({path: `/produto/${item._id}`})" :src="item.photo" />
                </b-col>
                <b-col align-self="center" md="7">
                  <strong style="cursor: pointer;"  @click="$router.push({path: `/produto/${item._id}`})">
                    {{item.item }}
                  </strong>
                </b-col>
              </b-row>
            </b-col>
            <b-col md="3" align-self="center">
              <b-row>
                <b-col md="auto" align-self="center">
                  <b-icon icon="trash-fill" font-scale="2" variant="primary" aria-hidden="true" style="cursor: pointer;" @click="removeItem(item._id)" />
                </b-col>
                <b-col>
                  <b-form-spinbutton 
                  id="sb-wrap" 
                  wrap 
                  min="1" 
                  max="30" 
                  v-model="item.qtd" 
                  @change="getValues(item)" />
                </b-col>
              </b-row>
            </b-col>
            <b-col md="3" align-self="center" class="text-center">
                <strong class="value-item text-center value-product">
                 R$ {{ (item.price * item.qtd).toFixed(2).replace('.', ',') }}
                 <!-- <input type="number" v-model="item.price"> -->
                </strong>
            </b-col>
          </b-row><br><br><hr>

          <b-row align-h="end">
            <b-col md="4">
              <span class="total-value">Valor do Frete </span><br>
              <strong style="font-size: 21pt;" class="value-item"  v-if="getCart !== ''">R$ 298</strong>
            </b-col>

            <b-col md="4">
                <span class="total-value">Valor total do pedido </span><br>
                <strong style="font-size: 21pt;" class="value-item">
                  R$ {{ 
                    (getCart.map(arr => arr.price * arr.qtd).reduce((total, soma) => total + soma, 0 + 0).toFixed(2)).replace('.', ',') 
                  }}
                </strong>
            </b-col>
        
            <b-col md="4" class="text-center" align-self="center">
              <b-button variant="primary" class="continue-pay" :disabled="getCart == ''">
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

export default {
    computed: {
    ...mapGetters({
      getCart: 'app/getCart',
    })
  },

  data(){
    return {
      qtdItem: 1,
      items: [],
      totalCart: []
    }
  },

  methods: {
    ...mapActions({
      addProductToCart: 'app/addProductToCart',
      removeProductCart: 'app/removeProducCart',
      editCart: 'app/editCart'
    }),

    getValues(val){
      let indice = this.getCart.findIndex(arr => arr._id == val._id)
      this.editCart({indice, qtd: val.qtd})
    },

    removeItem(val){
      this.$confirm("Deseja remover item do Carrinho?").then(()=> {
        this.removeProductCart(val)
      })
    }
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
