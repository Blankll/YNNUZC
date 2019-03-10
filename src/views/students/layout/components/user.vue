<template>
  <div>
    <el-dropdown trigger="click">
      <div>
        <img src="@/assets/img/user.jpg" class="user-img">
        <i class="el-icon-caret-bottom el-icon--right dropdown-icon"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item @click.native="stuLoginout">注 销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  data () {
    return {
      Authorization: localStorage.getItem('token'),
      user: {}
    }
  },
  methods: {
    stuLoginout () {
      this.$confirm('是否要注销登录?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$axios
            .post('/api/zongce/student/loginout')
            .then(res => {
              localStorage.clear()
              this.$router.push({ path: '/login' })
            })
            .catch(res => {})
        })
        .catch(() => {
          this.$message({
            message: '取消注销',
            type: 'warning'
          })
        })
    }
  }
}
</script>
<style lang="stylus" scoped>
.el-dropdown
  width 80px
  margin-right 10px
  cursor pointer
  .user-img
    float left
    height 36px
    width 36px
    margin 7px 0
    border-radius 50%
  .dropdown-icon
    display inline-block
</style>
