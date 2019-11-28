<template>
  <div class="button-group">
    <a href="javascript:;" @click="page=0" :class="page==0?'active':0">最近7天</a>
    <a href="javascript:;" @click="page=1" :class="page==1?'active':1">最近1个月</a>
    <a href="javascript:;" @click="page=2" :class="page==2?'active':2">最近3个月</a>
  </div>
</template>

<script>
export default {
  name: "buttonGroup",
  data(){
      return {
          page:0
      }
  }
};
</script>

<style lang="scss" scoped>
.button-group {
    margin-top:20px; 
  a {
    display: inline-block;
    border: 1px solid #eee;
    height: 30px;
    width: 90px;
    text-align: center;
    line-height: 30px;
    color: #555;
    & + a {
      border-left: 0;
    }
    &.active{
        background: #0090f5;
        color: #fff;
        border-color: #0090f5;
    }
    &:first-child{
      border-bottom-left-radius: 2px;
      border-top-left-radius: 2px;
    }
    &:last-child{
      border-bottom-right-radius: 2px;
      border-top-left-radius: 2px;
    }
  }
}
</style>