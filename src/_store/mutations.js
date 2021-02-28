// state 자체를 변경하는 메소드
// statusSort, categoryList 변경
import {GET_FEED_LIST, CHANGE_ORD_STATUS, TOGGLE_MODAL, GET_CATEGORY_LIST} from './types';

export default {
    [GET_FEED_LIST] (state, data) {
        const newFeedList = state.FeedList.concat(data); //기존 state에 이어 붙이기
        state.FeedList = newFeedList; 
    },

    [CHANGE_ORD_STATUS] (state, data){
        state.SortStatus = data;
    },

    [TOGGLE_MODAL] (state, boolean) {
        state.ModalStatus = boolean;
    },
    [GET_CATEGORY_LIST](state, data) {
        state.CategoryList = data;
    }
}