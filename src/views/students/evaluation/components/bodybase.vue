<template>
  <el-form ref="" :model="bodyBaseForm">
    <table class="table table-bordered">
      <tr>
        <th rowspan="4" class="table-left-title">基础性素质</th>
        <th colspan="12" class="table-small-title">(二)身心基础素质</th>
      </tr>
      <tr>
        <th rowspan="2">体育成绩</th>
        <th rowspan="2">心理品质</th>
        <th rowspan="2">审美情趣</th>
        <th colspan="2">出勤情况</th>
        <th colspan="3">体育锻炼态度</th>
        <th rowspan="2">军训</th>
        <!-- <th rowspan="2">扣分</th>
        <th rowspan="2" colspan="2">扣分原因</th> -->
      </tr>
      <tr>
        <th>体育课出勤</th>
        <th>体育活动出勤</th>
        <th>
          <el-tooltip class="item" effect="dark" content="长期自觉坚持体育锻炼" placement="top">
            <span class="tooltip">①</span>
          </el-tooltip>
        </th>
        <th>
          <el-tooltip class="item" effect="dark" content="积极参加院系班级体育训练" placement="top">
            <span class="tooltip">②</span>
          </el-tooltip>
        </th>
        <th>
          <el-tooltip class="item" effect="dark" content="参加校级体育活动团体项目" placement="top">
            <span class="tooltip">③</span>
          </el-tooltip>
        </th>
      </tr>
      <tr>
        <td>
          <el-select v-model="bodyBaseForm.political">
            <el-option :label="item" :value="item" v-for="(item, index) in number1" :key='index'></el-option>
          </el-select>
        </td>
        <td>
          <el-select v-model="bodyBaseForm.political">
            <el-option :label="item" :value="item" v-for="(item, index) in number2" :key='index'></el-option>
          </el-select>
        </td>
        <td>
          <el-select v-model="bodyBaseForm.political">
            <el-option :label="item" :value="item" v-for="(item, index) in number2" :key='index'></el-option>
          </el-select>
        </td>
        <td>
          <el-select v-model="bodyBaseForm.political">
            <el-option :label="item" :value="item" v-for="(item, index) in number2" :key='index'></el-option>
          </el-select>
        </td>
        <td>
          <el-select v-model="bodyBaseForm.political">
            <el-option :label="item" :value="item" v-for="(item, index) in number2" :key='index'></el-option>
          </el-select>
        </td>
        <td>
          <el-select v-model="bodyBaseForm.political">
            <el-option :label="item" :value="item" v-for="(item, index) in number4" :key='index'></el-option>
          </el-select>
        </td>
        <td>
          <el-select v-model="bodyBaseForm.political">
            <el-option :label="item" :value="item" v-for="(item, index) in number4" :key='index'></el-option>
          </el-select>
        </td>
        <td>
          <el-select v-model="bodyBaseForm.political">
            <el-option :label="item" :value="item" v-for="(item, index) in number4" :key='index'></el-option>
          </el-select>
        </td>
        <td>
          <el-select v-model="bodyBaseForm.political">
            <el-option :label="item" :value="item" v-for="(item, index) in number3" :key='index'></el-option>
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
        <el-col :span="8"><el-button plain type="info" @click="prevent" class="table-btn">返回上一步</el-button></el-col>
        <el-col :span="16"><el-button plain type="primary" @click="nextStep" class="table-btn">提交并下一步</el-button></el-col>
      </el-row>
  </el-form>
</template>
<script>
import Bus from '@/views/common/buss.js'
export default {
  name: 'StudentBodyBase',
  data () {
    return {
      number1: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      number2: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      number3: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      number4: [5, 4, 3, 2, 1, 0],
      bodyBaseForm: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
      },
      MoreData: false,
      moreDataUpdate: {},
      active: 2
    }
  },
  methods: {
    prevent () {
      Bus.$emit('val', this.active - 2)
      if (this.active > 6) this.active = 0
      this.$router.push({ path: 'moralitybase' })
    },
    nextStep () {
      Bus.$emit('val', this.active)
      Bus.$emit('finishAct', this.active)
      if (this.active > 6) this.active = 0
      this.$router.push({ path: 'moralityimprove' })
    },
    showMoreData () {
      this.MoreData = true
    },
    beforeupload (file) {
      console.log(file)
      console.log(file.name)
    },
    submitData () {
      this.MoreData = false
    }
  }
}
</script>
