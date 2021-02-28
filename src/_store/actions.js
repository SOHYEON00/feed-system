import {LIST, CATEGORY, HEADER} from '../api.js';
import axios from 'axios';
import {GET_FEED_LIST, GET_CATEGORY_LIST} from './types';

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

    getCategoryList: function({commit}) {
        return axios.get(CATEGORY, {HEADER})
            .then((response) => {
                commit(GET_CATEGORY_LIST, response.data.category);
            })
            .catch((error) => {console.log(error); })
    }

}