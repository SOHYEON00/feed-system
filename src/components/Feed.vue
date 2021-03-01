<template>
    <article >
        <section class="feed-header">
            <span class="category">{{this.printCategoryName}}</span>
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

export default {
        name: 'Feed',

        data() {
            return {
                category_name:'',
            }
        },
        props: {
            id: Number,
            list: Object
        },
        computed: {
            storeAllCategory: function() {
                return this.$store.state.AllCategoryList;
            },

            printCategoryName: function() {
                const pickedCategory = this.storeAllCategory.filter((e) => e.id === this.list.category_id);
                return pickedCategory[0].name;
            }
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