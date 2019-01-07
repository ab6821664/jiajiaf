<template>
    <div style="margin-bottom: 2.2rem">
        <div v-for="(item,index) in img" :key="index">
              <p>{{item.des}}</p>
              <div><img :src="item.pic"/></div>
        </div>
    </div>
</template>

<script>
    import {getIntroduce} from '../../../api/api'
    export default {
        name: "advantage",
        data:function(){
            return {
                img:[]
            }
        },
        mounted(){
            let this_=this;
            getIntroduce(this.$route.params.symbol).then(function (res) {
                console.log(res);
                this_.img=res.data[0].img.split("_");
               this_.img=this_.img.map(function (item) {
                    let newObject={};
                    var newArray=item.split("^");
                    newObject.des=newArray[0];
                    var img=require('../../../assets/image_detail/'+newArray[1]);
                    newObject.pic=img;
                    return newObject;
                })

            })
        },
        created:function () {
            console.log(this.$route.params.symbol)
        }
    }
</script>

<style scoped>
    p{
        text-align: left;
        font-size: .7rem;
        text-indent: 1rem;
        margin: .5rem .5rem;
        line-height: 1.5rem;
    }
   img{
       width:85%;
   }
</style>