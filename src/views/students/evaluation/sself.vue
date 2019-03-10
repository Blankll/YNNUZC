<template>
  <div class="main-container">
    <div class="div-left">
      <el-steps direction="vertical" :active="active" finish-status="finish">
        <el-step title="品德基础素质" @click.native="clickSteps(0)"></el-step>
        <el-step title="身心基础素质" @click.native="clickSteps(1)"></el-step>
        <el-step title="品德发展素质" @click.native="clickSteps(2)"></el-step>
        <el-step title="社会实践素质" @click.native="clickSteps(3)"></el-step>
        <el-step title="科技创新素质" @click.native="clickSteps(4)"></el-step>
        <el-step title="职业综合素质" @click.native="clickSteps(5)"></el-step>
      </el-steps>
    </div>
    <el-card>
      <router-view class="all-page"></router-view>
    </el-card>
  </div>
</template>
<script>
import Bus from '@/views/common/buss.js'
export default {
  data () {
    return {
      stuScoreForm: {
      },
      active: 0,
      finashiActive: 0
    }
  },
  methods: {
    clickSteps (index) {
      if (index === this.active) {
        this.$message({
          message: '警告，已经在当前步骤，不需要跳转!',
          type: 'warning'
        })
      } else if (index <= this.finashiActive) {
        switch (index) {
          case 0: Bus.$emit('val', index); this.$router.push({ path: 'moralitybase' }); break
          case 1: Bus.$emit('val', index); this.$router.push({ path: 'bodybase' }); break
          case 2: Bus.$emit('val', index); this.$router.push({ path: 'moralityimprove' }); break
          case 3: Bus.$emit('val', index); this.$router.push({ path: 'societypractice' }); break
          case 4: Bus.$emit('val', index); this.$router.push({ path: 'techinovation' }); break
          case 5: Bus.$emit('val', index); this.$router.push({ path: 'professionalcomprehensive' }); break
        }
      } else {
        this.$message.error('错误，当前点击步骤之前有没完成的步骤!')
      }
    }
  },
  mounted () {
    Bus.$on('val', (data) => {
      this.active = data
    })
    Bus.$on('finishAct', (res) => {
      if (res >= this.finashiActive) {
        this.finashiActive = res
      }
    })
    this.$router.push({ path: 'moralitybase' })
  }
}
</script>
<style lang="stylus" scoped>
.main-container
  display flex
  height 100%
  .div-left
    width 230px
    height 400px
  .el-card
    height 100%
    flex 1
</style>
