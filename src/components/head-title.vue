<template>
    <div>
        <header> <div id="backHome" @click="backHome" v-show="backShow"><i class="el-icon-arrow-left"></i></div>{{title}} </header>
    </div>
</template>

<script>
    export default {
        name: "headTitle",
        props:["title","backShow"],
        methods:{
            backHome:function () {
                this.$router.push('/');

            }
        }
    }
</script>

<style scoped>
     header{
         height:2rem;
         background-color: #91b2ff;
         line-height:2rem;
         color:white;
         position: relative;
     }
    #backHome{
        position: absolute;
        left:.8rem;
        padding: 0 .8rem;
    }
</style>