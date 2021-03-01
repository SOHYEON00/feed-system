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
            :for="category.name" 
            :key="category.id" >
            <input 
              type="checkbox" 
              :name="checkedCategory"
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
    closeModal: function() {
      this.$store.commit('TOGGLE_MODAL', false);
    },

    onSubmitHandler: function(e) {  
      e.preventDefault();
      this.$store.commit('SET_SELECTED_CATEGORY', this.checkedCategory); 
    },

    // 모든 체크박스 기본세팅: 모두 선택
    initialCheck: function() {
      const tempList = this.storeSelectedList.concat();
      for(let i in tempList) {
        if (tempList[i].checked) {
          this.checkedCategory.push(tempList[i]);
        } 
      }
    }

  }
}
</script>

<style lang="scss">
@import '@/assets/modal.scss';
</style>