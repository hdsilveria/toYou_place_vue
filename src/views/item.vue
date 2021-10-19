<template>
  <div>
    <b-overlay 
    :show="apiInCall" 
    rounded="lg" 
    opacity="0.8" 
    spinner-type="grow" 
    spinner-variant="primary"
    >
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
            <b-col md="3" align-self="center">
                  <b-carousel
                    id="carousel-fade"
                    class="img-one-prod"
                    :controls="getOneProd.photo.length > 1"
                  >
                    <b-carousel-slide v-for="img in getOneProd.photo" :key="img.photo"
                      :img-src="img"
                    />
                  </b-carousel>
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
                      <b-img v-else class="logo-fav text-left" src="../assets/img/favorito_2.png" @click="removeFav(getOneProd._id)" />&nbsp;&nbsp;&nbsp;
                    <strong class="value">
                      <small style="text-decoration: line-through;" v-if="getOneProd.oldPrice && getOneProd.oldPrice > getOneProd.price">R${{getOneProd.oldPrice}}&nbsp;</small> R${{getOneProd.price}}
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
                      <b-button 
                      variant="outline-primary" 
                      :disabled="cart[0]" 
                      @click="addtoCartAndPush(getOneProd)"
                      >
                      <span style="color: white;">
                        Comprar Agora
                      </span>
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
                  </b-row><br>
                </div>
            </b-col>

          </b-row>
        </b-col>
      </b-row>
      <b-row class="text-center items-category" >
        <b-col>
        <h3 v-if="itemsCategory != ''">Veja Tambem</h3>
        </b-col>
      </b-row>

      <b-row class="mt-5">
          <b-col md="4" class="item_visu p-0" v-for="item in itemsCategory" :key="item.id">
              <b-popover :target="item._id" triggers="hover" placement="top" delay="50">
                <template #title>{{item.item}}</template>
              </b-popover>
              <b-row>
                <b-col md="auto" class="p-0">
                  <div>
                    <b-img class="img_prod" :src="item.photo[0]" alt="imagem do produto" />
                  </div>
                </b-col>
                <b-col md="7" class="text-center">
                  <b-row class="text-left">
                    <strong :id="item._id">
                      {{item.item.length > 16 ? item.item.substr(0,16) + '...': item.item}}
                    </strong>
                  </b-row>
                  <b-row>
                    <span>
                      <small style="text-decoration: line-through;" v-if="item.oldPrice && item.oldPrice > item.price">R${{item.oldPrice}}&nbsp;</small> R${{item.price}}
                    </span>
                  </b-row>
                  <b-row>
                    <small class="text-nowrap">
                      ou em até 12x de {{((item.price /12).toFixed(2).replace('.', ',')) }}
                    </small>
                  </b-row>
                  <b-row class="mt-2">
                    <b-button variant="primary" @click="replaceItem(item._id)">
                      <span>Ver Detalhes</span>
                    </b-button>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
      </b-row> <br>

      <b-row>

      </b-row>
      </b-col>
    </b-row>
    </b-overlay>
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
      itemsCategory: [],
      url: this.$route.params.id
    }
  },

  computed: {
    ...mapGetters({
      getOneProd: 'app/getOneProduct', 
      getCart: 'app/getCart',
      getFav: 'app/getFav',
      getProducts: 'app/getProducts',
      apiInCall: 'app/getApiInCall'
    }),
  },

  watch: {
    getOneProd(){
      this.itemsCategory = this.getProducts.filter(arr => arr.category == this.getOneProd.category && arr.item !== this.getOneProd.item)
    }
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

    replaceItem(val){
      window.location.assign(`/produto/${val}`)
    },

    addtoCartAndPush(val){
      this.addProductToCart(val).then(() => {
          this.pushData()
          this.$router.push({name: 'myCart'})
      })
    },

    removeCart(val){
      this.removeProductCart(val).then(() => {
        this.pushData()
      })
    },

    addtoCart(val){
      this.$confirm("Deseja adicionar ao Carrinho?").then(() => { 
        this.addProductToCart(val).then(() => {
          this.pushData()
        })
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

<style lang="scss">


.btnFret {
  background-color: rgb(255, 255, 255) !important;
  color: rgba(114,124,162,1);
}

.logo-fav {
  width: 30px; 
  margin-left: 8px;
  cursor: pointer;
}

.items-category {
  margin-top: 70px;
}

.img_prod {
  width: 120px;
  height: 120px;
}




</style>
