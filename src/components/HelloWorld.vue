<template>
    <div>

  <el-container class="page">
     <el-header>头部
         <Head title="首页"></Head>
     </el-header>
    <el-container>
    <el-aside class="aside">侧边</el-aside>
    <el-main class="main">主体<slot></slot></el-main>
    </el-container>
    <el-footer>底部<i class="el-icon-share"></i></el-footer>
    <div @click="show"> 弹出</div>
  </el-container>
    </div>
</template>

<script>
    import Head from './header'
var Mock= require('mockjs')
import axios from 'axios';
Mock.mock('http://test123.com', {//这里的url地址其实可以换成一个字段，比如msg,下边请求时候对应就可以
    'name': '@cname',
    'age|1-10': 10
})
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
    components:{
        Head
    },
    methods:{
      show:function () {
          axios.get("http://localhost:9090/home/findAll").then(
              function (data) {
                  console.log(data.data)
              }
          )
      }
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page{
    width:100%;
    margin:0 auto;
  }
  .aside{
    background-color: #2b81af;
  }
  .main{
    background-color: #008800;
  }
</style>
