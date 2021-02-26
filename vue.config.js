module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/assets/variables.scss";
                    @import "@/assets/mixins.scss";
                `
            }
        }
    }
}