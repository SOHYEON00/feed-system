<template>
  <main class="detail-main">
    <section class="feed-body-container">
        <p class="title">{{this.feedObject.title}}</p>
        <p class="contents">{{this.feedObject.contents}}</p>
        <p class="created">created_at({{sliceText(this.feedObject.created_at)}})</p>
    </section>
    <section class="reply-container">
        <p class="contents">답변 <span class="emphasize">{{(this.replyList).length}}</span></p>
        <article v-for="reply in this.replyList" :key="reply.id">
            <p class="user_name">{{reply.user.name}}</p>
            <p class="contents">{{reply.contents}}</p>
            <p class="created">created_at({{sliceText(reply.created_at)}})</p>
        </article>
    </section>
  </main>
</template>

<script>
import {VIEW, HEADER} from '../api.js';
import axios from 'axios';

export default {
    
    name: 'FeedDetail',
    props: {
        id: Number,
    },
    data() {
        return {
            feedObject: {}, //api/view 로 받아온 feed object
            replyList: [], //reply만 담을 object array
        }
    },
    mounted() {
        this.getViewDetail(this.id);
    },
    methods: {
        getViewDetail: function(id) {
            return axios.get(VIEW, {params: {id: id+1}, HEADER})
            .then((response) => {
                this.feedObject = response.data.data;
                this.replyList = response.data.data.reply;
            })
            .catch((error) => {console.log(error); })
        },
        
        //date slice method 'yyyy-mm-dd'
        sliceText: (text) => {
            
            const sliced = JSON.stringify(text).slice(1,11);
            return sliced;
        },

    }

}
</script>

<style lang="scss">
@import '../assets/feeddetail.scss';
</style>