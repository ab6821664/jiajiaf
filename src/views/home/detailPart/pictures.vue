<template>
    <div style="margin-bottom: 2.2rem">
        <p class="title">此项目具体介绍</p>
       <div v-for="(item,index) in intro" :key="index" class="steps-detail">
            <p>{{item}}</p>
       </div>
    </div>
</template>

<script>
    import {getIntroduce} from '../../../api/api'
    export default {
        name: "pictures",
        data:function(){
            return {
                intro:[]
            }
        },
        mounted:function () {
            var this_=this;
            getIntroduce(this.$route.params.symbol).then(function (res) {
                this_.intro=res.data[0].msg.split("_");
            })
        }
    }
</script>

<style scoped>
    .title{
        font-size: 1rem;
        margin:.5rem 0;
    }
    .steps-detail{
        font-size:.7rem;
        text-indent: 18px;
        line-height: 1.5rem;
        text-align: left;
        padding: .1rem .5rem;
    }

</style>