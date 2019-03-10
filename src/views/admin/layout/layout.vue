<template>
  <el-container>
    <home-aside :collapse="Collapse" />
    <el-container>
      <el-header>
        <div class="iconfont icon-menu" :class="Active" @click="menuClick"></div>
        <bread-crumb :BreadList="breads"/>
        <full-page/>
        <home-user/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import HomeAside from './components/aside'
import BreadCrumb from './components/breadcrumb'
import FullPage from '@/views/common/fullpage'
import HomeUser from './components/user'
import HomeMain from '@/views/common/main'
export default {
  name: 'Layout',
  components: {
    HomeAside,
    BreadCrumb,
    FullPage,
    HomeUser,
    HomeMain
  },
  data () {
    return {
      Collapse: false,
      isActive: false,
      breads: []
    }
  },
  methods: {
    menuClick () {
      this.Collapse = !this.Collapse
      this.isActive = !this.isActive
    }
  },
  computed: {
    Active () {
      return this.isActive ? 'rotateGo' : 'rotateBack'
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~css/base.styl'
.el-header
  display flex
  padding 0 4px
  height 50px !important
  line-height 50px
  border-bottom 1px solid #e6e6e6
  background-color #fff
  .icon-menu
    width 40px
    line-height 40px
    margin 5px 0
    font-size 30px
    cursor pointer
    text-align center
  .rotateGo
    rotateA()
  .rotateBack
    rotateB()
  .el-breadcrumb
    flex 1
    margin-left 10px
    line-height 50px
</style>
