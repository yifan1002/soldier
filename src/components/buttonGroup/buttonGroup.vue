<template>
  <div class="time-select">
    <div @click="changeDate" class="button-group">
      <a href="javascript:;" data-date="7" :class="page=='0'?'active':'normal'">最近7天</a>
      <a href="javascript:;" data-date="30" :class="page=='1'?'active':'normal'">最近1个月</a>
      <a href="javascript:;" data-date="90" :class="page=='2'?'active':'normal'">最近3个月</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "buttonGroup",
  props: {
    page1: {
      type: Number
    }
  },
  data() {
    return {
      page: 0,
      startDate: "",
      endDate: ""
      // startDates: {
      //   disabledDate() {
      //     this.timeLimitS();
      //   }
      // },
      // endDates: {
      //   disabledDate() {
      //     this.timeLimitE();
      //   }
      // }
    };
  },
  methods: {
    changeDate(e) {
      if (e.target.dataset.date === "7") {
        this.page = "0";
      } else if (e.target.dataset.date === "30") {
        this.page = "1";
      } else if (e.target.dataset.date === "90") {
        this.page = "2";
      }
      this.$emit("change", this.page);
    }
  },
  watch: {
    page1: function(page1) {
      this.page = page1;
    }
  }
};
</script>

<style lang="scss" scoped>
.time-select > div {
  float: left;
}
.button-group {
  margin-top: 30px;
  margin-bottom: 15px;
  a {
    display: inline-block;
    border: 1px solid #eee;
    height: 30px;
    width: 90px;
    text-align: center;
    line-height: 30px;
    color: #555;
    & + a {
      border-left: 0;
    }
    &.active {
      background: #0090f5;
      color: #fff;
      border-color: #0090f5;
    }
    &:first-child {
      border-bottom-left-radius: 2px;
      border-top-left-radius: 2px;
    }
    &:last-child {
      border-bottom-right-radius: 2px;
      border-top-left-radius: 2px;
    }
  }
}
</style>