<template>
  <div>
    <el-tabs v-model="activeName" class="mytab">
      <el-tab-pane label="文章" name="first">
        <div>
          <a v-for="item in articleList" :key="item.id" href="javascript:;" class="info-class">
            <span class="info-class-title" v-text="item.objectName"></span>
            <span class="info-class-time"> {{item.createTime|formatTime}}</span>
          </a>
        </div>
      </el-tab-pane>
      <el-tab-pane label="视频课" name="second">
        <classVideo class="collection"></classVideo>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import classVideo from "../../components/classVideo/classVideo";
export default {
  name: "collection",
  data() {
    return {
      activeName: "first",
      articleList: []
    };
  },
  components: {
    classVideo
  },
  methods: {
    getLocalTime(nS) {
      return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/, " ");
    }
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
        console.log(res, 123);
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