<template>
  <div>
      <Filterbar />
    
  </div>
</template>

<script>
import Filterbar from './Filterbar';
import Feed from './Feed';

export default {
  name: 'MainSection',
  components: {
      Filterbar,
      Feed,
  },

}
</script>

<style scoped>

</style>
