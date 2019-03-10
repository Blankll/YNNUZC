<template>
  <el-form ref="" :model="bodyBaseForm">
    <table class="table table-bordered">
      <tr>
        <th rowspan="3" class="table-left-title">发展性素质</th>
        <th colspan="12" class="table-small-title">(三)科技创新素质</th>
      </tr>
      <tr>
        <th>科技竞赛</th>
        <th>加分原因</th>
        <th>科研论文</th>
        <th>加分原因</th>
        <th>科研训练或相关课题</th>
        <th>加分原因</th>
        <th>出版专著(参与编著)</th>
        <th>加分原因</th>
        <th>其他</th>
        <th colspan="3">加分原因</th>
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
        <td colspan="3">10</td>
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
      active: 5
    }
  },
  methods: {
    prevent () {
      Bus.$emit('val', this.active - 2)
      if (this.active > 6) this.active = 0
      this.$router.push({ path: 'societypractice' })
    },
    next () {
      Bus.$emit('val', this.active)
      Bus.$emit('finishAct', this.active)
      if (this.active > 6) this.active = 0
      this.$router.push({ path: 'professionalcomprehensive' })
    }
  }
}
</script>
