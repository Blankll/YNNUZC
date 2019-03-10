<template>
  <el-form ref="" :model="bodyBaseForm">
    <table class="table table-bordered">
      <tr>
        <th rowspan="3" class="table-left-title">发展性素质</th>
        <th colspan="12" class="table-small-title">(一)品德发展素质</th>
      </tr>
      <tr>
        <th colspan="2">学生干部工作绩效</th>
        <th>先进个人</th>
        <th colspan="2">加分原因</th>
        <th>先进集体</th>
        <th colspan="2">加分原因</th>
        <th colspan="2">精神文明建设</th>
        <th colspan="2">加分原因</th>
      </tr>
      <tr>
        <td colspan="2">1</td>
        <td>2</td>
        <td colspan="2">3</td>
        <td>4</td>
        <td colspan="2">5</td>
        <td colspan="2">6</td>
        <td colspan="2">7</td>
      </tr>
    </table>
    <el-row :gutter="20">
      <el-col :span="8"><el-button plain type="info" @click="prevent" class="table-btn">返回上一步</el-button></el-col>
      <el-col :span="16"><el-button plain type="primary" @click="next" class="table-btn">提交并下一步</el-button></el-col>
    </el-row>
  </el-form>
</template>
<script>
import Bus from '@/views/common/buss.js'
export default {
  name: 'StudentBodyBase',
  data () {
    return {
      bodyBaseForm: {},
      active: 3
    }
  },
  methods: {
    prevent () {
      Bus.$emit('val', this.active - 2)
      if (this.active > 6) this.active = 0
      this.$router.push({ path: 'bodybase' })
    },
    next () {
      Bus.$emit('val', this.active)
      Bus.$emit('finishAct', this.active)
      if (this.active > 6) this.active = 0
      this.$router.push({ path: 'societypractice' })
    }
  }
}
</script>
