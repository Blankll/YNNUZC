<template>
  <el-form ref="" :model="bodyBaseForm">
    <table class="table table-bordered">
      <tr>
        <th rowspan="3" class="table-left-title">发展性素质</th>
        <th colspan="12" class="table-small-title">(二)社会实践素质</th>
      </tr>
      <tr>
        <th colspan="2">演讲、辩论、征文及知识竞赛等</th>
        <th colspan="2">加分原因</th>
        <th colspan="2">社会实践能力</th>
        <th colspan="2">加分原因</th>
        <th colspan="2">宣传能力</th>
        <th colspan="2">加分原因</th>
      </tr>
      <tr>
        <td colspan="2">1</td>
        <td colspan="2">2</td>
        <td colspan="2">3</td>
        <td colspan="2">4</td>
        <td colspan="2">5</td>
        <td colspan="2">6</td>
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
      active: 4
    }
  },
  methods: {
    prevent () {
      Bus.$emit('val', this.active - 2)
      if (this.active > 6) this.active = 0
      this.$router.push({ path: 'moralityimprove' })
    },
    next () {
      Bus.$emit('val', this.active)
      Bus.$emit('finishAct', this.active)
      if (this.active > 6) this.active = 0
      this.$router.push({ path: 'techinovation' })
    }
  }
}
</script>
