<template>
  <div>
    <b-row
      class="menuNav w-10 text-center fixed-top"
      align-h="center"
    >
      <b-col
        md="3"
        align-self="center"
      >
        <span>Ofertas de Hoje</span>
        <b-dropdown
          id="dropdown-1"
          text="Categorias"
          class="m-md-2 dropdown"
        >
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
        
      </b-col>
      <b-col
        md="6"
        align-self="center"
        class="p-0"
      >
        <b-form-input placeholder="Pesquise seu item desejado" />
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
        <b-row v-for="prod in getCart" :key="prod.id" class="text-center">
          <b-col>
          <span>
            {{prod.item.substr(0,17)}}...
          </span>
          </b-col>
        </b-row>
        <b-dropdown-divider />
        &nbsp;&nbsp;&nbsp;<span>Ver meu Carrinho</span>
      </b-dropdown>

      <b-dropdown no-caret menu-class="w-200">
        <template #button-content>
          <div class="countCart" v-if="getFav.length > 0">
            {{getFav.length}}
          </div>
          <b-img style="width: 30px;" src="../../assets/img/favorito.png" />
        </template>
        <b-row v-for="fav in getFav" :key="fav.id" class="text-center">
          <b-col>
          <span>
            {{fav.item.substr(0,17) ? fav.item.substr(0,17) : 'Não há produtos'}}...
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
  computed: {
    ...mapGetters({
      getCart: 'app/getCart',
      getFav: 'app/getFav'
      })
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

</style>