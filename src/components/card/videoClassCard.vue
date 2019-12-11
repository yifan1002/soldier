<template>
  <div class="card-video">
    <div class="card-video-img">
      <img :src="msg.src" alt />
    </div>
    <div class="card-video-title">
      <a href="javascript:;" v-text="msg.title"></a>
    </div>
    <div class="card-video-footer">
      <i class="times"></i>
      <span v-text="msg.times"></span>
      <i class="nums"></i>
      <span v-text="msg.nums">550</span>
      <i class="date"></i>
      <span v-text="msg.date">2019-11-11</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["msg"]
};
</script>

<style lang="scss" scoped>
.card-video {
  box-sizing: border-box;
  display: inline-block;
  width: 285px;
  height: 265px;
  cursor: pointer;
  margin: 0 15px 20px 0;
  border: 1px solid #e4e4e4;
  &:hover {
    box-shadow: #e4e4e4 0px 0px 6px;
     a {
        color: $c-primary;
      }
  }
  &-img {
    height: 154px;
    img {
      width: 285px;
      height: 154px;
      position: relative;
      left: -1px;
      top: -1px;
    }
  }
  &-title {
    margin: 15px 20px 0 20px;
    height: 48px;
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
    margin: 0 0 0 20px;
    height: 32px;
    span {
      margin-right: 18px;
    }
  }
}
</style>