<template>
  <div class="floatLeft">
    <div class="mine-study">
      <img class="mine-study-img" src="../../../src/assets/img/text.png" alt />
      <p class="mine-study-title">阅读文章</p>
      <p class="mine-study-info">
        每有效阅读一篇
        <span>+1分</span>
      </p>
      <div class="mine-study-progress">
        <p>{{msg}}分/6分</p>
        <div :style="{width:120*(msg/6)+'px'}" class="mine-study-success"></div>
      </div>
      <el-Button type="primary" ghost class="btn-study">去学习</el-Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    msg: {
      type: Number
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../var.scss";
.floatLeft {
  float: left;
}
.btn-study {
  width: 90px;
  height: 32px;
  margin-top: 10px;
  line-height: 0;
}
.mine-study {
  box-sizing: border-box;
  width: 217px;
  height: 300px;
  border: 1px solid #e4e4e4;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
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