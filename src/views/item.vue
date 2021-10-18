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
            <b-col md="auto">
              <b-img class="img-one-prod " :src="getOneProd.photo"/>
            </b-col>
            <b-col md="5">
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
                    <strong class="value">
                      R$ {{getOneProd.price}} 
                    </strong> <br>
                    <span>
                      ou em até 12x de {{((getOneProd.price /12).toFixed(2).replace('.', ',')) }}
                    </span>
                   <br><br>
                    <label for="frete">Calcular Frete</label><br>
                  <b-row class="text-center">
                    <b-col md="8" class="p-2 text-center">
                      <b-form-input type="text" />
                    </b-col>
                    <b-col md="auto">
                      <b-button class="btnFret" style="margin-top: 8px;">
                      <strong>
                        OK  
                      </strong>  
                      </b-button>
                    </b-col>
                  </b-row><br>
                  <b-row>
                    <b-col md="auto" class="p-0">&nbsp;
                      <b-button variant="outline-primary" @click="addProductToCart(getOneProd)">
                        Adicionar ao Carrinho
                      </b-button>
                    </b-col>
                    <b-col md="auto" class="p-0">&nbsp;
                      <b-button variant="outline-primary" @click="addProductToFav(getOneProd)">
                        Favoritar
                      </b-button>
                    </b-col>
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
    this.setOneProd(this.$route.params.id)
  },

  computed: {
    ...mapGetters({getOneProd: 'app/getOneProduct'})
  },

  methods: {
    ...mapActions({
      setOneProd: 'app/setOneProduct', 
      addProductToFav: 'app/addProductToFav',
      addProductToCart: 'app/addProductToCart'
    })
  }
  
}
</script>

<style lang="scss" scoped>


.btnFret {
  background-color: rgb(255, 255, 255) !important;
  color: rgba(114,124,162,1);
}


</style>
