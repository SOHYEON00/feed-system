<template>
  <section class="filterbar">
    <div class="button-container">
      <input type="button" value="asc" v-bind:class="{active: isActive , noActive: !isActive}" @click="onClickSorting" />
      <input type="button" value="desc" v-bind:class="{active: !isActive, noActive: isActive}" @click="onClickSorting"/>
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
      isActive: true,
    }
  },
  methods: {
    onClickSorting: function(e) {
      const {value} = e.target; 
      
      this.ordStatus = value; //change data(ordStatus) to value of clicked dom element
      this.$store.commit('CHANGE_ORD_STATUS', this.ordStatus); // mutate state of application(sortStatus)
      
      (value === 'asc') ? //선택된 정렬에 따라 클래스 활성화/비활성화
        this.isActive = true : this.isActive = false;
      
    },
  },
}
</script>

<style scoped lang="scss">
  /* 선택된 정렬상태 */
  .active { 
    color: green;
  }

  /* 선택되지 않은 정렬상태 */
  .noActive {
    color: red;
  }
</style>
