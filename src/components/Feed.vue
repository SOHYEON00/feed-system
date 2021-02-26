<template>
    <article >

        <section class="feed-header">
            <CategoryName :category_id="list.category_id" />
            <span class="feed-id">post num: {{list.id}}</span>
        </section>

        <section class="feed-contents">
            <p class="feed-contents-head">
                <span class="user-id feed-contents-head">{{list.user_id}}</span>
                <span class="created feed-contents-head">created_at({{sliceText(list.created_at)}})</span>  
            </p>
            <p class="title contents-body">{{list.title}}</p>
            <p class="contents contents-body">{{list.contents}}</p> 
        </section>

    </article>
    
</template>

<script>
import CategoryName from './CategoryName';

export default {

        name: 'Feed',

        components: {
            CategoryName
        },

        props: {
            id: Number,
            list: Object
        },
         methods: {
            
            //date slice method 'yyyy-mm-dd'
            sliceText: (text) => {
                return text.slice(0,10);
            },
        }
}
</script>

<style lang="scss">
   @import '@/assets/feed.scss';
</style>