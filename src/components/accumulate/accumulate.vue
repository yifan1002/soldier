<template>
  <div>
    <h3 class="mine-title">我的积分</h3>
    <div class="mine-top">
      <div class="mine-mark">
        <p>
          <span class="mine-mark-num">成长总积分:</span>
          <span class="mine-mark-word">89</span>
        </p>
      </div>
      <div class="mine-mark">
        <p>
          <span class="mine-mark-num">今日累计分:</span>
          <span class="mine-mark-word">9</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.mine-mark {
  border-left: 2px solid #dcdfe6;
  width: 210px;
  height: 35px;
  background: #f3f3f7;
  text-align: center;
  padding: 15px 0;
  float: left;
  & + & {
    width: 715px;
    border-left: 0;
  }
  p {
      box-sizing: border-box;
    width: 210px;
    border-right: 1px solid #999;
  }

  &-num {
    display: inline-block;
    color: #666;
    font-size: 16px;
    position: relative;
    top: -5px;
  }
  &-word {
    display: inline-block;
    color: #0044c2;
    font-size: 32px;
    margin-left: 10px;
  }
}
</style>