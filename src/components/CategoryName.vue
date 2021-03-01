<template>
  <span class="category">{{this.category_name}}</span>
</template>

<script> 

export default {
    name: "CategoryName",
    props: {
        category_id: Number
    },
    data() {
        return {
            category_name: String,
        }
    },
    computed: {
        storeAllCategory: function() {
            return this.$store.state.AllCategoryList;
        }
    },
    mounted() {
        this.getCategoryName(this.storeAllCategory, this.category_id);
    },
    methods: {
         getCategoryName: function (list, id) {
            let pickedCategory = list;
            pickedCategory = pickedCategory.filter((e) => e.id === id);
            this.category_name = pickedCategory[0].name;
        }
    }
}

</script>
