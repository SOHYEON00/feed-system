<template>
  <div id="app">
    <header>[2021-03-01] 오소현</header>
    <aside>
      <div>로그인</div>
    </aside>
    <main>
      <MainSection />
    </main>
   
  </div>
</template>

<script>
import MainSection from './components/MainSection.vue'

export default {
  name: 'App',
  components: {
    MainSection,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
