<template>
  <div class="inner-box clearfix">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">教育培训</el-breadcrumb-item>
        <el-breadcrumb-item>资讯课程</el-breadcrumb-item>
        <el-breadcrumb-item>课程详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="info">
      <h1 class="info-title">{{infoClass.name}}</h1>
      <p class="info-msg">
        浏览：{{infoClass.viewNum}}万
        <span>|</span>
        <span v-if="infoClass.createTime">
        发布时间：{{infoClass.createTime | formatDate('yyyy-MM-dd')}}
        </span>
        <span>|</span>
        来源：<span v-text="infoClass.editor?+infoClass.editor:'未知'"></span>
        <span>|</span>
        课程分类：{{infoClass.sortName}}
      </p>
      <div class="info-content" ref="infoContent"></div>
    </div>
    <div class="info-footer">
      <a @click="collect" v-if="isGood" href="javascript:;" class="btn-info btn-info-click">
        <i class="zan-white"></i>已赞
      </a>
      <a @click="collect" v-else href="javascript:;" class="btn-info">
        <i class="zan-gray"></i>点赞
      </a>
      <a @click="good" v-if="isCollect" href="javascript:;" class="btn-info btn-info-click">
        <i class="xin-white"></i>已收藏
      </a>
      <a @click="good" v-else href="javascript:;" class="btn-info">
        <i class="xin-gray"></i>收藏
      </a>
    </div>
    <!-- <div @click="fn">111</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isGood: true,
      isCollect: true,
      infoClass: {},
      infoId: ""
    };
  },
  methods: {
    collect() {
      this.$api.info
        .clickCollect({
          collect: this.isCollect,
          id: this.infoId
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    good() {
      this.$api.info
        .clickGood({
          collect: this.isGood,
          id: this.infoId
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getInfo() {
      this.$api.info
        .info({
          id: this.infoId
        })
        .then(res => {
          console.log(res);
					this.isGood = res.data.data.isGood;
          this.isCollect = res.data.data.isCollect;
          this.infoClass = res.data.data.article;
          this.$refs.infoContent.innerHTML = this.infoClass.contentFile;
        })
        .catch(err => {        
          if(err.data.code){
            this.$router.push('/accumulatePoints')
          }
        });
    }
    // fn() {
    //   this.$api.collectVod
    //     .collectVod({
    //       collect: true,
    //       id: 1
    //     })
    //     .then(res => {
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
  },
  created() {
    // var url = this.$route.path;
    // url = url.substring(url.lastIndexOf("/"), url.length);
    // this.infoId = url.slice(1);
		this.infoId = this.$route.query.id;
  },
  mounted() {
    this.getInfo();
  },
	updated() {
		document.title = `${this.infoClass.name} - 资讯课程 - 教育培训`
	}
};
</script>

<style scoped lang="scss">
.zan-gray {
  display: inline-block;
  vertical-align: middle;
  background: url("../../assets/icon/zan_gray.png") no-repeat;
  width: 18px;
  height: 25px;
  margin-right: 5px;
}
.zan-white {
  display: inline-block;
  vertical-align: middle;
  background: url("../../assets/icon/zan_white.png") no-repeat;
  width: 18px;
  height: 25px;
  margin-right: 5px;
}
.xin-gray {
  display: inline-block;
  vertical-align: middle;
  background: url("../../assets/icon/shoucang_gray.png") no-repeat;
  width: 18px;
  height: 20px;
  margin-right: 5px;
}
.xin-white {
  display: inline-block;
  vertical-align: middle;
  background: url("../../assets/icon/xing_white.png") no-repeat;
  width: 18px;
  height: 20px;
  margin-right: 5px;
}
.breadcrumb {
  margin-top: 20px;
}
.btn-info {
  display: inline-block;
  box-sizing: border-box;
  width: 130px;
  height: 40px;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  line-height: 40px;
  color: #333;
  & + & {
    margin-left: 10px;
  }
  &-click {
    background: #0090f5;
    color: #fff;
  }
}
.info {
  text-align: center;
  margin: 0 auto;
  min-height: 800px;
  &-content {
    width: 1000px;
    margin: 0 auto;
    text-align: left;
    padding-top: 50px;
    /deep/ p {
      color: #333;
      font-size: 18px;
      line-height: 32px;
      & + p {
        margin-top: 30px;
      }
    }
  }
  &-title {
    font-size: 34px;
    color: #333;
    margin: 65px 0 25px 0;
  }
  &-msg {
    color: #666;
    font-size: 14px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e4e4e4;
    span {
      margin: 0 20px;
    }
  }
  &-footer {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>