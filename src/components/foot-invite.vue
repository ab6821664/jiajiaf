<template>
    <div class="container"   :aria-label="code" @click="copy" v-show="show">
        <div class="invite-code">
            邀请码：{{code}}
        </div>

        <div class="copy-code" >
           {{tips}}<i class="el-icon-check" v-show="isCopy"></i>
        </div>

    </div>
</template>

<script>
    import ClipboardJS from 'clipboard'
    export default {
        name: "foot-invite",
        data:function(){
            return {
                tips:'单击复制邀请码',
                isCopy:false,
                res:'',
                show:true
            }
        },
        props:['code'],
        mounted:function () {

        },
        methods:{
            copy:function () {
                let this_=this;
                function hide() {
                    this_.show=false;
                }
                this.res=new ClipboardJS('.container', {
                    text: function(trigger) {
                        return trigger.getAttribute('aria-label');
                    }
                });
                setTimeout(hide,5000)
            }
        },
        watch:{
            res:function () {
                this.tips='复制成功';
                this.isCopy=true;
                this.$message({
                    message: '邀请码已经复制成功',
                    type: 'success',
                    center:true
                });
            }
        }
    }
</script>

<style scoped>
     .container{
         position: fixed;
         bottom: .1rem;
         height: 2.2rem;
         display: flex;
         width: 100%;
         background-color: #679969;
         font-size: .85rem;
         z-index:10000;
     }
    .container div{
        width: 50%;
        line-height: 2.2rem;
        align-items: center;
    }
    .copy-code{
        background-color: #5962ff;
        width:100%;
        height: 2.2rem;
        color:white;

    }
    .invite-code{
        color: white;
    }
</style>