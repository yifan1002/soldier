<template>
<div style="margin-right:-20px;">
 
  <div class="card-box">
    <div class="mine-study">
      <img class="mine-study-img" src="../../../src/assets/img/text.png" alt />
      <p class="mine-study-title">阅读文章</p>
      <p class="mine-study-info">
        每有效阅读一篇
        <span>+{{getPoint.articleTotalReadPoint}}分</span>
      </p>
      <div class="mine-study-progress">
        <p>{{getPoint.articleValidReadPoint}}分/{{getPoint.articleValidReadLimit}}分</p>
        <div :style="{width:120*(getPoint.articleValidReadPoint/getPoint.articleValidReadLimit)+'px'}" class="mine-study-success"></div>
      </div>
      <el-Button type="primary" ghost class="btn-study">去看看</el-Button>
    </div>
  </div>
 
  <div class="card-box">
    <div class="mine-study">
      <img class="mine-study-img" src="../../../src/assets/img/mine2.png" alt />
      <p class="mine-study-title">文章学习时长</p>
      <p class="mine-study-info">
        有效阅读文章累计{{getPoint.articleTotalReadTime}}分钟
        <span>+{{getPoint.articleTotalReadPoint}}分</span>
      </p>
      <div class="mine-study-progress">
        <p>{{getPoint.articleStudyDur}}分/{{getPoint.articleTotalReadLimit}}分</p>
        <div :style="{width:120*(getPoint/getPoint.articleTotalReadLimit)+'px'}" class="mine-study-success"></div>
      </div>
      <el-Button type="primary" ghost class="btn-study">去学习</el-Button>
    </div>
  </div>
 
  <div class="card-box">
    <div class="mine-study">
      <img class="mine-study-img" src="../../../src/assets/img/mine3.png" alt style="margin-bottom:15px;"/>
      <p class="mine-study-title">视听学习</p>
      <p class="mine-study-info">
        每有效收听/收看一个
        <span>+{{getPoint.vodTotalWatchPoint}}分</span>
      </p>
      <div class="mine-study-progress">
        <p>{{getPoint.vodStudy}}分/{{getPoint.vodValidWatchLimit}}分</p>
        <div :style="{width:120*(getPoint.vodStudy/getPoint.vodValidWatchLimit)+'px'}" class="mine-study-success"></div>
      </div>
      <el-Button type="primary" ghost class="btn-study">去学习</el-Button>
    </div>
  </div>
 
  <div class="card-box">
    <div class="mine-study">
      <img class="mine-study-img" src="../../../src/assets/img/mine4.png" alt />
      <p class="mine-study-title">视听学习时长</p>
      <p class="mine-study-info">
        有效阅读文章累计{{getPoint.vodTotalWatchTime}}分钟
        <span>+{{getPoint.vodTotalWatchPoint}}分</span>
      </p>
      <div class="mine-study-progress">
        <p>{{getPoint.vodStudyDur}}分/{{getPoint.vodTotalWatchLimit}}分</p>
        <div :style="{width:120*(getPoint.vodStudyDur/getPoint.vodTotalWatchLimit)+'px'}" class="mine-study-success"></div>
      </div>
      <el-Button type="primary" ghost class="btn-study">去学习</el-Button>
    </div>
  </div>
 
  <div class="card-box">
    <div class="mine-study">
      <img class="mine-study-img" src="../../../src/assets/img/mine5.png" alt />
      <p class="mine-study-title">收藏文章</p>
      <p class="mine-study-info">
        收藏文章{{getPoint.articleTotalCollectTimes}}篇
        <span>+{{getPoint.articleTotalCollectPoint}}分</span>
      </p>
      <div class="mine-study-progress">
        <p>{{getPoint.collectArticle}}分/{{getPoint.articleTotalCollectLimit}}分</p>
        <div :style="{width:120*(getPoint.collectArticle/getPoint.articleTotalCollectLimit)+'px'}" class="mine-study-success"></div>
      </div>
      <el-Button type="primary" ghost class="btn-study">去看看</el-Button>
    </div>
  </div>
 
  <div class="card-box">
    <div class="mine-study">
      <img class="mine-study-img" src="../../../src/assets/img/mine6.png" alt />
      <p class="mine-study-title">收藏视频</p>
      <p class="mine-study-info">
        收藏视频{{getPoint.vodTotalCollectTimes}}个
        <span>+{{getPoint.vodTotalCollectPoint}}分</span>
      </p>
      <div class="mine-study-progress">
        <p>{{getPoint.collectVod}}分/{{getPoint.vodTotalCollectLimit}}分</p>
        <div :style="{width:120*(getPoint.collectVod/getPoint.vodTotalCollectLimit)+'px'}" class="mine-study-success"></div>
      </div>
      <el-Button type="primary" ghost class="btn-study">去学习</el-Button>
    </div>
  </div>
   
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    getPoint: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
.card-box {
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
  position: relative;
}
.btn-study {
  width: 90px;
  height: 32px;
  position: absolute;
  bottom: 40px;
  left: 63px;
  line-height: 0;
  background: #fff;
  color: #409EFF;
}
.mine-study {
  box-sizing: border-box;
  width: 216px;
  height: 300px;
  border: 1px solid #e4e4e4;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  padding-bottom:40px ;
  &-title {
    font-size: 16px;
    line-height: 24px;
    color: #000;
    margin: 5px 0;
  }
  &-info {
    font-size: 14px;
    color: $c-light;
    span {
      color: $c-success;
    }
  }
  &-progress {
    margin: 25px auto 10px;
    width: 120px;
    height: 20px;
    background: #dbdbdb;
    border-radius: 10px;
    position: relative;
    p {
      line-height: 20px;
      position: absolute;
      left: 32px;
      z-index: 999;
      color: #fff;
    }
  }
  &-success {
    position: absolute;
    top: 0;
    height: 20px;
    border-radius: 10px;
    background: $c-success;
  }
}
</style>