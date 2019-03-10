<template>
  <el-form ref="" :model="bodyBaseForm">
    <table class="table table-bordered">
      <tr>
        <th rowspan="3" class="table-left-title">发展性素质</th>
        <th colspan="12" class="table-small-title">(四)职业综合素质</th>
      </tr>
      <tr>
        <th>师范生技能</th>
        <th>加分原因</th>
        <th>职业技术能力</th>
        <th>加分原因</th>
        <th>外语能力</th>
        <th>加分原因</th>
        <th>计算机运用能力</th>
        <th>加分原因</th>
        <th>体育能力</th>
        <th>加分原因</th>
        <th>艺术活动能力</th>
        <th>加分原因</th>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
      </tr>
    </table>
    <el-row :gutter="20">
      <el-col :span="8"><el-button plain type="info" @click="prevent" class="table-btn">返回上一步</el-button></el-col>
      <el-col :span="16"><el-button plain type="primary" @click="next" class="table-btn">提交并结束</el-button></el-col>
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
      active: 6
    }
  },
  methods: {
    prevent () {
      Bus.$emit('val', this.active - 2)
      if (this.active > 7) this.active = 0
      this.$router.push({ path: 'techinovation' })
    },
    next () {
      Bus.$emit('val', this.active)
      Bus.$emit('finishAct', this.active)
      this.$confirm('填写完毕, 可预览填写结果', '提示', {
        confirmButtonText: '预览',
        cancelButtonText: '关闭',
        type: 'success'
      }).then(() => {
        this.$router.push({ path: '/student/evaluation/evaluationresult' })
      }).catch(() => {})
    }
  }
}
</script>
