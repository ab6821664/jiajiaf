<template>
    <div class="content">
        <head-title title="平台介绍" backShow=true></head-title>
        <div class="main">
            本平台旨在给大家介绍，可以赚钱的方法，零花钱或者更多，利用自己的闲余时间和一点点精力，有兴趣的可以试一试，都是零投入，
            零成本的一些<span class="kind">app推广期红利，电商推广，技术经验写作，自媒体，</span>等等。付出一些劳动获取自己的收益，又何尝不可。每天努力一点点，自己
            的生活就会好一点。
        </div>
        <div class="tips">
            <span class="important">重点：</span>  大家在注册app后，都将会有自己的专属邀请码，然后将本站的邀请码替换成您自己的，转发到群里，
            别人使用注册后，您将会获取到收益。<span class="myself" @click="enter">进入我的推广</span>
        </div>
    </div>
</template>

<script>
    import headTitle from '../../components/head-title'
    export default {
        name: "intro",
        components:{
            headTitle
        },
        methods:{
            enter:function () {
                this.$router.push('set')
            }
        }
    }

</script>

<style scoped>
    .main{
        padding: .6rem .4rem;
        text-align: left;
        text-indent: 1.5rem;
    }
    .kind{
        color: #ffa655;
    }
  .content{
      font-size: .7rem;
      line-height: 1.5rem;
  }
    .tips{
        margin-top: 2rem;
        font-size:.9rem;
        line-height: 2rem;
        padding: 0 .5rem;
        text-align: left;
    }
    .important{
        color:red
    }
    .myself{
        color: #2c8014;

    }
</style>