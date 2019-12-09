<template>
  <div>
    <el-tabs v-model="activeName" class="mytab" @tab-click="handleClick">
      <el-tab-pane label="视频课" name="first" class="vod-list">
        <div class="page-inner">
          <mineVideoCard
            class="mine-video-card"
            v-for="item in vodList"
            :vodList="item"
            :key="item.id"
          ></mineVideoCard>
        </div>
        <div class="pagination">
          <el-pagination
            layout="prev, pager, next"
            :hide-on-single-page="true"
            :current-page="currentPageVod"
            @current-change="handleCurrentChangeVod"
            :total="totalVod"
            :page-size="12"
          ></el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="资讯课" name="second">
        <div class="page-inner">
          <div v-for="item in articleList" :key="item.articleId">
            <router-link :to="'/info?id='+item.articleId" target="_blank" class="info-class">
              <span class="info-class-title">{{item.articleName}}</span>
              <span class="info-class-time">{{item.lastStudyTime|formatDate('yyyy-MM-dd')}}</span>
            </router-link>
          </div>
        </div>
        <div class="pagination">
          <el-pagination
            layout="prev, pager, next"
            :hide-on-single-page="true"
            :current-page="currentPageArticle"
            @current-change="handleCurrentChangeArticle"
            :total="totalArticle"
            :page-size="10"
          ></el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="线下课" name="third">
        <div class="page-inner">
          <mineOfflineCard v-for="item in lessonList" :key="item.lessonId" :lessonList="item"></mineOfflineCard>
        </div>
        <div class="pagination">
          <el-pagination
            layout="prev, pager, next"
            :hide-on-single-page="true"
            :current-page="currentPageLesson"
            @current-change="handleCurrentChangeLesson"
            :total="totalLesson"
            :page-size="12"
          ></el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import mineVideoCard from "../../components/card/mineVideoCard";
import mineOfflineCard from "../../components/card/mineOfflineCard";
export default {
  name: "classHistory",
  data() {
    return {
      activeName: "first",
      vodList: [],
      articleList: [],
      lessonList: [],
      currentPageVod: 1,
      totalVod: 20,
      currentPageArticle: 1,
      totalArticle: 20,
      currentPageLesson: 1,
      totalLesson: 20
    };
  },
  components: {
    mineVideoCard,
    mineOfflineCard
  },
  methods: {
    handleCurrentChangeVod: function(currentPageVod) {
      this.currentPageVod = currentPageVod;
      this.getVodList();
    },
    handleCurrentChangeArticle: function(currentPageArticle) {
      this.currentPageArticle = currentPageArticle;
      this.getArticleList();
    },
    handleCurrentChangeLesson: function(currentPageLesson) {
      this.currentPageLesson = currentPageLesson;
      this.getLessonList();
    },
    handleClick(tab, event) {
      console.log(tab, event);
      if (tab.name == "first") {
        // 触发‘配置管理’事件
        this.getVodList();
      } else if (tab.name == "second") {
        // 触发‘用户管理’事件
        this.getArticleList()
      } else {
        // 触发‘用户管理’事件
        this.getLessonList();
      }
    },
    getArticleList() {
      // 文章列表
      this.$api.recordList
        .articleRecordList({
          currentPage: this.currentPageArticle,
          rowNum: 10
        })
        .then(res => {
          this.articleList = res.data.data.list;
          this.totalArticle = res.data.data.totalNum;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getVodList() {
      // 视频列表
      this.$api.recordList
        .vodRecordList({
          currentPage: this.currentPageVod,
          rowNum: 10
        })
        .then(res => {
          this.vodList = res.data.data.list;
          this.totalVod = res.data.data.totalNum;
          this.swiperList = res.data.data;
          for (var key of this.vodList) {
            if (key.lastStudyTime) {
              key.time = key.lastStudyTime;
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getLessonList() {
      // 线下课列表
      this.$api.recordList
        .lessonRecordList({
          currentPage: this.currentPageLesson,
          rowNum: 10
        })
        .then(res => {
          this.lessonList = res.data.data.list;
          this.totalLesson = res.data.data.totalNum;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getVodList();
  }
};
</script>

<style lang="scss" scoped>
.mine-video-card {
  margin: 0 20px 20px 0;
}
.vod-list {
  margin-right: -20px;
}
.page-inner {
  min-height: 450px;
}
</style>