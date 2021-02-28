<template>
  <div class="modal">
    <section class="overlay"></section>
    <container class="modal-card">
      <input type="button" value="X" @click="closeModal"/>
      <form >
        <h2>필터</h2>
        <section class="categoryListContainer" >
        </section>
        <input type="submit" value="저장" />
      </form>
    </container>
    
  </div>
</template>

<script>
import {TOGGLE_MODAL} from '@/_store/types';

export default {
  name: 'Modal',

  methods: {
    closeModal: function() {
      this.$store.commit(TOGGLE_MODAL, false);
    }
  }
}
</script>

<style>

</style>