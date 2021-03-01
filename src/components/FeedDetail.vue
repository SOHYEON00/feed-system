<template>
  <div>
      feed detail : {{this.id}}
  </div>
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
            feedObject: Object,
        }
    },
    mounted() {
        this.getViewDetail(this.id);
    },
    methods: {
        getViewDetail: function(id) {
            return axios.get(VIEW, {params: {id: id+1}, HEADER})
            .then((response) => {
                this.feedObject = response.data;
            })
            .catch((error) => {console.log(error); })
        }
    }

}
</script>

<style>

</style>