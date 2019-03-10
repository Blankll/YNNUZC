<template>
    <el-form ref="" :model="baseDataForm">
      <table class="table table-bordered">
        <tr>
          <th rowspan="3" class="table-left-title">基础性素质</th>
          <th colspan="12" class="table-small-title">品德基础素质(定性考评，必填)</th>
        </tr>
        <tr>
          <th colspan="2">政治表现</th>
          <th colspan="2">遵纪守法</th>
          <th colspan="2">社会公德</th>
          <th colspan="2">个人品质</th>
          <th colspan="2">人际关系</th>
          <th colspan="2">劳动表现</th>
        </tr>
        <tr>
          <td colspan="2">
            <el-select v-model="baseDataForm.political">
              <el-option :label="item" :value="item" v-for="(item, index) in number1" :key='index'></el-option>
            </el-select>
          </td>
          <td colspan="2">
            <el-select v-model="baseDataForm.compliance">
              <el-option :label="item" :value="item" v-for="(item, index) in number2" :key='index'></el-option>
            </el-select>
          </td>
          <td colspan="2">
            <el-select v-model="baseDataForm.morality">
              <el-option :label="item" :value="item" v-for="(item, index) in number2" :key='index'></el-option>
            </el-select>
          </td>
          <td colspan="2">
            <el-select v-model="baseDataForm.quality">
              <el-option :label="item" :value="item" v-for="(item, index) in number1" :key='index'></el-option>
            </el-select>
          </td>
          <td colspan="2">
            <el-select v-model="baseDataForm.relationship">
              <el-option :label="item" :value="item" v-for="(item, index) in number1" :key='index'></el-option>
            </el-select>
          </td>
          <td colspan="2">
            <el-select v-model="baseDataForm.performance">
              <el-option :label="item" :value="item" v-for="(item, index) in number1" :key='index'></el-option>
            </el-select>
          </td>
        </tr>
      </table>
      <el-button type="primary" @click="showMoreData" class="addMoreData"><i class="el-icon-upload el-icon--right"></i>&nbsp;添加定量考评数据</el-button>
      <el-dialog :visible.sync="MoreData" width="40%" title="提示" class="Formdialog">
        <el-form ref="form" :model="moreDataUpdate" label-width="80px">
          <el-form-item label="类型">
            <el-select placeholder="请选择定量考评类型">
              <el-option label="扣分" value="扣分"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="原因说明">
            <el-input  type="textarea" class="textarea"></el-input>
          </el-form-item>
          <el-upload drag action="https://jsonplaceholder.typicode.com/posts/" multiple :show-file-list="true" :before-upload="beforeupload">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将<em>证明文件</em>拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form>
         <span slot="footer" class="dialog-footer">
          <el-button @click="MoreData = false">取 消</el-button>
          <el-button type="primary" @click="submitData">确 定</el-button>
        </span>
      </el-dialog>
      <el-row :gutter="20">
        <el-col :span="24"><el-button plain type="primary" @click="nextStep" class="table-btn">提交并下一步</el-button></el-col>
      </el-row>
    </el-form>
</template>
<script>
import Bus from '@/views/common/buss.js'
export default {
  name: 'StudentMoralityBase',
  data () {
    return {
      number1: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      number2: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      baseDataForm: {
        political: '0',
        compliance: '0',
        morality: '0',
        quality: '0',
        relationship: '0',
        performance: '0'
      },
      moreDataUpdate: {},
      active: 1,
      MoreData: false
    }
  },
  methods: {
    nextStep () {
      Bus.$emit('val', this.active)
      Bus.$emit('finishAct', this.active)
      if (this.active > 6) this.active = 0
      this.$router.push({ path: 'bodybase' })
      console.log(this.baseDataForm)
    },
    showMoreData () {
      this.MoreData = true
    },
    submitData () {
      this.MoreData = false
    },
    beforeupload (file) {
      console.log(file)
      console.log(file.name)
    }
  }
}
</script>
<style lang="stylus" scoped>
.el-input
  max-width 72px
.el-dialog
  .el-select
    width 100%
</style>
