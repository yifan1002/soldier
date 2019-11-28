<template>
  <div class="swiper">
    <h3 class="mine-title">最近学习视频</h3>
    <div class="swiper-btn">
      <a class="swiper-btn-prev" @click="move<0?move+=width:move" href="javascript:;">&lt;</a>
      <a
        class="swiper-btn-next"
        @click="move>-width*(vodList.length-page)?move-=width:move"
        href="javascript:;"
      >&gt;</a>
      <span>更多视频</span>
    </div>
    <div class="swiper-outer">
      <div class="swiper-inner">
        <!-- 移动部分 -->
        <div :style="{'margin-left':move+'px','transition':'all .5s'}">
          <mineVideo v-for="(item,index) in vodList" :vodList="item" :key="index" class="m-r-20"></mineVideo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mineVideo from "../../components/card/mineVideoCard";
export default {
  name: "swiper",
  data() {
    return {
      vodList: [
        { createTime: 1574678179000,
          vod: {
            intro: "电焊基础手焊基础手法指法指法指法指导", 
            viewNum:12
          }
        },
        { createTime: 1574678179000,
          vod: {
            intro: "电焊基础手焊基础手法指法指法指法指导", 
            viewNum:12
          }
        },
        { createTime: 1574678179000,
          vod: {
            intro: "电焊基础手焊基础手法指法指法指法指导", 
            viewNum:12
          }
        },
        { createTime: 1574678179000,
          vod: {
            intro: "电焊基础手焊基础手法指法指法指法指导", 
            viewNum:12
          }
        },
        { createTime: 1574678179000,
          vod: {
            intro: "电焊基础手焊基础手法指法指法指法指导", 
            viewNum:12
          }
        },
        { createTime: 1574678179000,
          vod: {
            intro: "电焊基础手焊基础手法指法指法指法指导", 
            viewNum:12
          }
        },
        { createTime: 1574678179000,
          vod: {
            intro: "电焊基础手焊基础手法指法指法指法指导", 
            viewNum:12
          }
        },
        { createTime: 1574678179000,
          vod: {
            intro: "电焊基础手焊基础手法指法指法指法指导", 
            viewNum:12
          }
        },
        { createTime: 1574678179000,
          vod: {
            intro: "电焊基础手焊基础手法指法指法指法指导", 
            viewNum:12
          }
        },
        { createTime: 1574678179000,
          vod: {
            intro: "电焊基础手焊基础手法指法指法指法指导", 
            viewNum:12
          }
        },
      ],
      move: 0,
      //移动距离
      width: 237,
      //显示卡片数
      page: 4
    };
  },
  methods: {},
  components: {
    mineVideo
  }
};
</script>

<style lang="scss" scoped>
.mine-title {
  float: left;
}
.swiper {
  margin-top: 40px;
  margin-bottom: 20px;
  .mine-video:first-child {
    margin-left: 0;
  }
  .mine-video {
    float: left;
  }
  &-btn {
    float: right;
    &-prev,
    &-next {
      display: inline-block;
      width: 28px;
      height: 23px;
      border: 1px solid #e4e4e4;
      border-radius: 1px;
      color: #999;
      line-height: 25px;
      text-align: center;
      font-weight: 500;
    }
    &-next {
      margin-left: 5px;
    }
    span {
      font-size: 14px;
      color: #666;
      margin-left: 10px;
    }
  }

  &-outer {
    //   显示部分
    width: 930px;
    overflow: hidden;
    height: 200px;
  }
  &-inner {
    //卡片容器
    width: 1500px;
  }
}
</style> 