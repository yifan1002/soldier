<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>行为</td>
          <td>时间</td>
          <td>积分</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "tableA"
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