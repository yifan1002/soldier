<template>
  <div class="mine-video" :class="size">
    <div class="mine-video-img">
      <!-- <img src="../../../src/assets/img/class2.png" alt /> -->
      <img :src="vodList.pictureFile?vodList.pictureFile:require('../../../src/assets/img/class2.png')" alt="图片炸了" />
    </div>
    <div class="mine-video-title">
      <router-link :to="{path:'articleDetail/'+vodList.vodId}" href="javascript:;" v-text="vodList.vodName?vodList.vodName:'已删除'">{{vodList.vodName}}</router-link>
    </div>
    <div class="mine-video-footer">
      <i class="times"  v-if="vodList.vodNum!==''"></i>
      <span v-text="vodList.vodNum"></span>
      <span v-if="vodList.time" class="mine-video-footer-right">观看于{{vodList.time|formatDate('yyyy-MM-dd')}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vodList: {
      type: Object      
    },
    size: {
      type: String,
      default: ""
    }
  },
  created(){
   
  },
};
</script>

<style lang="scss" scoped>
@import "../../var.scss";

.mine-video {
  box-sizing: border-box;
  display: inline-block;
  width: 217px;
  height: 193px;
  cursor: pointer;
  margin: 0 0 20px 0;
  &:hover {
    box-shadow: #e4e4e4 0px 0px 6px;

    a {
      color: $c-primary;
    }
  }

  &-img {
    height: 118px;

    img {
      width: 218px;
      height: 118px;
      position: relative;
      left: -1px;
      top: -1px;
    }
  }

  &-title {
    margin: 10px 20px 0 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    a {
      font-size: 16px;
      line-height: 24px;
      color: $c-darken;
      text-decoration: none;
    }
  }

  &-footer {
    font-size: 14px;
    line-height: 32px;
    color: $c-light;
    margin: 0 0 0 5px;
    height: 32px;

    span {
      margin-right: 18px;
    }

    &-right {
      float: right;
    }
  }

  &.mine-video-lg {
    width: 285px;
    height: 262px;
    border: 1px solid #e4e4e4;

    .mine-video {
      &-img {
        height: 154px;
        margin: -1px -1px 0;

        img {
          width: 285px;
          height: 154px;
        }
      }

      &-title {
        height: 48px;
        margin-bottom: 10px;
        display: -webkit-box;
        white-space: normal !important;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
