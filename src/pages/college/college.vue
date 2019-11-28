<template>
  <div>
    <div class="college-banner outer-box">
      <div class="inner-box">
        <el-carousel
          :interval="4000"
          :autoplay="false"
          type="card"
          height="370px"
          indicator-position="none"
          arrow="always"
        >
          <el-carousel-item v-for="(banner, index) in bannerList" :key="index">
            <router-link
              :to="'articleDetail/' + banner.articleId"
              target="_blank"
              :style="{'background-image' : 'url(http://file.dev.exstudy.com/' + banner.pictureFile + ')'}"
            >
              <h3 class="medium">{{ banner.title }}</h3>
            </router-link>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="inner-box">
      <div class="college-column">
        <div class="college-column-header">
          <router-link to="articleList" class="college-column-more">更多</router-link>
          <span class="college-column-title">阅读文章</span>
        </div>
        <div class="college-column-body">
          <ul class="news-list clearfix">
            <li v-for="(article, index) in articleList" :key="index">
              <router-link :to="{path:'articleDetail/'+article.id}">
                <span class="time">{{ article.auditTime | formatDate('yy-MM-dd') }}</span>
                <span>{{ article.name }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="college-column">
        <div class="college-column-header">
          <router-link to="videosList" class="college-column-more">更多</router-link>
          <span class="college-column-title">视频课</span>
        </div>
        <div class="college-column-body">
          <div class="mine-video-list">
            <mineVideo v-for="(item,index) in vodList" :key="index" :vodList="item" size="mine-video-lg" :class="(index+1)%4==0?'m-r-0':'m-r-20'"></mineVideo>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mineVideo from "../../components/card/mineVideoCard";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      vodList: [
        {
          createTime: 1574678179000,
          vod: {
            intro: "电焊基础手焊基础手法指法指法指法指导",
            viewNum: 12
          }
        },
        {
          createTime: 1574678179000,
          vod: {
            intro: "电焊基础手焊基础手法指法指法指法指导",
            viewNum: 12
          }
        },
        {
          createTime: 1574678179000,
          vod: {
            intro: "电焊基础手焊基础手法指法指法指法指导",
            viewNum: 12
          }
        },
        {
          createTime: 1574678179000,
          vod: {
            intro: "电焊基础手焊基础手法指法指法指法指导",
            viewNum: 12
          }
        },
        {
          createTime: 1574678179000,
          vod: {
            intro: "电焊基础手焊基础手法指法指法指法指导",
            viewNum: 12
          }
        },
        {
          createTime: 1574678179000,
          vod: {
            intro: "电焊基础手焊基础手法指法指法指法指导",
            viewNum: 12
          }
        },
        {
          createTime: 1574678179000,
          vod: {
            intro: "电焊基础手焊基础手法指法指法指法指导",
            viewNum: 12
          }
        },
      ],
      bannerList: [],
      articleList: []
    };
  },
  computed: {
    ...mapState(["token"])
  },
  methods: {
    ...mapMutations(["changeMenu", "changeSubMenu"]),
    articleDetail(e) {
      console.log(e);
      let articleid = e.target.dataset.articleid;
      if (!articleid) articleid = e.path[1].dataset.articleid;
      this.$router.push(`/articleDetail/${articleid}`);
    }
  },
  created() {
    this.changeMenu("training");
    this.changeSubMenu("college");

    // 获取焦点图
    this.$api.news
      .bannerList({})
      .then(res => {
        // console.log(res);
        this.bannerList = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });

    // 获取新闻
    this.$api.news
      .articleList({
        currentPage: 1,
        pageNum: 10,
        orderBy: "audit"
      })
      .then(res => {
        // console.log(res);
        this.articleList = res.data.data.page.list;
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {
    mineVideo
  }
};
</script>

<style lang="scss">
@import "./src/var.scss";
.el-carousel__item {
  position: absolute !important;
}
.college-banner {
  height: 370px;
  background-color: #0053c3;
  padding: 15px 0;
}

.college-column {
  &-header {
    padding: 30px 0 15px;
    border-bottom: 2px solid $c-darken;
    line-height: 1;
  }

  &-title {
    font-size: 26px;
    color: $c-darken;
  }

  &-more {
    float: right;
    margin-top: 15px;
    color: $c-dark;

    &:hover {
      text-decoration: none;
      color: $c-primary;
    }
  }

  &-body {
    padding-top: 15px;
  }

  .news-list {
    margin-right: -44px;

    li {
      float: left;
      width: 578px;
      margin-right: 44px;
      height: 35px;
      line-height: 35px;
      font-size: 16px;
      color: #333;

      a {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: $c-darken;

        &:hover {
          color: $c-primary;

          span.time {
            color: $c-primary;
          }
        }
      }

      span.time {
        float: right;
        margin-left: 10px;
        color: $c-light;
      }
    }
  }
}

.mine-video-list {
  margin-right: -20px;
}

.el-carousel {
  &__item {
    position: relative;

    a {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 7;
      display: block;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    h3 {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 8;
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      *background-color: #000;
      background-color: rgba(0, 0, 0, 0.5);
      text-align: center;
      font-size: 16px;
      color: #fff;
    }
  }

  &__arrow {
    width: 46px !important;
    height: 60px !important;
    background: url(../../assets/img/left.png) no-repeat transparent;
    border-radius: 0 !important;

    i {
      display: none;
    }

    &--right {
      background-image: url(../../assets/img/right.png);
    }
  }
}
</style>
