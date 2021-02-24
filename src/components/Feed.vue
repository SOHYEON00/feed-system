<template>
    <section>
        <section class="feed-header">
               <CategoryName :category_id="list.category_id" />
               <span class="feed-id">{{id}}</span>
            </section>
            <section class="feed-contents">
                <p class="feed-contents-head">
                    <span class="user-id feed-contents-head">{{list.user_id}}</span>
                    <span class="created feed-contents-head">created_at({{sliceText(list.created_at)}})</span>  
                </p>
                <p class="title contents-body">{{list.title}}</p>
                <p class="contents contents-body">{{list.contents}}</p> 
            </section>
    </section>
    
</template>

<script>
import CategoryName from './CategoryName';

export default {
        name: 'Feed',
        components: {
            CategoryName
        },
        props: {
            id: Number,
            list: Object
        },
         methods: {
            sliceText: (text) => {
            return text.slice(0,10);
        }
    }
}
</script>

<style>
    .feed-header {
        display: flex;
        justify-content: space-between;
        text-align: left;
        font: normal normal normal 13px/25px SpoqaHanSans;
        letter-spacing: 0px;
        color: #7E848A;
        opacity: 1;
        border-bottom: 1px solid #E1E4E7;
        padding-bottom: 0.5rem;
    }

    .feed-contents {
        display: block;
        text-align: left;
        font: normal normal normal 13px/25px SpoqaHanSans;
        letter-spacing: 0px;
        opacity: 1;
    }
    .user-id {
        color: var(--unnamed-color-00c854);
        border-right: 1px solid #E1E4E7;
        padding-right: 0.5rem;
    }

    .created {
        color: var(--unnamed-color-495057);
        padding-left: 0.5rem;
    }

    .contents-body{
        text-overflow: ellipsis;
        height: 3vh;
        white-space: nowrap;
        overflow: hidden;
        letter-spacing: 0px;
        text-align: left;
        margin: 0;
    }
    .title {
        font: normal normal bold 18px/28px SpoqaHanSans;
        color: #282C30;
    }
    .contents {
        font: normal normal normal 16px/25px SpoqaHanSans;
        color: var(--unnamed-color-495057);
        color: #495057;  
    }
</style>