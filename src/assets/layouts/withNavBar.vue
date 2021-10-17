<template>
  <div>
    <navbar />
    <router-view class="mt-5" />
  </div>
</template>

<script>
import navbar from '../../components/menu/navbar.vue'

export default {
  components: {
    navbar
  }
}
</script>
