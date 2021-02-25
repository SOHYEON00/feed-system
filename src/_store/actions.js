import {LIST, HEADER} from '../api.js';
import axios from 'axios';
import {GET_FEED_LIST} from './mutations';

export default {
    getFeedList: function({commit}, parameter) {
        console.log(parameter.page);
        return axios.get(LIST, {
                params: parameter,
                HEADER
            })
            .then((response) => {
                commit(GET_FEED_LIST, response.data.data);
            })
            .catch((error) => { console.log(error); })
    }
}