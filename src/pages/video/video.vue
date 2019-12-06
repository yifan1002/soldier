<template>
  <div>
    <div class="outter-box" style="background:#000;">
      <div class="inner-box clearfix">
        <h1 class="title">
          <i class="badge bg-myblue">{{videoDetail.sortName}}</i>
          {{videoDetail.vodName}}
        </h1>
        <div class="video-part"></div>
        <!-- 外层盒子 -->
        <div class="video-list">
          <div class="video-list-btn clearfix">
            <a href="javascript:;">目录</a>
          </div>
          <happy-scroll color="#999" size="3" resize>
            <!-- 内层盒子——内容区 -->
            <div class="video-list-content">
              <router-link
                :to="{path:'/video/'+item.id}"
                v-for="(item,index) in videoList"
                :key="index"
              >
                <span class="video-item-num">{{"0"+(index+1)}}</span>
                <span class="video-item-title">{{item.fileName}}</span>
                <span class="video-item-time">{{item.videoDurationStr}}</span>
              </router-link>
            </div>
          </happy-scroll>
        </div>
      </div>
      <div class="inner-box video-footer">
        <p>
          <span>来源：浙江省杭州市退役军人事务处</span>
          <span>上传时间：2018-10-14</span>
          <span>浏览：{{videoDetail.viewNumWan}}万</span>
        </p>
      </div>
    </div>
    <div class="video-detail inner-box">
      <p class="video-detail-tab">课程介绍</p>
      <div class="video-detail-box">
        <p>{{videoDetail.intro}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoDetail: {},
      videoList: []
    };
  },
  created() {
    this.getVodDetail();
  },
  methods: {
    getVodDetail() {
      var id=this.$route.query.id;
      this.$api.videoclass
        .vodDetail({
          id: id
        })
        .then(res => {
          this.videoDetail = res.data.data;
          console.log(this.videoDetail);
          this.videoList = res.data.data.vodVideoList;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  color: #d7d4d7;
  font-size: 22px;
  line-height: 24px;
  margin: 20px 0;
}
.bg-myblue {
  background: #6e97e2;
}
.video {
  &-part {
    float: left;
    background: #6e97e2;
    width: 910px;
    height: 560px;
  }
  &-footer {
    color: #999;
    height: 50px;
    line-height: 50px;
    background: #26262b;
    span {
      font-size: 14px;
      margin-left: 20px;
      & + span {
        margin-left: 30px;
      }
    }
  }
  &-detail {
    &-box {
      width: 1000px;
      margin: 0 auto;
    }
    height: 500px;
    border: 1px solid #e4e4e4;
    margin-top: 20px;
    p {
      color: #333;
      line-height: 32px;
      font-size: 16px;
    }
    &-tab {
      width: 120px;
      text-align: center;
      padding: 5px 0;
      border-top: 2px solid #0090f5;
      position: relative;
      top: -1px;
    }
  }
  &-list {
    width: 289px;
    float: right;
    background: #2d2d2d;
    height: 518px;
    color: #fff;
    /deep/ .happy-scroll {
      background: #333;
      min-height: 500px;
    }
    /deep/ .happy-scroll-strip--vertical {
      background: #333;
    }
    &-btn {
      height: 41px;
      border-bottom: 1px solid #000;
      a {
        text-align: center;
        font-size: 16px;
        color: #fff;
        line-height: 40px;
        display: inline-block;
        width: 64px;
        border-bottom: 2px solid #0090f5;
        margin-left: 5px;
      }
    }
    &-content {
      a {
        display: block;
        width: 286px;
        color: #999;
        font-size: 16px;
        line-height: 24px;
        margin: 20px 0;
        padding-right: 5px;
        box-sizing: border-box;
      }
    }
  }
  &-item {
    &-num {
      margin: 0 10px;
    }
    &-title {
      display: inline-block;
      vertical-align: top;
      width: 180px;
      word-wrap: break-word;
    }
    &-time {
      float: right;
    }
  }
}
</style>