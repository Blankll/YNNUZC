<template>
  <div class="no-found">
    <el-card>
      <div class="error-desc">
        <h1 class="title">404</h1>
        <p class="text">404-对不起！您访问的页面不存在！</p>
        <p class="text">
          <span class="el-icon-loading"></span>Opps...page not found!
        </p>
        <p class="text">你可以点击下面的按钮继续</p>
        <div class="link">
          <el-button @click="goBack">返回上一页</el-button>
        </div>
      </div>
      <img src="@/assets/img/404.png" alt="" class="error-img">
    </el-card>
  </div>
</template>
<script>
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.no-found
  position relative
  height 100%
  margin auto
  background #f9f9f9 !important
  .el-card
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    height 400px
    width 800px
    margin auto
    padding 60px 50px
    .error-desc
      float left
      width 360px
      .title
        text-shadow 20px 10px 10px #999
        font-size 72px
      .text
        margin-top 22px
        font-size 16px
      .link
        margin-top 40px
    .error-img
      float right
      width 400px
</style>
