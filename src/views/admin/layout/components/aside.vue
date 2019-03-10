<template>
  <div class="aside">
    <el-menu :collapse="collapse" :router="true">
      <template v-for="(items, index) in Routers">
        <el-submenu v-if="items.children" :index="items.name" :key="index">
          <template slot="title" v-if="getBoolean(items.meta.level)">
            <i :class="items.meta.icon"></i>
            <span>{{items.meta.name}}</span>
          </template>
          <span v-for="(child, i) in items.children" :key="i">
            <el-menu-item v-if="getBoolean(child.meta.level)" :route="child" :index="child.path" >
              {{child.meta.name}}
            </el-menu-item>
          </span>
        </el-submenu>
        <template v-else>
          <el-menu-item :index="items.path" :key="items.path">
            <i :class="items.meta.icon"></i>
            <span slot="title">{{items.meta.name}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import SiderPath from '@/router/siderPath.js'
export default {
  data () {
    return {
      scope: localStorage.getItem('scope'),
      Routers: SiderPath
    }
  },
  methods: {
    getBoolean (level) {
      let scope = Number(localStorage.getItem('scope'))
      // 学校管理员可以查看所有栏目
      if (scope === 1) {
        return true
      }
      // 学院管理员可以查看学院及一下的所有栏目
      if (scope === 2 && level !== 1 && level !== 4 && level !== 6) {
        return true
      }
      // 班级管理员只能查看班级和班级测评单元信息
      if (scope === 3 && (level === 3 || level === 5)) {
        return true
      }
      if (scope === 5 && level === 5) {
        return true
      }
      return false
    }
  },
  props: {
    collapse: Boolean
  }
}
</script>
<style lang="stylus" scoped>
.aside
  height 100%
  background-color #304156
  .el-menu
    border none
    background-color #304156
  .el-menu:not(.el-menu--collapse)
    width 220px
</style>
