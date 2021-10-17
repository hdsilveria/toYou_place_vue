<template>
  <div>
    <div>
    <b-row
      align-h="center"
      class="main-area"
    >
      <b-col
        class="main-colum"
        md="9"
      >
      <b-row class="mt-4" align-h="center">
            <b-col md="4" class="item_visu p-4" v-for="item in items" :key="item.id">
              <b-row>
                <b-col md="auto" class="p-0">
                  <div>
                    <b-img class="img_prod" :src="item.photo" alt="imagem do produto" />
                  </div>
                </b-col>
                <b-col md="6" class="text-center">
                  <b-row>
                    {{item.item}}
                  </b-row>
                  <b-row>
                    <strong>
                      R$ {{item.price}}
                    </strong>
                  </b-row>
                  <b-row>
                    <small class="text-nowrap">
                      ou em até 12x de {{((item.price /12).toFixed(2).replace('.', ',')) }}
                    </small>
                  </b-row>
                  <b-row class="mt-2">
                    <b-button variant="primary">
                      <span>Comprar</span>
                    </b-button>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
      </b-row>
      </b-col>
    </b-row>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  data(){
    return {
      items: []
    }
  },

  created(){
    this.setProd().then(() => {
      this.items = this.getProd
    })
  },

  computed: {
    ...mapGetters({getProd: 'app/getProducts'})
  },

  methods: {
    ...mapActions({setProd: 'app/setProducts'})
  }
}

</script>

<style lang="scss" scoped>

.main-area {
  height: 85vh;
}

.item_visu {
  // border: 2px solid red;
}

.img_prod {
  width: 120px;
  height: 120px;
}

</style>
