<template lang="html">
    <div class="selectFilters">
      <div class="filters">
           <span :class="index==tabNum?'selectAct':'select'" v-for="(item,index) in filtersArr" @click="seletTab(index)">{{item}}</span>
      </div>
      <div class="filterContent" v-show="showFilter">
          <div class="filterDistance" v-show="tabNum==0">
                <ul>
                   <li v-for="(item,index) in disArr" @click="selectDisOpt(index,item)" :class="selectDisNum==index?'selected':''">{{item}}</li>
                </ul>
          </div>
          <div class="filterProduction" v-show="tabNum==1">
                <ul>
                   <li v-for="(item,index) in productionArr" @click="selectProOpt(index,item)" :class="selectProNum==index?'selected':''">{{item}}</li>
                </ul>
          </div>
          <div class="filterArea" v-show="tabNum==2">
                <ul>
                  <li v-for="(item,index) in runningModelArr" @click="selectRunOpt(index,item)" :class="selectRunNum==index?'selected':''">{{item}}</li>
                </ul>
          </div>
      </div>
      <div class="mask" v-show="showFilter"></div>
    </div>
</template>

<script>
export default {
  name:'conditionFilter',
  data(){
    return{
      filtersArr:['距离最近','全部产业链','全部地区'],
      disArr:['距离最近','更新时间','最近查看'],
      productionArr:['全部','工程塑料','通用塑料','其他塑料'],
      runningModelArr:['全部模式','经销批发','生产加工','招商代理','技术服务'],
      tabNum:-1,
      selectDisNum:-1,
      selectProNum:-1,
      selectRunNum:-1,
      showFilter:false
    }
  },
  methods:{
       seletTab(n){
         if(this.tabNum==n){
            this.tabNum=-1;
            this.showFilter=false;
         }else{
           this.tabNum=n;
           this.showFilter=true;
         }
       },
       selectDisOpt(n,v){
           this.selectDisNum=n;
           this.filtersArr[0]=v;
           this.showFilter=false;
           this.$emit('selectedFilters',{
                disVal:this.filtersArr[0],
                proVal:this.filtersArr[1],
                runVal:this.filtersArr[2],
           });
       },
       selectProOpt(n,v){
           this.selectProNum=n;
           this.filtersArr[1]=v;
           this.showFilter=false;
           this.$emit('selectedFilters',{
                disVal:this.filtersArr[0],
                proVal:this.filtersArr[1],
                runVal:this.filtersArr[2],
           });
       },
       selectRunOpt(n,v){
           this.selectRunNum=n;
           this.filtersArr[2]=v;
           this.showFilter=false;
           this.$emit('selectedFilters',{
                disVal:this.filtersArr[0],
                proVal:this.filtersArr[1],
                runVal:this.filtersArr[2],
           });
       }
  },
  mounted(){

  }
}
</script>

<style lang="css">
.selectFilters{
   position:relative;
}
.filterContent{
  position:fixed;
  width:100%;
  top:112px;
  left:0;
  z-index: 100;
  background:#F2F2F2;
  padding-bottom:5px;
  line-height: 30px;
  padding-top:2px;
}
.filterContent li{
  padding-left:15px;
  border-bottom:1px solid #ececec;
}
.filterContent .selected{
    background:#ffffff;
}
.mask{
   position:fixed;
   width:100%;
   top:112px;
   bottom:0;
   left:0;
   background:#333333;
   opacity: .6;
}
.filters{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.filters .select{
    display: inline-block;
    background: #F2F2F2;
    text-align: center;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0.17px;
}
.filters .selectAct{
    display: inline-block;
    background: #F2F2F2;
    text-align: center;
    font-size: 14px;
    color: #0092FF;
    letter-spacing: 0.17px;
}
.filters .select::after{
      content:"";
      position: relative;
      display: inline-block;
      width: 0;
      height: 0;
      border-width: 5px;
      border-style: solid;
      border-color: #999999 transparent transparent transparent;
      right:-3px;
      top:3px;
}
.filters .selectAct::after{
      content:"";
      position: relative;
      display: inline-block;
      width: 0;
      height: 0;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent #0092FF transparent;
      right:-3px;
      top:-2px;
}
</style>
