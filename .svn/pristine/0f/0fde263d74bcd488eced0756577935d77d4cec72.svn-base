<template>
  <div class="card">
    <div class="card-msg">
      <h1 class="card-title">
        <i v-if="isTimeout" class="badge bg-gray">已过期</i><i v-else class="badge">火热报名</i>浙江省杭州退役军人事务局线下课程名称
      </h1>
      <p>来自全国十一所名校的特级金牌竞赛老师，集中进中进中进中进行数学竞赛辅导培训集</p>
      <span>
        <i class="date subject"></i>专业分类名
      </span>
      <span>
        <i class="date datetime"></i>10月10日~10月30日
      </span>
      <span>
        <i class="date"></i>每周下午2:00~5:00
      </span>
    </div>
    <div>
      <p class="card-price">
        <span>￥</span>1300000
      </p>
      <a href="javascript:;" class="card-detail">查看详情</a>
    </div>
    <div class="card-time">
      <p>500人已报名</p>
      <p>报名截止2020-04-01 18:00</p>
    </div>
    <div class="card-btn">
      <el-button>取消报名</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "mineOfflineCard",
  data() {
    return {
        isTimeout:false
    };
  }
};
</script>

<style lang="scss" scoped>
.badge {
  background: #fd5642;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  line-height: 20px;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  padding: 0 10px;
  margin-right: 5px;
  vertical-align: top;
  &.bg-gray{
       background: #b2b2b2;
  }
}
.card {
  height: 130px;
  border-bottom: 1px solid #eee;
  .subject{
      background: url('../../assets/icon/subject.png');
      width: 12px;
  }
  .datetime{
      background: url('../../assets/icon/datetime.png');
      width: 12px;
  }
  & > div {
    float: left;
  }
  &-msg {
    width: 475px;
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
      &+span{
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
    color: #c91a1d;
    font-size: 24px;
    margin-top: 45px;
    span {
      font-size: 18px;
    }
  }
  &-detail {
    display: block;
    margin-left:15px; 
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