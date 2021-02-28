<template>
  <div class="modal">
    <section class="overlay"></section>
    <div class="modal-card">
      <section class="closeModalBtn">
        <img src="../../public/img/그룹 560.svg"  @click="closeModal" />
        <!-- <input type="button" value="X" @click="closeModal"/> -->
      </section>
      <form >
        <h2>필터</h2>
        <label class="categoryListContainer" v-for="(category) in this.categoryListDOM" :key="category.id" >
          <input type="checkbox" name="category.id" id="category.id" checked=true/> 
          {{category.name}}
        </label>
        <input type="submit" value="저장하기" />
      </form>
    </div>
    
  </div>
</template>

<script>
import {TOGGLE_MODAL} from '@/_store/types';

export default {
  name: 'Modal',
  data() {
    return {
      checkedValues: '',
    }
  },
  computed: {

    categoryListDOM: function () {
      return this.$store.state.CategoryList;
    }

  },

  methods: {
    closeModal: function() {
      this.$store.commit(TOGGLE_MODAL, false);
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/modal.scss';
</style>