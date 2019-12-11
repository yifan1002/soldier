<template>
  <div>
    <div class="clearfix">
      <div class="mine-top">
        <p class="mine-title">学习积分</p>
        <div class="mine-mark">
          <p class="mine-mark-num">{{pointList.point}}</p>
          <p class="mine-mark-word">成长总积分</p>
        </div>
      </div>
      <div class="mine-top mine-top-right">
        <p class="mine-title">学习统计</p>
        <div class="mine-mark">
          <div class="mine-mark-box border-none">
            <p class="mine-mark-num">{{pointList.vodNum}}</p>
            <p class="mine-mark-word">视频课(门)</p>
          </div>
        </div>
        <div class="mine-mark">
          <div class="mine-mark-box">
            <p class="mine-mark-num">{{pointList.articleNum}}</p>
            <p class="mine-mark-word">文章(篇)</p>
          </div>
        </div>
        <div class="mine-mark">
          <div class="mine-mark-box">
            <p class="mine-mark-num">{{pointList.lessonNum}}</p>
            <p class="mine-mark-word">线下课(门)</p>
          </div>
        </div>
      </div>
    </div>
    <swiper></swiper>
    <mineStudyCard :getPoint="getPoint"></mineStudyCard>
  </div>
</template>

<script>
import swiper from "../../components/swiper/swiper";
import mineStudyCard from "../../components/card/mineStudyCard";
export default {
  name: "mineStudy",
  data() {
    return {
      pointList: {
        point:0,
        vodNum:0,
        articleNum:0,
        lessonNum:0
      },
      swiperList: [],
      getPoint:{}
    };
  },
  components: { swiper, mineStudyCard },
  created() {
  
    this.$api.myStudy
      .myGetPoint()
      .then(res => {
        this.getPoint=res.data.data
       
      })
      .catch(err => {
        console.log(err);
      });
    this.$api.myStudy
      .myStudyCount()
      .then(res => {
        this.pointList = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.mine {
  &-top {
    float: left;
    &-right {
      margin-left: 20px;
      .mine-mark {
        float: left;
        width: 232px;
        &-box {
          border-left: 1px solid #dcdfe6;
        }
      }
      .border-none {
        border-left: 0;
      }
    }
  }

  &-mark {
    width: 210px;
    height: 45px;
    background: #f3f3f7;
    padding: 30px 0 25px 0;
    text-align: center;
    &-num {
      color: #0044c2;
      font-size: 24px;
    }
    &-word {
      margin-top: 8px;
      color: #666;
      font-size: 14px;
    }
  }
}
</style>