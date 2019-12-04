<template>
  <div>
    <div v-if="!pointList.length">
      没有记录没有记录没有记录没有记录没有记录没有记录
    </div>
    <table v-else>
      <thead>
        <tr>
          <td>行为</td>
          <td>时间</td>
          <td>积分</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="point in pointList" :key="point.id">
          <td>{{point.pointRemark}}</td>
          <td>{{point.behaviorTime|formatDate('yyyy-MM-dd   hh:mm:ss')}}</td>
          <td>+{{point.pointValue}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    pointList: {
      type: Array
    },
    page:{
      type: Number
    }
  },
  name: "tableA",

  mounted() {
    console.log(this.pointList);
  }
};
</script>

<style scoped lang="scss">
table {
  border-spacing: 0;
  border-collapse: collapse;
  text-align: center;
}
thead {
  background: #f6f6f6;
}
tbody {
  td:last-child {
    color: #1baf2c;
  }
}
td {
  height: 44px;
  width: 309px;
  border: 1px solid #e4e4e4;
  vertical-align: middle;
  color: #333;
  font-size: 16px;
}
</style>