<template>
    <div>
        <Filterbar />
        <article v-for="(list, id) in lists" :key="id">
           <section>
               <span>{{list.category_id}}</span>
               <span>{{id}}</span>
            </section>
            <section>
                <span>{{list.user_id}}</span>
                <span>{{list.created_at}}</span>
            </section>
            <p>{{list.title}}</p>
            <p>{{list.contents}}</p>
        </article>
    </div>
</template>

<script>

import Filterbar from './Filterbar';
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {HEADER} from '../api.js';

Vue.use(VueAxios, axios);

export default {
    
    name: 'MainSection',
    components: {
        Filterbar,
        
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
                console.log(typeof(realData));
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

</style>
