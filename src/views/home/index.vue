<template>
    <div>
         <headTitle title="首页"></headTitle>
         <div class="banner">
             <div class="logo-show">
                <div><img src="../../assets/image/logo.png"></div>
             </div>
             <div class="introduce">
                 <p>
                     家家发平台，旨在为大家推荐，分享利用闲余时间可以挣钱的方法！
                 </p>
                 <div class="banner-choose">
                     <el-button type="info" plain @click="toAbout"><i class="el-icon-document"></i> 了解本平台</el-button>
                     <el-button type="primary" plain  @click="toSetting"><i class="el-icon-setting"></i> 我的推广</el-button>
                 </div>
             </div>
         </div>
         <div class="choose-item">
             <span class="choose-label">类别：</span>
             <el-select v-model="itemKindsValue" placeholder="全部" style="width:33%">
                 <el-option
                         v-for="item in itemKinds"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
                 </el-option>
             </el-select>
             <span class="choose-label">排序：</span>
             <el-select v-model="sortKindsValue" placeholder="请选择" style="width:33%">
                 <el-option
                         v-for="item in sortKinds"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
                 </el-option>
             </el-select>
         </div>
        <div id="home-load-tip" v-show="!loadSccess">
            <div>加载中<i class="el-icon-loading"></i></div>
        </div>
         <div class="list-show" v-for="(item,index) in items" :key="index" @click="target(item.symbol,item.name,item.invite)">
             <div> <img :src="item.pic" class="list-logo"/> {{item.name}}</div>
             <div> <i class="el-icon-message" style="color:#ff7835"></i> {{item.description}}</div>
             <div>
                 评分:<span style="color: rgb(247,186,42)">{{item.score}}</span>
             </div>
         </div>
    </div>
</template>

<script>
    import headTitle from '../../components/head-title'
    import { homeList,visitAdd } from '../../api/api'
    export default {
        data:function(){
            return {
                position:"11",
                itemKinds:[
                    {value:'app',label:'app推广'},
                    {value:'shopping',label:'电子商务'},
                    {value:'goods',label:'商品推广'},
                    {value:'tech',label:'技术积累'}
                ],
                itemKindsValue:"",
                sortKinds:[
                    {value:'app',label:'按时间先后'},
                    {value:'shopping',label:'电子商务'},
                    {value:'goods',label:'商品推广'},
                    {value:'tech',label:'技术积累'}
                ],
                sortKindsValue:"",
                items:[
                   // {"id":1,"symbol":"hsrj","name":"花生日记","description":"淘宝天猫优惠券平台","score":4.8},
                ],
                loadSccess:false
            }
        },
        name: "index",
        mounted(){
            var this_=this;
            homeList().then(function (res) {

                res.data.map(function (item) {
                    item.pic=require('../../assets/image_logo/'+item.pic);
                })
                // 判断是否有替换
                this_.items=res.data.map(function (item) {
                    item.invite=localStorage.getItem(item.symbol)?localStorage.getItem(item.symbol):item.invite;
                    return item;
                })
                this_.loadSccess=true;
            })
        },
        methods:{
            target(id,name,code){
                //this.$router.push({name:'detail',params:{symbol:id,name:name,code:code}})
                this.$router.push({path:`/detail/${id}/${name}/${code}`});

            },
            toSetting:function () {
                this.$router.push({path:"/set"})
            },
            toAbout:function () {
                this.$router.push({path:"/about"})
            }
        },
        components:{
            headTitle
        },
        created(){
            var todayId=sessionStorage.getItem('id');
            if(!todayId) {
                visitAdd();
            }
        }
    }
</script>

<style scoped>
     .banner{
         background-color: rgb(249,249,249);
         display: flex;
         font-size:.75rem;
         height: 5rem;
         align-items: center;
     }
    .logo-show img{
        width:4rem;
    }
    .introduce{
        text-align: left;
         height: 5rem;
        margin-left:6px;
        margin-right: 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .banner-choose{
        display: flex;
        justify-content: space-around;
        margin-bottom: .4rem;

    }
     .choose-item{
         font-size: .75rem;
         text-align: left;
         background-color: antiquewhite;
         padding: .3rem 0;
     }
     .choose-label{
         width:10%;
         margin-left: 2%;
     }
    .list-show{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .75rem;
        padding: .4rem .2rem;
        border-bottom: solid 1px #e5ffff;
        background-color: #fbfff8;
    }
    .list-logo{
        width:2rem;
        vertical-align: middle;
    }
    #home-load-tip{
        position: absolute;
        height:80%;
        width: 100%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<style>
    *{
        margin: 0;
        padding: 0;
    }
</style>