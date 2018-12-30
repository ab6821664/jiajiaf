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
                     <el-button type="info" plain><i class="el-icon-document"></i> 了解本平台</el-button>
                     <el-button type="primary" plain><i class="el-icon-message"></i> 网挣杂谈</el-button>
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
         <div class="list-show" v-for="item in items">
             <div> <img src="../../assets/image_logo/hsrj.jpg" class="list-logo"/> {{item.name}}</div>
             <div> <i class="el-icon-sold-out" style="color:#ff7835"></i> {{item.spends}}</div>
             <div> <i class="el-icon-news" style="color:#ff7835"></i> {{item.potential}}</div>
             <div>
                 评分:<span style="color: rgb(247,186,42)">{{item.score}}</span>
             </div>
         </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import ClipboardJS from 'clipboard'
    import headTitle from '../../components/head-title'
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
                    {kind:'shopping',name:'花生日记飞',logo:"../../assets/image_logo/hsrj.jpg",spends:"零投入",potential:"收入高",score:4.8,id:"hsrj"},
                    {kind:'shopping',name:'花生日记',logo:"../../assets/image_logo/hsrj.jpg",spends:"零投入",potential:"收入高",score:4.8,id:"hsrj"},
                    {kind:'shopping',name:'花生日记的',logo:"../../assets/image_logo/hsrj.jpg",spends:"零投入",potential:"收入高",score:4.8,id:"hsrj"},
                    {kind:'shopping',name:'花生日记他',logo:"../../assets/image_logo/hsrj.jpg",spends:"零投入",potential:"收入高",score:4.8,id:"hsrj"},
                    {kind:'shopping',name:'花生日记',logo:"../../assets/image_logo/hsrj.jpg",spends:"零投入",potential:"收入高",score:4.8,id:"hsrj"},
                    {kind:'shopping',name:'花生日记',logo:"../../assets/image_logo/hsrj.jpg",spends:"零投入",potential:"收入高",score:4.8,id:"hsrj"},
                ]
            }
        },
        name: "index",
        mounted(){
            new ClipboardJS('.btn');
        },
        components:{
            headTitle
        },
        created(){
            return;
            var todayId=sessionStorage.getItem('id');
            if(!todayId) {
                var today = new Date();
                var month = (today.getMonth() + 1) > 9 ? (today.getMonth() + 1) : "0" + (today.getMonth() + 1);
                var day = today.getDate() > 9 ? today.getDate() : "0" + today.getDate();
                todayId = today.getFullYear() + "" + month + day;
                var url = "http://localhost:9090/home/add/" + todayId;
                axios.get(url).then(function () {

                })
                sessionStorage.setItem('id',todayId);
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
</style>

<style>
    *{
        margin: 0;
        padding: 0;
    }
</style>