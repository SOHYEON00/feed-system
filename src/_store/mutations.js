// state 자체를 변경하는 메소드
// statusSort, categoryList 변경

export const GET_FEED_LIST = "GET_FEED_LIST";

export default {
    [GET_FEED_LIST] (state, data) {
        //정렬기준에 맞춰 리스트 정렬
        // console.log(data);
        const newFeedList = state.FeedList.concat(data);
        newFeedList.sort((a,b) => (a.id > b.id) ? a - b: b- a);
        state.FeedList = newFeedList;

        console.log(newFeedList);
    }
}