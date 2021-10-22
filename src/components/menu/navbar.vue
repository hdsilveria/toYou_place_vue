<template>
  <div>
    <b-row
      class="menuNav w-10 text-center fixed-top"
      align-h="center"
    >
    <b-col align-self="center" md="1" class="text-center">
      <div id="title-site">
        <span class="text-nowrap">To You Place&copy;</span>
      </div>
    </b-col>
      <b-col
      class="text-center p-0"
        md="3"
        align-self="center"
      >
        <span>Ofertas de Hoje</span>
        <b-dropdown
          id="dropdown-1"
          text="Categorias"
          class="m-md-2 dropdown"
        >
        </b-dropdown>
        
      </b-col>
      <b-col
        md="6"
        align-self="center"
        class="p-0"
      >
        <v-select
          v-model="item"
          :options="items"
          placeholder="Pesquise seu item favorito!"
          :dropdown-should-open="dropdownShouldOpen">

          <template #open-indicator="{ attributes }">
            <b-img src="../../assets/img/lupa.png" style="width: 20px;" v-bind="attributes" />
          </template>

            <template v-slot:no-options="{ search, searching }">
              <template v-if="searching">
                Não há resultados para {{ search }}.
              </template>
            </template>

            <template v-slot:option="option">
              <b-row @click="pushToItem(option._id)">
                <b-col md="auto">
                  <b-img style="width: 55px; height: 55px;" :src="option.photo[0]" />
                </b-col>
                <b-col>
                  <span>{{option.label}}</span>
                </b-col>
              </b-row>
            </template>
        </v-select>
        <!-- <b-form-input placeholder="Pesquise seu item desejado" /> -->
      </b-col>
      <b-col
        md="2"
        align-self="center"
        class="d-flex"
      >
      <b-dropdown no-caret class="text-center">
        <template #button-content>
          <div class="countCart" v-if="getCart.length > 0">
            {{getCart.length}}
          </div>
          <b-img style="width: 30px;" src="../../assets/img/cart.png" />
        </template>
        <span v-if="getCart == ''" style="margin-left: 30px;">
          Não há items
        </span>
        <b-row v-for="prod in getCart" :key="prod.id">
          <b-col class="d-flex">
            <div class="circle"/>&nbsp;
          <span>
            {{prod.item.length > 17 ? prod.item.substr(0,15) + '...' : prod.item }}
          </span>
          </b-col>
        </b-row>
        <b-dropdown-divider />
        &nbsp;&nbsp;&nbsp;<span style="cursor: pointer;" @click="$router.push({name:'myCart'})">Ver meu Carrinho</span>
      </b-dropdown>

      <b-dropdown no-caret menu-class="w-100">
        <template #button-content>
          <div class="countCart" v-if="getFav.length > 0">
            {{getFav.length}}
          </div>
          <b-img style="width: 30px;" src="../../assets/img/favorito.png" />
        </template>
        <span v-if="getFav == ''" style="margin-left: 30px;">
          Não há items
        </span>
        <b-row v-for="fav in getFav" :key="fav.id">
          <b-col class="d-flex">
             <div class="circle"/>&nbsp;
            <span>
             {{fav.item.length > 17 ? fav.item.substr(0,16) + '...' : fav.item }}
            </span>
          </b-col>
        </b-row>
        <b-dropdown-divider />
        &nbsp;&nbsp; &nbsp;<span>Ver meus Favoritos</span>
      </b-dropdown>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import {  mapGetters } from 'vuex'

export default {
  data() {
    return {
      item: null,
      items: []
    }
  },

  mounted(){
    this.getProd.map(arr => {
      this.items.push({
        label: arr.item,
        code: arr.item,
        photo: arr.photo,
        _id: arr._id
      })
    })
  },

  computed: {
    ...mapGetters({
      getCart: 'app/getCart',
      getFav: 'app/getFav',
      getProd: 'app/getProducts', 
      })
  },

  methods: {
    pushToItem(val){
      window.location.assign(`/produto/${val}`) 
    },

    dropdownShouldOpen(VueSelect) {
      if (this.item !== null) {
        return VueSelect.open
      }

      return VueSelect.search.length !== 0 && VueSelect.open
    },
  },
}

</script>


<style scoped lang="scss">

.menuNav {
  height: 70px;
}

.countCart {
  position: absolute;
  background: red;
  border-radius: 10px;
  width: 23px;
  top: -10%;
  left: -5%;
}

#title-site {
  border: 2px solid white;
  border-radius: 10px;
  width: 130px;
  font-size: 13pt;
}

</style>