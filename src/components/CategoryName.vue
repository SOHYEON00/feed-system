<template>
  <div>{{this.category_name}}</div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {CATEGORY, HEADER} from '../api.js';

Vue.use(VueAxios, axios);

const getCategoryName = (list, id) => {
    let pickedCategory = list;
    pickedCategory = pickedCategory.filter((e) => e.id === id);

    return pickedCategory[0];
} 

export default {
    name: "CategoryName",
    props: {
        category_id: Number
    },
    data() {
        return {
            categoryList: undefined,
            category_name: undefined,
        }
    },
    mounted() {
        Vue.axios.get(CATEGORY, HEADER)
            .then((response) => {
                // console.log(response);
                if(response.status === 200) {
                    this.categoryList = response.data.category;
                    this.category_name = getCategoryName(this.categoryList, this.category_id).name;
                
                   
                }
               
            })
            .catch((error) => {console.log(error)})
    }
}

</script>

<style>

</style>