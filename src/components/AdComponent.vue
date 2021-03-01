<template>
  <article>
      <p>sponsored</p>
      <section>
         {{ad.id}}
      </section>
  </article>
</template>

<script>
export default {
    name: 'AdComponent',
  
    props: {
        id: Number,
        ad: Object
    },
    methods: {
        imgUrl: function(fileName) {
            return `https://cdn.comento.kr/assignment/${fileName}`;
        }
    }
}
</script>

<style>

</style>