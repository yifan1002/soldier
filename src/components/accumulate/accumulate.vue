<template>
  <div>
    <div class="mine-study-box">
      <div class="clearfix">
        <h3 class="mine-title">我的积分</h3>
        <div class="mine-top">
          <div class="mine-mark">
            <p>
              <span class="mine-mark-num">成长总积分:</span>
              <span class="mine-mark-word">{{totalPoint}}</span>
            </p>
          </div>
          <div class="mine-mark">
            <p>
              <span class="mine-mark-num">今日累计分:</span>
              <span class="mine-mark-word">{{todayPoint}}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="clearfix">
        <buttonGroup style="float:left;" :page1="page1" @change="getPage"></buttonGroup>
        <div class="date-select">
          <i class="select-icon second"></i>
          <el-date-picker
            @change="change1"
            v-model="startDate"
            :clearable="false"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptionsStart"
            class="date-top clearfix"
            :editable="false"
          ></el-date-picker>
          <i class="select-icon first"></i>
          <el-date-picker
            :editable="false"
            @change="change2"
            v-model="endDate"
            :picker-options="pickerOptionsEnd"
            type="date"
            placeholder="选择日期"
            :clearable="false"
            class="date-top clearfix"
          ></el-date-picker>
        </div>
      </div>
      <div class="clearfix">
        <tableA :pointList="pointList"></tableA>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :hide-on-single-page="true"
        :current-page="currentPage"
        @current-change="handleCurrentChange"
        :total="total"
        :page-size="10"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import buttonGroup from "../../components/buttonGroup/buttonGroup";
import tableA from "../../components/table/table";
export default {
  data() {
    return {
      pointList: [],
      startDate: "",
      endDate: "",
      timeSub: 0,
      page: "0",
      page1: 1,
      dateSelect: 7,
      totalPoint: 0,
      todayPoint: 0,
      pickerOptionsStart: this.beginTime(),
      pickerOptionsEnd: this.endTime(),
      total: 0,
      currentPage: 1,
      pageNum: 10
    };
  },
  methods: {
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      this.getList();
    },
    beginTime() {
      return {
        disabledDate: time => {
          return time > new Date(this.endDate);
        }
      };
    },
    endTime() {
      return {
        disabledDate: time => {
          return time > new Date() || time < new Date(this.startDate);
        }
      };
    },

    dateClear(date) {
      return date
        .toLocaleString()
        .slice(0, 10)
        .split("/")
        .map(item => {
          item = parseInt(item);
          if (parseInt(item) < 10) {
            return "0" + item;
          } else {
            return item;
          }
        })
        .join("-");
    },
    defaultDate() {
      if (this.page === "0") {
        this.dateSelect = 7;
      } else if (this.page === "1") {
        this.dateSelect = 30;
      } else if (this.page === "2") {
        this.dateSelect = 90;
      }
      var myDate = new Date();
      this.endDate = this.dateClear(myDate);
      this.startDate = this.dateClear(
        new Date(myDate - 1 + 1 - this.dateSelect * 24 * 60 * 60 * 1000)
      );
    },
    getPage(e) {
      this.page = e;
    },
    getList() {
      console.log(this.startDate);
      this.$api.pointRecord
        .pointRecord({
          currentPage: this.currentPage,
          pageNum: 10,
          startDate: this.startDate,
          endDate: this.endDate
        })
        .then(res => {
          this.totalPoint = res.data.data.totalPoint;
          this.todayPoint = res.data.data.todayPoint;
          this.pointList = res.data.data.page.list;
          this.total = res.data.data.page.totalNum;
        })
        .catch(err => {
          console.log(err);
        });
    },
    change1(e) {
      this.currentPage = 1;
      this.page1 = Math.random();
      this.startDate = this.dateClear(e);
      this.getList();
    },
    change2(e) {
      this.currentPage = 1;
      this.page1 = Math.random();
      this.endDate = this.dateClear(e);
      this.getList();
    }
  },
  components: {
    buttonGroup,
    tableA
  },
  created() {
    this.defaultDate();
    this.getList();
  },
  watch: {
    page: function() {
      this.currentPage = 1;
      this.defaultDate();
      this.getList();
    }
  }
};
</script>

<style scoped lang="scss">
.mine-study-box {
  min-height: 800px;
}
.pagination {
  text-align: center;
}
.date-select {
  position: relative;
}
.select-icon {
  width: 40px;
  height: 30px;
  background: url("../../../src/assets/icon/rili.png") no-repeat;
  background-position-y: 10px;
  z-index: 999;
  &.first {
    position: absolute;
    top: 32px;
    left: 400px;
  }
  &.second {
    position: absolute;
    top: 32px;
    left: 560px;
  }
}
.date-top {
  float: left;
  margin: 36px 0 0 20px;
  width: 140px;
  /deep/ .el-input__inner {
    height: 30px;
    line-height: 30px;
    border-radius: 0;
    width: 140px;
    padding-left: 10px;
  }
  /deep/ .el-icon-date::before {
    display: none;
  }
  /deep/.el-input__icon {
    position: relative;
    top: -3px;
  }
  /deep/ .el-icon-circle-close:before {
    background: #0044c2;
    content: "";
  }
}
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