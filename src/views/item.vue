<template>
  <div>
    <b-row
      align-h="center"
    >
      <b-col
        class="main-colum"
        md="9"
      >
      <b-row class="product-page">
        <b-col>
      
      <b-row>
        <b-button variant="primary" @click="$router.push({name:'index'})">
          Voltar
        </b-button>      
      </b-row><br>

          <b-row align-h="center">
            <b-col md="auto" align-self="center">
              <b-img class="img-one-prod " :src="getOneProd.photo"/>
            </b-col>
            <b-col md="5" align-self="center">
              <b-row>
                <b-col class="text-center">
                  <h3>
                    {{getOneProd.item}} 
                  </h3>
                </b-col>
              </b-row>
              <b-row>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </p>
              </b-row>
            </b-col>

            <b-col md="4">
                <div class="box-payment text-center">
                      <b-img v-if="!fav[0]" class="logo-fav text-left" src="../assets/img/favorito.png" @click="addtoFav(getOneProd)" />
                      <b-img v-else class="logo-fav text-left" src="../assets/img/favorito_2.png" @click="removeFav(getOneProd._id)" />
                    <strong class="value">
                      R$ {{getOneProd.price}} 
                    </strong> <br>
                    <span>
                      ou em até 12x de {{((getOneProd.price /12).toFixed(2).replace('.', ',')) }}
                    </span>
                   <br><br>
                    <label for="frete">Calcular Frete</label><br>
                  <b-row class="text-center">
                    <b-col md="12" class="p-2 text-center d-flex">
                      <b-form-input type="text" />
                      <b-button class="btnFret" style="margin-left: 10px;">
                      <strong>
                        OK  
                      </strong>  
                      </b-button>
                    </b-col>
                  </b-row>
                  <b-row align-h="center" class="mt-2">
                    <b-col cols="auto" class="p-0">
                      <b-button variant="outline-primary">
                        Comprar Agora
                      </b-button>
                    </b-col>
                    <b-col cols="auto" class="p-0">&nbsp;
                      <b-button v-if="!cart[0]" variant="outline-primary" @click="addtoCart(getOneProd)">
                        Carrinho
                      </b-button>
                      <b-button v-else variant="outline-primary" @click="removeCart(getOneProd._id)">
                          Remover item
                      </b-button>
                    </b-col>
                    <!-- <b-col cols="auto" class="p-1">
                      <b-img v-if="!fav[0]" class="logo-fav" src="../assets/img/favorito.png" @click="addtoFav(getOneProd)" />
                      <b-img v-else class="logo-fav" src="../assets/img/favorito_2.png" @click="removeFav(getOneProd._id)" />
                    </b-col> -->
                  </b-row><br>
                </div>
            </b-col>

          </b-row>
        </b-col>
      </b-row> <br>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {

  created(){
    this.pushData()
  },

  data(){
    return{
      fav: null,
      cart: null,
    }
  },

  computed: {
    ...mapGetters({
      getOneProd: 'app/getOneProduct', 
      getCart: 'app/getCart',
      getFav: 'app/getFav'
    }),
  },

  methods: {
    ...mapActions({
      setOneProd: 'app/setOneProduct', 
      addProductToFav: 'app/addProductToFav',
      addProductToCart: 'app/addProductToCart',
      removeProducFav: 'app/removeProducFav',
      removeProductCart: 'app/removeProducCart'
    }),

    pushData(){
      this.setOneProd(this.$route.params.id).then(() => {
        this.fav = this.getFav.filter(arr => arr._id === this.$route.params.id)
        this.cart = this.getCart.filter(arr => arr._id === this.$route.params.id)
      })
    },

    removeCart(val){
      this.removeProductCart(val).then(() => {
        this.pushData()
      })
    },

    addtoCart(val){
      this.addProductToCart(val).then(() => {
        this.pushData()
      })
    },

    removeFav(val){
      this.removeProducFav(val).then(() => {
        this.pushData()
      })
    },

    addtoFav(val){
      this.addProductToFav(val).then(() => {
        this.pushData()
      })
    }
  }
  
}
</script>

<style lang="scss" scoped>


.btnFret {
  background-color: rgb(255, 255, 255) !important;
  color: rgba(114,124,162,1);
}

.logo-fav {
  width: 30px; 
  margin-left: 8px;
  cursor: pointer;
}


</style>
