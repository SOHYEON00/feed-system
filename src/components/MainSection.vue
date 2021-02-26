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
            requestNewList: false,
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
            
            const lastPage = 10;
            const scrollPosition = window.scrollY + document.documentElement.clientHeight
      
            if( 
                scrollPosition > document.documentElement.scrollHeight - 20  //현재 스크롤 위치 계산
                && this.currentPage <= lastPage
            ) {  
                if(this.requestNewList === false){ //스크롤 이벤트 제어하기 위한 조건문

                    this.currentPage ++;  // get list of new page 
                    this.getFeedList(); //change state using actions
                    this.requestNewList = true; 
                }
                
            } 

            //이벤트 한번만 발생시키기 위한 조건문
            if(scrollPosition < document.documentElement.scrollHeight - 20) { 
                this.requestNewList = false; //다시 스크롤 내릴 때, api요청하기 위해 false로 바꿔줌.
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
