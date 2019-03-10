<template>
  <el-container>
    <el-header>
      <div class="sys-title"></div>
      <el-menu mode="horizontal" :router="true">
        <el-menu-item index="/student/info/sinfo">个人信息</el-menu-item>
        <el-submenu index="2">
          <template slot="title">自评管理</template>
          <el-menu-item index="/student/evaluation/self">填写自评信息</el-menu-item>
          <el-menu-item index="/student/evaluation/evidence">提交获奖证书</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">综测成绩</template>
          <el-menu-item index="/student/grade/sgrade">个人综测成绩</el-menu-item>
          <el-menu-item index="/student/grade/sgrade_all">历年综测成绩</el-menu-item>
        </el-submenu>
        <el-menu-item index="4" disabled>问题反馈</el-menu-item>
      </el-menu>
      <full-page/>
      <home-user/>
    </el-header>
    <el-main>
      <router-view class="all-page"></router-view>
    </el-main>
  </el-container>
</template>
<script>
import FullPage from '@/views/common/fullpage'
import HomeUser from './components/user'
export default {
  name: 'Slayout',
  components: {
    FullPage,
    HomeUser
  }
}
</script>
<style lang="stylus" scoped>
.el-header
  display flex
  padding 0
  height 60px
  line-height 60px
  background #304156
  .sys-title
    width 180px
    height 60px
    margin 0 30px 0 20px
    background url('~@/assets/img/title.png') center no-repeat
    background-size 100% 100%
  .el-menu
    flex 1
    color #FFF
    background #304156
    .el-menu-item
      color #eee
.screenfull
  color #fff
.el-main
  height 100%
</style>
