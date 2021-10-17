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
          <b-dropdown-divider />
          <b-dropdown-item active>
            Active action
          </b-dropdown-item>
          <b-dropdown-item disabled>
            Disabled action
          </b-dropdown-item>
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
        md="3"
        align-self="center"
      >
      <b-dropdown no-caret>
        <template #button-content>
          <b-img style="width: 30px;" src="../../assets/img/cart.png"></b-img>
        </template>
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
      </b-dropdown>
      </b-col>
    </b-row>
  </div>
</template>

<script>

// import cart from '../../assets/icons/cart.vue'

// export default {
//   components: {
//     cart
//   },
// }
</script>


<style scoped lang="scss">

.menuNav {
  height: 70px;
  // position: fixed;
  // width: 100%;
  // z-index: 99;
}

</style>