// state 자체를 변경하는 메소드
// statusSort, categoryList 변경

export const GET_FEED_LIST = "GET_FEED_LIST";
export const CHANGE_ORD_STATUS = "CHANGE_ORD_STATUS";

export default {
    [GET_FEED_LIST] (state, data) {
    
        const newFeedList = state.FeedList.concat(data); //기존 state에 이어 붙이기

        // if(state.sortStatus === 'asc') {
        //     newFeedList.sort((a,b) => (a.id > b.id) ? a - b: b- a);
        // }
        // else if(state.sortStatus === 'desc'){
        //     newFeedList.sort((a,b) => (a.id > b.id) ? b - a : a - b);
        // }
        
        state.FeedList = newFeedList; 
    },
    [CHANGE_ORD_STATUS] (state, data){
        state.sortStatus = data;
    }
}