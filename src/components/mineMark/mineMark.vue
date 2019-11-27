<template>
  <div>
    <h3 class="mine-title">赚取积分</h3>
    <mineStudyCard
      class="m-rb-20"
      v-for="(item,index) in msg"
      :msg="item"
      :key="item"
      :class="index==3?'m-r-0':true"
    ></mineStudyCard>
  </div>
</template>

<script>
import mineStudyCard from "../../components/card/mineStudyCard";
export default {
  name: "mineMark",
  data() {
    return {
      msg: [1, 2, 3, 4, 5, 6]
    };
  },
  components: {
    mineStudyCard
  },
  created() {
    this.$api.collect
      .collect({
        collectType: "ARTICLE",
        currentPage: 1,
        pageNum: 10
      })
      .then(res => {
        console.log(res);
        // console.log(res.headers.expiredtoken);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
 
<style lang="scss" scoped>
.m-rb-20 {
  margin: 0 20px 20px 0;
}
.m-r-0 {
  margin-right: 0;
}
</style>