<template>
  <div>
    <el-tabs v-model="activeName" class="mytab">
      <el-tab-pane label="文章" name="first">
        <div>
          <router-link 
            v-for="item in articleList"
            :key="item.id"
            :to="{path:'articleDetail',query:{id:item.id}}"
            class="info-class"
            style="display:block;"
          >
            <span class="info-class-time">{{item.createTime|formatDate('YYYY-MM-DD')}}</span>
            {{item.objectName}}
          </router-link>
        </div>
      </el-tab-pane>
      <el-tab-pane label="视频课" name="second">
        <mineVideoCard
          v-for="(item,index) in vodList"
          :key="item.id"
          class="collection"
          :vodList="item"
          :class="(index+1)%4==0?'m-r-0':'m-r-20'"
        ></mineVideoCard>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import mineVideoCard from "../../components/card/mineVideoCard";
export default {
  name: "collection",
  data() {
    return {
      activeName: "first",
      articleList: [],
      vodList: []
    };
  },
  components: {
    mineVideoCard
  },
  created() {
    this.$api.collect
      .collect({
        collectType: "ARTICLE",
        currentPage: 1,
        pageNum: 10
      })
      .then(res => {
        this.articleList = res.data.data.list;
      })
      .catch(err => {
        console.log(err);
      });
    this.$api.collect
      .collect({
        collectType: "VOD",
        currentPage: 1,
        pageNum: 10
      })
      .then(res => {
        this.vodList = res.data.data.list;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.collection .mine-video-footer-right {
  display: none;
}
</style>