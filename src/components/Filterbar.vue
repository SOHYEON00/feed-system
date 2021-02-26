<template>
  <section class="filterbar">
    <div class="button-container">
      {{this.ordStatus}}
      <input type="button" value="asc"  @click="onClickSorting" />
      <input type="button" value="desc" @click="onClickSorting"/>
    </div>
    
    <Modal v-if="isOpenModal" @close-modal="isOpenModal=false" />
    <button @click="isOpenModal=true">필터</button>

  </section>
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
      ordStatus: 'asc', 
      isOpenModal: false,
    }
  },
  methods: {
    onClickSorting: function(e) {
      const {value} = e.target; 
      
      this.ordStatus = value; //change data(ordStatus) to value of clicked dom element
      this.$store.commit('CHANGE_ORD_STATUS', this.ordStatus); // mutate state of application(sortStatus)
    },
  },
}
</script>

<style scoped>

</style>
