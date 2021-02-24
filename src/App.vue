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

  --unnamed-color-ffffff: #FFFFFF;
  --unnamed-color-00c854: #00C854;
  --unnamed-color-495057: #495057;
  --unnamed-color-212529: #212529;
  --unnamed-color-f4f5f7: #F4F5F7;
  --unnamed-color-dee2e6: #DEE2E6;
  --unnamed-color-ff000033: #FF0000;
  --unnamed-color-fa5252: #FA5252;
  --unnamed-color-9ea5ab: #9EA5AB;
}

header {
    box-shadow: 0px 1px 5px #00000012;
    opacity: 1;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    height: 5rem;
    display: flex;
    align-items: center;
    padding: 0 24rem;
}

main {
    display: flex;
    flex-direction: row;
}

aside div{
    background: var(--unnamed-color-00c854) 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    width: 13rem;
    padding: 1rem;
}

.login {
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font: normal normal bold 22px/25px SpoqaHanSans;
  text-align: center;
}
</style>
