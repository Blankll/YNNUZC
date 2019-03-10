<template>
  <div class="login">
    <div class="container">
      <div class="left-desc">
        <div class="ynnu-img"></div>
        <div class="sys-name">大学生综合素质测评系统</div>
      </div>
      <el-tabs type="card" class="right-login">
        <el-tab-pane>
          <span slot="label"><i class="iconfont icon-student"></i>&nbsp;&nbsp;学生登录</span>
          <el-form :model="stuLoginForm" :rules="rules" status-icon ref="ruleForm" class="demo-ruleForm">
            <el-form-item prop="name">
              <el-input type="text" v-model="stuLoginForm.name" auto-complete="off" placeholder="请输入学生用户账号"></el-input>
            </el-form-item>
            <el-form-item prop="pwd">
              <el-input type="password" v-model="stuLoginForm.pwd" auto-complete="off" placeholder="请输入学生用户密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="login-btn" type="primary" @click="stuLoginSubmit">登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="iconfont icon-teacher"></i>&nbsp;&nbsp;管理员登录</span>
          <el-form :model="teaLoginForm" :rules="rules" status-icon ref="ruleForm" class="demo-ruleForm">
            <el-form-item prop="name">
              <el-input type="text" v-model="teaLoginForm.name" auto-complete="off" placeholder="请输入管理员账号"></el-input>
            </el-form-item>
            <el-form-item prop="pwd">
              <el-input type="password" v-model="teaLoginForm.pwd" auto-complete="off" placeholder="请输入管理员密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="login-btn" type="primary" @click="teaLoginSubmit">登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="copyright">云南师范大学 &copy; 2018 - <span ref="YearDate"></span> 极客范技术支持</div>
  </div>
</template>
<script>
export default {
  data () {
    let validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    return {
      stuLoginForm: {
        name: '1443103000244',
        pwd: '104943'
      },
      teaLoginForm: {
        name: '1643205000167',
        pwd: '0707'
      },
      rules: {
        name: [
          { required: true, message: '请输入6-13账号', trigger: 'blur' },
          { min: 6, max: 13, validator: validateName, trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 4, max: 6, message: '请输入6位密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    getNowYear () {
      const date = new Date()
      const year = date.getFullYear()
      this.$refs.YearDate.innerHTML = year
    },
    stuLoginSubmit () {
      this.$axios
        .post('/api/zongce/student/login', {
          ynnu_id: this.stuLoginForm.name,
          password: this.stuLoginForm.pwd
        })
        .then(res => {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('scope', 6)
          this.$router.push({ path: '/student' })
        })
        .catch(res => {})
    },
    teaLoginSubmit () {
      this.$axios
        .post('/api/zongce/admin/login', {
          ynnu_id: this.teaLoginForm.name,
          password: this.teaLoginForm.pwd
        })
        .then(res => {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('scope', res.data.scope)
          this.$router.push({ path: '/admin' })
        })
        .catch(res => {})
    }
  },
  mounted () {
    this.getNowYear()
  }
}
</script>
<style lang="stylus" scoped>
.login
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background url('~@/assets/img/bg2.jpg') center center no-repeat
  background-size cover
  .container
    display flex
    width 880px
    margin 0 auto
    .left-desc
      width 510px
      margin-top 150px
      .ynnu-img
        width 210px
        height 63px
        background url('~@/assets/img/ynnu.gif') center center no-repeat
        background-size cover
      .sys-name
        margin-top 60px
        font-size 32px
        font-family STKaiti
        text-align center
    .right-login
      border-radius 10px
      margin-top 150px
      margin-left 60px
      background rgba(255,255,255,.4)
      .demo-ruleForm
        padding 30px
        .login-btn
          width 100%
  .copyright
    position absolute
    width 100%
    bottom 8px
    font-size 13px
    text-align center
    color #eee
</style>
