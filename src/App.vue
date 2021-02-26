<template>
  <div id="app">
    <header>[2021-03-01] 오소현</header>
      <main>
        <aside>
        <div class="login">로그인</div>
        </aside>
        <MainSection />
      </main>
  </div>
</template>

<script>
import MainSection from './components/MainSection.vue';
import {store} from './_store/store';


export default {
  name: 'App',
  store,
  components: {
    MainSection,
  }
}
</script>

<style lang="scss" >
@import '@/assets/app.scss';
</style>
