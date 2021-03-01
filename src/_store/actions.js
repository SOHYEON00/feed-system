import {LIST, CATEGORY, HEADER} from '../api.js';
import axios from 'axios';
import {GET_FEED_LIST, GET_ALL_CATEGORY_LIST, SET_SELECTED_CATEGORY} from './mutations';

export default {
    getFeedList: function({commit}, parameter) {
        console.log(parameter);
        return axios.get(LIST, {
                params: parameter,
                HEADER
            })
            .then((response) => {
                commit(GET_FEED_LIST, response.data.data);
            })
            .catch((error) => { console.log(error); })
    },

    //get all category list
    getAllCategoryList: function({commit}) {
        return axios.get(CATEGORY, {HEADER})
            .then((response) => {
                const addChecked = response.data.category.map(e => ({ ...e, checked: true}))
                commit(GET_ALL_CATEGORY_LIST, addChecked);
            })
            .catch((error) => {console.log(error); })
    },

    setSelectedCategoryList: function({commit}, list) {
        return commit(SET_SELECTED_CATEGORY, list);
    }

}