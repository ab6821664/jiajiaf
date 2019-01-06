<template>
    <div>
        <head-title title="我的推广" backShow=true></head-title>
        <div class="content">
            由于大部分产品，自己使用只能获取到少部分的优惠或者现金，更多的收益来自推广，来自粉丝。考虑到这点，大家在注册新产品的时候，
            能够在本页面用自己的邀请码替换掉本站原本的邀请码，然后将您的专属链接发到各个群里，获取您自己的收益。
            <p style="color:#5249ff">建议进入专属页面(邀请码已替换)后，点击浏览器右上角进行分享</p>
        </div>
        <div class="link">
            <div class="link-to">www.jiajiaf.cn?id=<span style="color:greenyellow">{{link}}</span></div>
            <div class="copy" :aria-label="link" @click="copy">复制专<br/>属链接</div>
            <div class="enter" @click="backHome">进入专<br/>属页面</div>
        </div>
        <div>
            <div v-for="(item,index) in list" :key="index" class="list" v-show="!(item.invite==null)">
                <div>{{item.name}}</div>
                <div>邀请码：<el-input v-model="item.invite" style="width:110px"></el-input></div>
                <div><el-button :type="item.btnType" @click="save(item)">{{item.status}}</el-button></div>
            </div>
        </div>
    </div>
</template>

<script>
    import headTitle from '../../components/head-title'
    import { homeList } from '../../api/api'
    import ClipboardJS from 'clipboard'
    export default {
        name: "index",
        data:function () {
            return {
                link:'',
                list:"",
            }
        },
        components:{
            headTitle
        },
        mounted(){
            let this_=this;
            let id=localStorage.getItem('selfId');
            if(!id){
                id=(Math.random()+"").slice(-6);
                localStorage.setItem('selfId',id);
            }
            this_.link=id;
            homeList().then(function (res) {
                console.log(res);
                this_.list=res.data.map(function (item) {
                    item.status='替换';
                    item.btnType='primary';
                    item.invite=localStorage.getItem(item.symbol)?localStorage.getItem(item.symbol):item.invite;
                    return item;
                })
            })
        },
        methods:{
            copy:function () {
                new ClipboardJS('.copy', {
                    text: function(trigger) {
                        return trigger.getAttribute('aria-label');
                    }
                });
                this.$message({
                    message: '复制成功,快去转发吧',
                    type: 'success',
                    center:true
                });
            },
            backHome:function () {
                this.$router.push('/');

            },
            save:function (item) {
                item.status='已换';
                item.btnType='success';
                let key=item.symbol;
                console.log(key);
                localStorage.setItem(key,item.invite);
                this.$message({
                    message: '替换成功',
                    type: 'success',
                    center:true
                });
            }
        }
    }
</script>

<style scoped>
    .content{
        padding: 0 .5rem;
        font-size:.7rem;
        text-align: left;
        line-height: 1.5rem;
        text-indent: 1.5rem;
}
     .link{
         height:2.3rem;
         background-color: rgba(255, 147, 19, 0.79);
         font-size:.75rem;
         text-align: left;
         display: flex;
         padding-left: .3rem;
         color:white;
         margin-bottom: .3rem;
     }
    .link-to{
        line-height: 2.3rem;
        height: 2.3rem;
        padding-right: .5rem;
    }
    .copy{
        flex-grow: 1;
        text-align: center;
        border: solid 2px black;
    }
    .enter{
        flex-grow: 1;
        text-align: center;
        border-top: solid 2px black;
        border-bottom: solid 2px black;
    }
    .list{
        font-size: .65rem;
        height: 2.2rem;
        line-height: 2.2rem;
        border-bottom: solid 2px rgba(203, 187, 164, 0.33);
        display: flex;
        padding: 0 .5rem;
        justify-content:space-between;
    }
</style>