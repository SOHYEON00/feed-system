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
            v-for="(category) in this.storeSelectedList" 
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
          {{checkedCategory}}
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
   this.initialSelectedList();
   this.checkAll();
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

    initialSelectedList: function() {
      //기본값 : 모두 선택
      const tempList = this.storeAllCategoryList.map(e => ({ ...e, checked: true}));
      this.$store.dispatch('setSelectedCategoryList', tempList); 
    },

    onSubmitHandler: function(e) {
      e.preventDefault();
      console.log(this.checkedCategory);
    },

    checkAll: function() {
      const tempList = this.storeSelectedList;
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