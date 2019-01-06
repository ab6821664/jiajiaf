<template>
    <div>
        <head-title :title="title" backShow=true></head-title>
        <div id="menu">
        <router-link :to="`/detail/${symbol}/${title}/${code}`">流程</router-link>
        <router-link :to="`/detail/${symbol}/${title}/${code}/pictures`"> 介绍</router-link>
        <router-link :to="`/detail/${symbol}/${title}/${code}/advantage`">收益图片</router-link>

        </div>
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
        <foot-invite :code="code" v-if="code!='null'"></foot-invite>
    </div>


</template>

<script>
    import headTitle from '../../components/head-title'
    import footInvite from '../../components/foot-invite'
    export default {
        name: "detail",
        data(){
            return {
                title:'',
                code:"",
                symbol:""
            }
        },
        created(){
            this.title=this.$route.params.name;
            this.code=this.$route.params.code;
            this.symbol=this.$route.params.symbol;
        },
        components:{headTitle,footInvite}
    }
</script>

<style scoped>
    #menu{
        display: flex;
        font-size: .8rem;
        justify-content: space-between;
    }
    a{
        text-decoration: none;
        display: inline-block;
        padding: .5rem 0rem;
        background-color: aquamarine;
        width: 33%;
        border-left:solid 1px #8b998a;
    }

</style>