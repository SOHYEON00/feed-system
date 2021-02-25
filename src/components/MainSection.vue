<template>
    <div>
        <Filterbar />
        <article class="feed-article" v-for="(list, id) in storeFeedList" :key="id">
            <Feed :id="id" :list="list" />
        </article>
    </div>
</template>

<script>
import Filterbar from './Filterbar';
import Feed from './Feed';


export default {
    name: 'MainSection',
    components: {
        Filterbar,
        Feed
    },
    data() {
        return {
            currentPage: 1
        }
    },
    computed: {
        // get state from store
        storeFeedList() {
            return this.$store.state.FeedList;
        }
        
    },
    mounted() {
        window.addEventListener("scroll", this.scrollOnBottom);
        this.getFeedList();
    },

    methods: {
        scrollOnBottom() {
            const currentScrollY = window.scrollY;
            if(
                currentScrollY + document.documentElement.clientHeight > 
                document.documentElement.scrollHeight - 10
            ){
                // do somthing when scroll on the end
                this.currentPage += 1;
                window.scrollTo({behavior: 'smooth', top: -300});

                const lastPage = 10;
                if(this.currentPage <= lastPage) {
                    this.getFeedList();
                }
            }
        },

        getFeedList() {
            const parameterObject = {
                'page': this.currentPage,
                'ord': 'asc',
                'category': [1,2,3],
                'limit': 10
            };
            this.$store.dispatch('getFeedList', parameterObject);
        }
        
    }


}
</script>

<style scoped>
    .feed-article {
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #E1E4E7;
        border-radius: 5px;
        opacity: 1;
        padding: 2rem;
        margin: 2rem 0;
        width: 45vw;
    }
</style>
