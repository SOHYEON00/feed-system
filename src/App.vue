<template>
  <div id="app">
    <Modal v-if="this.storeModalStatus" @close-modal="this.storeModalStatus=false" />
    <div>
      <header>[2021-03-01] 오소현</header>
        <main>
          <aside>
          <div class="login">로그인</div>
          </aside>
          <router-view></router-view>
        </main>
      </div>
  </div>
</template>

<script>
import {store} from './_store/store';
import Modal from './components/Modal';


export default {
  name: 'App',
  store,
  components: {
    Modal
  },
  computed: {
    storeModalStatus: function() {
            return this.$store.state.ModalStatus;
    },
  }
}
</script>

<style lang="scss" >
@import '@/assets/app.scss';
</style>
