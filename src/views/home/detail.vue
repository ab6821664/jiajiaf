<template>
    <div>
        <head-title :title="title"></head-title>
        <div id="menu">
        <router-link to="/detail/process">流程</router-link>
        <router-link to="/detail/advantage">优缺点</router-link>
        <router-link to="/detail/pictures"> 相关图片</router-link>
        </div>

        <router-view></router-view>
    </div>


</template>

<script>
    import headTitle from '../../components/head-title'
    export default {
        name: "detail",
        data(){
            return {
                title:''
            }
        },
        created(){
            this.title=this.$route.params.name;
            if(this.title)this.$router.push('detail/process');
            else {this.$router.push('process')}
        },
        components:{headTitle}
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