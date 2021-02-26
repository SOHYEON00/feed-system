<template>
    <div>
        <Filterbar />
        <article class="feed-article" v-for="(list, id) in this.storeFeedList" :key="id">
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
            currentPage: 1,
        }
    },
    computed: {
        // get state from store
        storeFeedList: function () {
            return this.$store.state.FeedList;
        },
        storeStatusSort: function () {
            return this.$store.state.sortStatus;
        }
        
    },
    mounted() {
        window.addEventListener("scroll", this.scrollOnBottom);
        this.getFeedList();
    },

    methods: {
        scrollOnBottom() {
            const currentScrollY = window.scrollY;
            let isGetNewList = false; //window event가 한 번만 일어날 수 있도록 제어해주는 변수
            const lastPage = 10;

            if( //현재 스크롤 위치 계산
                currentScrollY + document.documentElement.clientHeight > 
                document.documentElement.scrollHeight - 10
            ){
                if(!isGetNewList && this.currentPage <= lastPage) { 
                    this.currentPage += 1;  // get list of new page 
                    this.getFeedList();
                
                    isGetNewList = true; //event가 연속해서 일어나지 않도록 제어
                }
            } 
        },

        getFeedList() {
            const parameterObject = {
                'page': this.currentPage,
                'ord': this.storeStatusSort,
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
