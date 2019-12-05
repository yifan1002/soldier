<template>
  <div class="outer-box bg-footer clearfix">
    <div ref="footerIndex" class="inner-box">
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  mounted() {
    this.$api.footer
      .footer()
      .then(res => {
        var footer = res.data.data;
        this.$refs.footerIndex.innerHTML = footer;
        // console.log(res.headers.expiredtoken);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.bg-footer {
  background: #003466;
  height: 92px;
  // position: fixed;
  bottom: 0;
  z-index: 9999;
}
.inner-box {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  /deep/ a {
    color: #fff !important;
    font-size: 14px;
  }
  /deep/ p+p{
    font-size: 14px;
  }
  /deep/ .mx-5{
    margin: 0 5px;
  }
}
</style>