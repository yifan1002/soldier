<template>
  <div>
    <el-tabs v-model="activeName" class="mytab" @tab-click="handleClick">
      <el-tab-pane label="文章" name="first">
        <div style="min-height:350px;">
          <router-link
            v-for="item in articleList"
            :key="item.id"
            :to="{path:'/info?id='+item.id}"
            class="info-class clearfix"
            style="display:block;"
            target="_blank"
          >
            <span class="info-class-time">{{item.createTime|formatDate('yyyy-MM-dd')}}</span>
            {{item.objectName}}
          </router-link>
        </div>
        <div class="pagination">
          <el-pagination
            layout="prev, pager, next"
            :hide-on-single-page="true"
            :current-page="currentPage1"
            @current-change="handleCurrentChange1"
            :total="total1"
            :page-size="10"
          ></el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="视频课" name="second">
        <div style="min-height:350px;">
          <mineVideoCard
            v-for="(item,index) in vodList"
            :key="item.id"
            class="collection"
            :vodList="item"
            :class="(index+1)%4==0?'m-r-0':'m-r-20'"
          ></mineVideoCard>
        </div>
        <div class="pagination">
          <el-pagination
            layout="prev, pager, next"
            :hide-on-single-page="true"
            :current-page="currentPage"
            @current-change="handleCurrentChange"
            :total="total"
            :page-size="12"
          ></el-pagination>
        </div>
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
      vodList: [],
      total: 20,
      total1: 20,
      currentPage: 1,
      currentPage1: 1
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      if (tab.name == "first") {
        // 触发‘配置管理’事件
        this.getArticleList();
      } else {
        // 触发‘用户管理’事件
        this.getvodList();
      } 
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      this.getvodList();
    },
    handleCurrentChange1: function(currentPage1) {
      this.currentPage1 = currentPage1;
      this.getArticleList();
    },
    getvodList() {
      this.$api.collect
        .collectVod({
          collectType: "VOD",
          currentPage: this.currentPage,
          pageNum: 12
        })
        .then(res => {
          this.vodList = res.data.data.list;
          this.total = res.data.data.totalNum;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getArticleList() {
      this.$api.collect
        .collectArticle({
          collectType: "ARTICLE",
          currentPage: this.currentPage1,
          pageNum: 10
        })
        .then(res => {
          this.articleList = res.data.data.list;
          this.total1 = res.data.data.totalNum;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    mineVideoCard
  },
  created() {
    this.getArticleList();
  }
};
</script>

<style>
.pagination {
  text-align: center;
}
</style>