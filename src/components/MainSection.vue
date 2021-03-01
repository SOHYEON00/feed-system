<template>
    <div class="mainSection">
        <Filterbar />
        
        <div class="feedContainer">
            <div class="feed-article" v-for="(list, id) in this.storeFeedList" :key="id">
                <Feed :id="id" :list="list" />
            </div>
        </div>
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
    data() {
        return {
            currentPage: 1,
            isRequestNewList: false,
        }
    },
    computed: {
        // get state from store
        storeFeedList: function () {
            let listFromStore = this.$store.state.FeedList;
            const ordFromStore = this.storeStatusSort;

            //store.state는 변경하지 않고, 출력list만 정렬
            if(ordFromStore === 'asc') {
                listFromStore.sort((a,b) =>{return a.id-b.id});
            } else if(ordFromStore === 'desc'){
                listFromStore.sort((a,b) => {return b.id-a.id});
            }
            return listFromStore; 
        },
        storeStatusSort: function () {
            return this.$store.state.SortStatus;
        },
        
        storeAllCategoryList: function () {
            return this.$store.state.AllCategoryList;
        }
    },

    mounted() {
        window.addEventListener("scroll", this.scrollOnBottom);
        this.getAllCategoryList(); //get api요청
    },

    methods: {
        scrollOnBottom() { //스크롤이 하단에 닿을 때, event handler
            
            const lastPage = 10;
            const scrollPosition = window.scrollY + document.documentElement.clientHeight;
      
            if( 
                scrollPosition > document.documentElement.scrollHeight - 20  //현재 스크롤 위치 계산
                && this.currentPage <= lastPage
            ) {  
                if(this.isRequestNewList === false){ //스크롤 이벤트 제어하기 위한 조건문

                    this.currentPage++;  // get list of new page 
                    this.getFeedList(); //change state using actions
                    this.isRequestNewList = true; 
                }
            } 

            if(scrollPosition < document.documentElement.scrollHeight - 20) { 
                this.isRequestNewList = false; //다시 스크롤 내릴 때, api요청하기 위해 false로 바꿔줌.
            }
        },

        getFeedList() { //request dispatch to get feed list

            let categoryIdList;

            //category List initialize, if dispatch(api/list) before get category list
            if(this.storeAllCategoryList.length === 0) {
                categoryIdList = [1,2,3];
            } else {
                categoryIdList = this.storeAllCategoryList.map(e => e.id);
            }

            const parameterObject = {
                'page': this.currentPage,
                'ord': this.storeStatusSort,
                'category': categoryIdList,
                'limit': 10
            };
            this.$store.dispatch('getFeedList', parameterObject);
            this.$store.dispatch('setSelectedCategoryList', categoryIdList);
        },
        //category list initialize
        getAllCategoryList() {
            this.$store.dispatch('getAllCategoryList');
            this.getFeedList();
        }
        
    }
}
</script>