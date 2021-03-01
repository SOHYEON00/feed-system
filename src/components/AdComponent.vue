<template>
  <article class="ad-article">
      <p class="type">sponsored</p>
      <section class="ad-contents-container">
         <img :src="imgUrl(ad.img)" class="adImg"/>
         <div class="ad-contents-box">
             <p class="contents-body ad title">{{ad.title}}</p>
             <p class="contents-body ad contents">{{ad.contents}}</p>
         </div>
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

<style lang="scss">
.ad-article {
    .type {
        color: $no_active;
        font: normal normal normal 13px/25px SpoqaHanSans;
    }
    .ad-contents-container{
        display:flex;
        flex-direction: row;

        .adImg{
            height: 18vh;
            width: auto;
            margin-right: 2rem;
        }
        .ad-contents-box {
            width: 80%;
            .ad {
                white-space: normal;
                height: 4.5rem;
                line-height: 1.5rem;
                text-align: left;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
            .title {
                margin-bottom: 2rem;
            }
        }
    }
}



</style>