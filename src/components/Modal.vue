<template>
  <div class="modal">
    <section class="overlay"></section>
    <div class="modal-card">
      <section class="closeModalBtn">
        <img src="../../public/img/그룹 560.svg" @click="closeModal" />
      </section>
      <form @submit="onSubmitHandler">
        <h2>필터</h2>
        <div >
          <label class="categoryListContainer" 
            v-for="(category) in this.storeAllCategoryList" 
            :for="category.id" 
            :key="category.id" >
            <input 
              type="checkbox" 
              :id="category.id" 
              :value="category"
              v-model="checkedCategory"
            /> 
            {{category.name}}
          </label>
        </div>
        <input type="submit" value="저장하기" />
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',

  data() {
    return {
      checkedCategory: [],
    }
  },

  mounted() {
    this.initialCheck();
  },
  computed: {
    storeSelectedList: function () {
      return this.$store.state.SelectedCategoryList;
    },

    storeAllCategoryList: function() {
      return this.$store.state.AllCategoryList;
    }
  },

  methods: {
    closeModal: function() { //close modal function
      this.$store.commit('TOGGLE_MODAL', false);
    },

    onSubmitHandler: function(e) {  
      e.preventDefault();
      this.$store.commit('SET_SELECTED_CATEGORY', this.checkedCategory); 
      this.closeModal();
    },

    // 모든 체크박스 기본세팅: 모두 선택
    initialCheck: function() {

      let selected = this.storeSelectedList.concat();
      console.log(selected);
      for(let i in selected){
        if(selected[i].checked) {
          this.checkedCategory.push(selected[i]);
        }
      }
    },


  }
}
</script>

<style lang="scss">
@import '@/assets/modal.scss';
</style>