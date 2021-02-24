<template>
  <div class="filterbar">
    <div class="button-container">
      <input type="button" value="오름차순" id="asce" />
      <input type="button" value="내림차순" id="desc" />
    </div>
    
    
    <Modal v-if="isOpenModal" @close-modal="isOpenModal=false" />
    <button @click="isOpenModal=true">필터</button>
  </div>
</template>

<script>
import Modal from "./Modal";

export default {
  name: 'Filterbar',
  components: {
    Modal,
  },
  data() {
    return {
      isOpenModal: false,
    }
  }
}
</script>

<style scoped>

</style>
