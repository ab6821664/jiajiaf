<template>
    <div style="margin-bottom: 2.2rem">
        <p class="title">具体操作步骤</p>

        <div v-for="(item,index) in process" :key="index" class="steps">
            <p class="steps-title">{{index+1}} {{item.title}}</p>
            <p class="steps-detail" v-for="(itemPart,indexPart) in item.detail.split('_')" :key="indexPart">
                {{itemPart}}
            </p>
              <div v-if="item.picture">
            <div class="load" v-if="index==0">
                <a :href="item.picture.split('_')[0]">安卓版下载</a>
                <a :href="item.picture.split('_')[1]">苹果IOS版下载</a>
            </div>
                  <div class="step-img" v-if="index>0&&item.picture">
                           <img :src="item.picture">
                  </div>
              </div>
        </div>
    </div>
</template>

<script>
    import {getItemProcess} from '../../../api/api'
    export default {
        name: "process",
        data:function () {
            return {
                process:[]
            }
        },
        created:function () {
            var this_=this;
            getItemProcess(this.$route.params.symbol).then(function (res) {
                this_.process=res.data.map(function (item) {
                    if(item.id>1&&item.picture){
                        item.picture=require('../../../assets/image_detail/'+ item.picture);
                    }
                    return item;
                })
            })
        },
        watch:{

        }
    }
</script>

<style scoped>
   .title{
       font-size: 1rem;
       margin-top:.5rem;
   }
    .steps{
        text-align: left;
        padding: 0 .5rem;
    }
    .steps-detail{
        font-size:.7rem;
        text-indent: 18px;
        line-height: 2rem;
        padding: .1rem 0;
    }
    .steps-title{
        font-size:1rem;
        margin: .7rem 0;
    }
    a{
        text-decoration: none;
    }
    .load{
        display: flex;
        height:1.8rem;
        justify-content: space-around;
        font-size: .85rem;
    }
    .load a{
        width:40%;
        background-color: #827bff;
        color:white;
        height:1.8rem;
        line-height: 1.8rem;
        display: inline-block;
        text-align: center;
    }
     .step-img img{
         width:80%;
     }
   .step-img{
       text-align: center;
   }

</style>