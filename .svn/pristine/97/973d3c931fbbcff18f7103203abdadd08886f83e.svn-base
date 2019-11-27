<template>
  <div>
    <el-tabs v-model="activeName" class="mytab">
      <el-tab-pane label="文章" name="first">
        <div>
          <a href="javascript:;" class="info-class">
            <span class="info-class-title">坚持和完善我国新型政党制度</span>
            <span class="info-class-time">2019-11-08</span>
          </a>
        </div>
        <div>
          <a href="javascript:;" class="info-class">
            <span class="info-class-title">坚持和完善我国新型政党制度</span>
            <span class="info-class-time">2019-11-08</span>
          </a>
        </div>
        <div>
          <a href="javascript:;" class="info-class">
            <span class="info-class-title">坚持和完善我国新型政党制度</span>
            <span class="info-class-time">2019-11-08</span>
          </a>
        </div>
        <div>
          <a href="javascript:;" class="info-class">
            <span class="info-class-title">坚持和完善我国新型政党制度</span>
            <span class="info-class-time">2019-11-08</span>
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
      activeName: "first"
    };
  },
  components: {
    classVideo
  },
  methods: {
    getLocalTime(nS) {
      return new Date(parseInt(nS))
        .toLocaleString()
        .replace(/:\d{1,2}$/, " ");
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
        console.log(res);
        res.data.list[0].createTime=this.getLocalTime(res.data.list[0].createTime)
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
        console.log(res);
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