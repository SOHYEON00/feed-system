<template>
    <main class="mainpage-main">
        <aside>
            <div class="login">로그인</div>
        </aside>
        <section class="mainSection">
            <Filterbar />
            <div class="feedContainer">
                <article class="feed-article" v-for="(list, id) in this.storeFeedList" :key="id">
                    <router-link :to="`/${id}`" v-if='list.type === "feed"'>
                        <Feed :id="id" :list="list"/>
                    </router-link>
                    <AdComponent :ad="list" :id="id" v-else/>
                </article>
            </div>
        </section>
    </main>
</template>

<script>
import Filterbar from './Filterbar';
import Feed from './Feed';
import AdComponent from './AdComponent';

export default {
    name: 'MainSection',
    components: {
        Filterbar,
        Feed,
        AdComponent,
    },
    data() {
        return {
            currentPage: 1,
            isRequestNewList: false,
            categoryIdList: [],
        }
    },
    computed: {
        originalFeedList: function () {
            return this.$store.state.FeedList;
        },
        // get state from store
        storeFeedList: function () {
            let temp =  this.originalFeedList.concat();
            let listFromStore;
            const ordFromStore = this.storeStatusSort;
            const selectedCateogoryList = this.storeSelectedCategoryList;

            if(temp && ordFromStore && selectedCateogoryList){//store.state는 변경하지 않고, 출력list만 정렬
                if(ordFromStore === 'asc') {
                    temp.sort((a,b) =>{return a.id-b.id});
                } else if(ordFromStore === 'desc'){
                    temp.sort((a,b) => {return b.id-a.id});
                }
                //category list에서 id만 반환된 리스트
                const idList = selectedCateogoryList.map(e => e.id);
                listFromStore = temp.filter(e => idList.includes(e.category_id)); 
                
                //insert ads
                const indexOfAds = this.pushAd(4);

                for(let i in indexOfAds){
                    listFromStore.splice(indexOfAds[i], 0, this.storeAdList[i]);
                }
            }
            return listFromStore;

        },

        storeStatusSort: function () {
            return this.$store.state.SortStatus;
        },
        
        storeAllCategoryList: function () {
            return this.$store.state.AllCategoryList;
        },

        storeSelectedCategoryList: function() {
            let selected = this.$store.state.SelectedCategoryList;
            
            if(selected.length === 0) { //선택된 카테고리가 없는 경우
                selected = this.storeAllCategoryList;
                this.$store.commit('SET_SELECTED_CATEGORY', selected);
            } 
            return selected;
        },

        storeAdList: function() {
            return this.$store.state.AdList;
        }
    },

    mounted() {
        window.addEventListener("scroll", this.scrollOnBottom);
        this.getAllCategoryList(); //get api요청
        this.getFeedList();

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
                    this.currentPage++;
                    //change state using actions
                    const parameterObject = {
                        'page': this.currentPage,
                        'ord': this.storeStatusSort,
                        'category': this.categoryIdList,
                        'limit': 10
                    };

                    this.$store.dispatch('getFeedList', parameterObject);
                    this.getAdList();
                    this.isRequestNewList = true; 
                }
            } 

            if(scrollPosition < document.documentElement.scrollHeight - 20) { 
                this.isRequestNewList = false; //다시 스크롤 내릴 때, api요청하기 위해 false로 바꿔줌.
            }
        },

        getFeedList() { //request dispatch to get feed list

            // let initialCategoryList
            if(this.storeAllCategoryList.length === 0) {
                this.categoryIdList = [1,2,3];
            } else {
                this.categoryIdList = this.storeAllCategoryList.map(e => e.id);
            }
            //category List initialize, if dispatch(api/list) before get category list
            if(this.originalFeedList.length === 0) {
                const parameterObject = {
                    'page': this.currentPage,
                    'ord': this.storeStatusSort,
                    'category': this.categoryIdList,
                    'limit': 10
                };
                this.$store.dispatch('getFeedList', parameterObject);
            } 
            
        },
        //category list initialize
        getAllCategoryList() {
            this.$store.dispatch('getAllCategoryList');
            this.getAdList();
        },
        getAdList() {
            const adParameter = {
                'page': this.currentPage,
                'limit': 3  
            }
            this.$store.dispatch('getAdList', adParameter);
        },

        pushAd(index) {
            let indexOfAds = [];

            for(let i=1; i<=this.currentPage * 3; i++){
                indexOfAds.push((i*index) - 1); //index번째에 광고를 삽입하기 위해 -1
            }
            return indexOfAds;
        }
        
    }
}
</script>
