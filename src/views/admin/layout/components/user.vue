<template>
  <div>
    <el-dropdown trigger="click">
      <div>
        <img src="@/assets/img/user.jpg" class="user-img">
        <i class="el-icon-caret-bottom el-icon--right dropdown-icon"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>
          <div @click="teaLogout">退 出</div>
        </el-dropdown-item>
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
    teaLogout () {
      if (localStorage.getItem('scope') && Number(localStorage.getItem('scope')) === 6) {
        this.loginOut('/api/zongce/student/loginout')
      } else {
        this.loginOut('/api/zongce/admin/loginout')
      }
    },
    loginOut (uri) {
      this.$axios.post(uri)
        .then(res => {
          localStorage.removeItem('token')
          localStorage.removeItem('scope')
          this.$router.push({ path: '/login' })
        })
        .catch(res => {
          localStorage.removeItem('token')
          localStorage.removeItem('scope')
          this.$router.push({ path: '/login' })
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
