<template>
  <div>
    <div class="outer-box clearfix">
      <div class="inner-box mine">
        <Aside></Aside>
        <div class="main-mine">
          <router-view></router-view>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>


import Aside from "../../components/aside/aside";
export default {
  name: "mine",
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    // Header,
    // Footer,
    Aside,
    // MainInfo,
    // MainVideoClass
  }
};
</script>

<style lang="scss" scoped>
.mine{
  margin-top:20px 
}
.main-mine {
  float: left;
  box-sizing: border-box;
  margin:0 0 100px 20px;
  border: 1px solid #e4e4e4;
  width: 990px;
  min-height: 500px;
  padding: 30px;
}
</style>