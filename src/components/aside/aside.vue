<template>
  <div class="tab-mine">
    <ul @click="changeValue">
      <li v-for="(item,index) in listItem" :key="index">
        <router-link
          :to="item.path"        
          href="javascript:;"
          :data-i="item.path"
        >{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      listItem: [
        { title: "我的学习", path: "mineStudy" },
        { title: "学习记录", path: "mineHistory" },
        { title: "我的收藏", path: "collection" },
        { title: "积分明细", path: "accumulatePoints" }
      ],
      pagetype: ""
    };
  },
  methods: {
    changeValue(e) {
      if (e.target.nodeName == "A") {
        this.pagetype = e.target.dataset.i;
      }
    },
    ...mapMutations(["changeMenu", "changeSubMenu"])
  },
  created() {
    this.pagetype = this.$route.path.slice(6);
    this.changeMenu("interspace");
  }
};
</script>

<style lang="scss">
.tab-mine {
  float: left;
  box-sizing: border-box;
  width: 190px;
  height: 500px;
  border: 1px solid #e4e4e4;
  ul {
    margin-top: 20px;
  }
  li {
    font-size: 16px;
    line-height: 48px;

    a {
      display: inline-block;
      padding-left: 30px;
      color: #333;
      border-left: 4px solid transparent;
      line-height: 30px;
      &:hover {
        color: $c-primary;
      }
      &.router-link-active {
        color: $c-primary;
        border-left: 4px solid $c-primary;
      }
    }
  }
}
</style>