// state 자체를 변경하는 메소드
// statusSort, categoryList 변경

export const GET_FEED_LIST = "GET_FEED_LIST";
export const CHANGE_ORD_STATUS = "CHANGE_ORD_STATUS";
export const TOGGLE_MODAL = "TOGGLE_MODAL"

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
    }
}