<template>
  <div class="card">
    <div class="card-msg">
      <h1 class="card-title">
        <i v-if="todayDate>lessonList.deadLine" class="badge bg-gray">已过期</i>
        <i v-else class="badge">火热报名</i>
        {{lessonList.lessonName}}
      </h1>
      <p>{{lessonList.intro}}</p>
      <span class="major-mame">
        <i class="date subject"></i>
        {{lessonList.majorName}}
      </span>
      <span>
        <i class="date datetime"></i>
        {{lessonList.beginTime|formatDate('MM月dd日')}}~{{lessonList.endTime|formatDate('MM月dd日')}}
      </span>
      <span>
        <i class="date"></i>
        {{lessonList.lessonTime}}
      </span>
    </div>
    <div class="card-price-div">
      <p class="card-price-p">
        <span>￥</span>
        {{lessonList.price}}
      </p>
      <router-link :to="{path:'articleDetail/'+lessonList.lessonId}" class="card-detail">查看详情</router-link>
    </div>
    <div class="card-time">
      <p>{{lessonList.reportNum}}人已报名</p>
      <p>报名截止{{lessonList.deadLine|formatDate('yyyy-MM-dd hh:mm')}}</p>
    </div>
    <div class="card-btn">
      <!-- <el-button >取消报名</el-button> -->
      <el-button
        v-if="!todayDate>lessonList.beginTime"
        @click="cancelLesson(lessonList.lessonId)"
      >取消报名</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "mineOfflineCard",
  data() {
    return {
      todayDate: ""
    };
  },
  props: {
    lessonList: {
      type: Object
    }
  },
  methods: {
    cancelLesson(e) {
      this.$api.recordList
        .cancelLesson({
          lessonId: e
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.todayDate = Date.parse(new Date());
  }
};
</script>

<style lang="scss" scoped>
.major-mame {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 120px;
  white-space: nowrap;
  vertical-align: middle;
}

.card {
  height: 130px;
  border-bottom: 1px solid #eee;
  .subject {
    background: url("../../assets/icon/subject.png");
    width: 12px;
  }
  .datetime {
    background: url("../../assets/icon/datetime.png");
    width: 12px;
  }
  & > div {
    float: left;
  }
  &-msg {
    width: 500px;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #999;
      font-size: 14px;
      margin-top: 10px;
      margin-bottom: 20px;
    }
    span {
      color: #999;
      font-size: 14px;
      & + span {
        margin-left: 30px;
      }
    }
  }
  &-title {
    margin-top: 20px;
    font-size: 16px;
    color: #333;
    font-weight: bold;
    line-height: 24px;
  }
  &-price {
    &-p {
      color: #c91a1d;
      font-size: 24px;
      margin-top: 45px;
      span {
        font-size: 18px;
      }
    }
    &-div {
      text-align: center;
      padding-left: 20px;
    }
  }
  &-detail {
    display: block;
    font-size: 12px;
    color: #666;
    text-align: center;
    line-height: 24px;
    text-decoration: underline;
  }
  &-time {
    margin: 50px 0 0 60px;
    font-size: 14px;
    color: #999;
    p + p {
      margin-top: 5px;
    }
  }
  &-btn {
    float: right !important;
  }
  .el-button {
    width: 90px;
    height: 32px;
    border: 1px solid #0090f5;
    color: #0090f5;
    margin-top: 47px;
    line-height: 32px;
    padding: 0;
  }
}
</style>