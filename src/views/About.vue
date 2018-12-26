<template>
  <div class="about">
    <h1>This is an about page!!</h1>
    <div id="star">
        <i class="el-icon-star-on" style="color: black" v-for="item in 9" v-bind:key="item"></i>
    </div>
    <div class="equipment">
      <p class="border-equip"><span class="title-equipment">蝶恋</span>
        <i class="el-icon-close title-close"></i>
      </p>
      <div class="equipment-image">
         <div class="eq-image">
            <img src="../assets/circle.png"/>
         </div>
         <div class="eq-detail">
           等级 :98 <span style="font-size: 12px;color:rgb(0,255,255);margin-left:20px">尚未升灵</span><br/>
           耐久 :235/235 <br/>
           可修理次数 :3/3
         </div>
      </div>

      <div class="star-num">
        <div class="start-num-name">
          项链
        </div>
        <div class="star-num--star">
          <i class="el-icon-star-on" style="color:rgb(166,145,84);font-size: 12px" v-for="item in 8" :key="item"></i>
            <i class="el-icon-star-on" style="color:grey;font-size: 12px"></i>
        </div>
      </div>

      <p class="tips-trade">元宝或者金币交易</p>
       <div class="detail-property-contain">
      <div class="detail-property">
         <span class="detai-one">
            装备时绑定
         </span>
          <div class="detai-two">
             基础命中 +370<br/>
             基础闪避 +123
          </div>
          <div class="datail-there">
            血上限&nbsp;&nbsp;+10929<br/>
            冰攻击&nbsp;&nbsp;+177<br/>
            玄攻击&nbsp;&nbsp;+177<br/>
            毒攻击&nbsp;&nbsp;+177<br/>
            命中&nbsp;&nbsp;+1074<br/>
            体力&nbsp;&nbsp;+100<br/>
            会心防御&nbsp;&nbsp;+10<br/>
              <span style="color: rgb(255,102,205)"> 武具精通</span><br/>
              <span style="color: rgb(0,153,50)">尚未获得精通属性</span><br/>
              <span style="color: rgb(0,153,50)">尚未获得精通属性</span><br/>
              <span style="color: rgb(0,153,50)">尚未获得精通属性</span><br/>
              <span style="color:rgb(217,173,193)">资质未鉴定</span>
          </div>
      </div>
       </div>
        <p class="author">
            爽爽
        </p>
        <div class="eqi-introduce">
           <br/>
            <p style="color: rgb(248,242,242)">
                碟仙为人世男子所救，为了答谢此人便洒下泪滴，用其制成
                蝶恋项链，送予男子，此项链香气扑鼻，梅梅夜晚，仿似有
                万碟起舞，非人间之物。
            </p>
            <p style="color:rgb(107,183,111)">
                该装备可到楼兰程咬铁（219，228）处使用寒玉精粹和点金之
                箭进行极限打孔。可以直接交易、摆摊交易，也可以在洛阳
                （303，314）钱庄内的元宝交易市场出售。
                <br/>
            </p>
        </div>
    </div>
  </div>
</template>

<script>

   export default {
       data:function () {
           return{
              value:3
           }
       },
       created:function () {
           console.log('about create');
       }
   }
</script>
<style lang="stylus" scoped>
  .equipment
    background-color rgb(24,15,8)
    width 250px;
    padding 1px 1px;
    margin 0 auto;
  .border-equip
    border:solid 1px rgb(69,61,59);
  .title-equipment
    text-align center
    color:rgb(40,124,248);
    font-size:16px;
    line-height 30px
  .title-close
    float right;
    margin-right 3px;
    color rgb(223,205,165);
    position relative;
    top 6px;
  .equipment-image
    height 80px;
    display flex;
    border-bottom solid 1px rgb(69,61,59);
  .eq-image
    margin 10px 0px 10px 5px;
  .eq-detail
    margin-top:10px;
    margin-left 3px
    font-size 10px
    color rgb(196,184,166);
    text-align:left
  .star-num
    display flex;
    justify-content space-between;

  .start-num-name
    color rgb(247,217,199);
    font-size:10px;
    line-height 20px;
    margin-left:25px;
  .star-num--star
    margin-right 16px;
  .tips-trade
     color rgb(107,183,111);
     font-size 10px;
     line-height 27px;
     border solid 1px rgb(69,61,59);
  .detail-property-contain
      border solid 1px rgb(69,61,59);
      marign-top 2px;
      padding-bottom 30px;
  .detail-property
     margin-top 10px;
     margin-left 6px;
     font-size 10px;
     text-align left;
     line-height 17px;
  .detai-one
     color rgb(254,255,255);
  .detai-two
     color rgb(233,211,197)
  .datail-there
     color rgb(214,192,169);
  .author
    font-size 12px
    color rgb(195,183,169);
    line-height 22px;
  .eqi-introduce
    border solid 1px rgb(69,61,59);
    padding 0 3px;
  .eqi-introduce
    font-size 12px;
    text-align left;

</style>
<style>
   *{
     margin: 0;
     padding: 0;
   }
</style>
