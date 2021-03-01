// state 자체를 변경하는 메소드
// statusSort, categoryList 변경
export const GET_ALL_CATEGORY_LIST = "GET_CATEGORY_LIST";
export const GET_FEED_LIST = "GET_FEED_LIST";

export const CHANGE_ORD_STATUS = "CHANGE_ORD_STATUS";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";


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
    [GET_ALL_CATEGORY_LIST](state, data) {
        state.AllCategoryList = data;
    },
    [SET_SELECTED_CATEGORY](state, list) {
        state.SelectedCategoryList = list;
    }
}