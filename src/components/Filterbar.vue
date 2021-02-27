<template>
  <section class="filterbar">
    <div class="button-container">

      <span v-bind:class="{active: isActive, noActive: !isActive}">
        <label for="asc">●</label>
        <input class="sortInput" type="button" id="asc" value="오름차순" @click="onClickSorting" />
      </span>

      <span v-bind:class="{active: !isActive, noActive: isActive}">
        <label for="desc">●</label>
        <input class="sortInput" type="button" id="desc" value="내림차순"  @click="onClickSorting"/>
      </span>
     </div>
    <button class="filterBtn" @click="toggleModalStatus">필터</button>
  </section>
</template>

<script>
import {TOGGLE_MODAL, CHANGE_ORD_STATUS} from '@/_store/mutations';

export default {
  name: 'Filterbar',
 
  data() {
    return {
      ordStatus: 'asc', 
      isActive: true,
    }
  },
  methods: {

    onClickSorting: function(e) {
      const {value} = e.target; 
      
      this.ordStatus = value; //change data(ordStatus) to value of clicked dom element
      this.$store.commit(CHANGE_ORD_STATUS, this.ordStatus); // mutate state of application(sortStatus)
      
      (value === 'asc') ? //선택된 정렬에 따라 클래스 활성화/비활성화
        this.isActive = true : this.isActive = false;
    },

    toggleModalStatus: function() {
      this.$store.commit(TOGGLE_MODAL, true);
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/filterbar.scss';

</style>
