<template>
    <div>
        <p>{{feed}}</p>
        <!-- <p>{{list.user_id}}</p> -->
    </div>
    
</template>

<script>
export default {
        name: 'Feed',
        
        props: {
            feed: Object,
            key: Number
        }
}
</script>

<style>

</style>