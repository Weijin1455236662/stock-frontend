<template>
  <div>
    <em>Welcome!</em>
    <h1>这里是{{name}}行业页面</h1>
  </div>
</template>

<script>
    export default {
        name: "Industry",
        data(){
            return{
                name: ''
            }
        },
        mounted() {
            this.name = this.$route.params.name;
        }
    }
</script>

<style scoped>

</style>