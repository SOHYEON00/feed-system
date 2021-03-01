import {LIST, CATEGORY, ADS, HEADER} from '../api.js';
import axios from 'axios';
import {GET_FEED_LIST, GET_ALL_CATEGORY_LIST, SET_SELECTED_CATEGORY, SET_ADS_LIST} from './mutations';

export default {
    getFeedList: function({commit}, parameter) {
        return axios.get(LIST, {
                params: parameter,
                HEADER
            })
            .then((response) => {
                if(response.status === 200){
                    commit(GET_FEED_LIST, response.data.data);
                }
            })
            .catch((error) => { console.log(error); })
    },

    //get all category list
    getAllCategoryList: function({commit}) {
        return axios.get(CATEGORY, {HEADER})
            .then((response) => {
                if(response.status === 200){
                    const addChecked = response.data.category.map(e => ({ ...e, checked: true}))
                    commit(GET_ALL_CATEGORY_LIST, addChecked);
                }
            })
            .catch((error) => {console.log(error); })
    },

    setSelectedCategoryList: function({commit}, list) {
        return commit(SET_SELECTED_CATEGORY, list);
    },

    getAdList: function({commit}, parameter) {
        return axios.get(ADS, {params: parameter, HEADER})
            
            .then((response) => {
                if(response.status === 200){
                    console.log(response.data.data);
                    commit(SET_ADS_LIST, response.data.data);
                }
            })
            .catch((error) => {console.log(error)})
    }

// 3,7,11,15,19/,23,27,31,35,39,/43,47,51,54,
}