<template>
    <div>
        <Filterbar />
        <article class="feed-article" v-for="(list, id) in lists" :key="id">
           <section class="feed-header">
               <span><CategoryName class="category" :category_id="list.category_id" /></span>
               
               <span class="feed-id">{{id}}</span>
            </section>
            <section class="feed-contents">
                <p class="feed-contents-head">
                    <span class="user-id feed-contents-head">{{list.user_id}}</span>
                    <span class="created feed-contents-head">{{list.created_at}}</span>  
                </p>
                <p class="title">{{list.title}}</p>
                <!-- <p>{{list.contents}}</p> -->
            </section>
        </article>
    </div>
</template>

<script>

import Filterbar from './Filterbar';
import CategoryName from './CategoryName';
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {HEADER} from '../api.js';

Vue.use(VueAxios, axios);

export default {
    
    name: 'MainSection',
    components: {
        Filterbar,
        CategoryName
    },
    data() {
        return {
            lists: undefined
        }
    },
    mounted() {
        // const data = {page: 1, ord: 'asc', category: [1], limit: 5}
        Vue.axios.get(`https://problem.comento.kr/api/list`, {
            params: {
                'page': 1,
                'ord': 'asc',
                'category': [1,2,3],
                'limit': 10
            },
            HEADER
        })
        .then((response) => {
            if(response.status === 200){
                console.log(response.data.data);
                const realData = response.data.data;
                this.lists = realData;
            }
            
        })
        .catch((error) => {
            console.log(error);
            }
        )
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
    }

    .feed-header {
        display: flex;
        justify-content: space-between;
        text-align: left;
        font: normal normal normal 13px/25px SpoqaHanSans;
        letter-spacing: 0px;
        color: #7E848A;
        opacity: 1;
        border-bottom: 1px solid #E1E4E7;
        padding-bottom: 0.5rem;
    }

    .feed-contents {
        display: block;
        text-align: left;
        font: normal normal normal 13px/25px SpoqaHanSans;
        letter-spacing: 0px;
        opacity: 1;
    }

    .feed-contents-head {
        padding-right: 0.5rem;
    }
    .user-id {
        color: var(--unnamed-color-00c854);
    }

    .created {
        color: var(--unnamed-color-495057);
    }

    .title {
        font: normal normal bold 18px/28px SpoqaHanSans;
        color: #282C30;
        text-overflow: ellipsis;
        height: 3vh;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
    }
</style>
