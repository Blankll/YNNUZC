<template>
  <el-card>
    <el-button type="primary" plain size="small" @click="addMschoolInfo" class="addBtn">添加学院管理员</el-button>
    <el-table :data="mfacultyTable" border :height="tableHeight" v-loading="loading">
      <el-table-column type="index" width="50" align="center"></el-table-column>
      <el-table-column prop="id" label="id" width="80" align="center"></el-table-column>
      <el-table-column prop="scope" label="权限" align="center"></el-table-column>
      <el-table-column prop="ynnu_id" label="账号" width="180" align="center"></el-table-column>
      <el-table-column prop="password" label="密码" width="150" align="center"></el-table-column>
      <el-table-column prop="faculty_id" label="学院" align="center"></el-table-column>
      <el-table-column prop="class_id" label="班级" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" width="220" align="center">
        <template slot-scope="scope">
          <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
          <el-button type="primary" size="mini">查看</el-button>
          <el-button type="warning" size="mini">编辑</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="showAddMfacultyDialog" title="添加学校管理员" width="30%">
      <el-form ref="form" :model="addMachoolForm" label-width="60px">
        <el-form-item label="类型">
          <span class="FormType">学校管理员</span>
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="addMachoolForm.ynnu_id"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="addMachoolForm.password"></el-input>
        </el-form-item>
        <el-form-item label="学院">
          <el-input v-model="addMachoolForm.faculty_id"></el-input>
        </el-form-item>
        <!-- <el-form-item label="班级">
          <el-input v-model="addMachoolForm.class_id"></el-input>
        </el-form-item> -->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showAddMfacultyDialog = false">取 消</el-button>
        <el-button type="primary" @click="sddMschoolSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </el-card>
</template>
<script>
export default {
  data () {
    return {
      tableHeight: window.innerHeight - 200, // 设置table固定高度为浏览器窗口高度减去导航部分高度
      showAddMfacultyDialog: false,
      loading: false,
      // mschoolTable: [], // 管理员列表
      // 存储学校管理员信息table数据
      mfacultyTable: [{
        id: '1',
        scope: '1',
        ynnu_id: '1643205000118',
        password: '5',
        faculty_id: '6',
        class_id: '7'
      },
      {
        id: '23',
        scope: '1',
        ynnu_id: '1643205000118',
        password: '5',
        faculty_id: '6',
        class_id: '7'
      },
      {
        id: '25',
        scope: '1',
        ynnu_id: '1643205000118',
        password: '5',
        faculty_id: '6',
        class_id: '7'
      },
      {
        id: '32',
        scope: '1',
        ynnu_id: '1643205000118',
        password: '5',
        faculty_id: '6',
        class_id: '7'
      },
      {
        id: '35',
        scope: '1',
        ynnu_id: '1643205000118',
        password: '5',
        faculty_id: '6',
        class_id: '7'
      },
      {
        id: '61',
        scope: '1',
        ynnu_id: '1643205000118',
        password: '5',
        faculty_id: '6',
        class_id: '7'
      }],
      addMachoolForm: {
        scope: '1',
        ynnu_id: '',
        password: ''
        // faculty_id: '',
        // class_id: ''
      }
    }
  },
  methods: {
    // 请求管理员列表数据
    getMschoolTable () {
      this.$axios
        .get('/api/nation/index')
        .then(res => {
          this.MschoolTable = res.data
          this.loading = false
        })
        .catch(err => {
          console.log(err)
        })
    },
    addMschoolInfo () {
      this.showAddMschoolDialog = true
    },
    sddMschoolSubmit () {
      this.$axios
        .post('', {
          scope: this.addMachoolForm.scope,
          ynnu_id: this.addMachoolForm.ynnu_id,
          password: this.addMachoolForm.password
          // faculty_id: this.addMachoolForm.faculty_id,
          // class_id: this.addMachoolForm.class_id
        })
        .then(res => {
          this.showAddMschoolDialog = false
          this.$message({
            message: '添加成功',
            type: 'success'
          })
        })
        .catch(res => {})
    }
  },
  mounted () {
    this.getMschoolTable()
  }
}
</script>
<style lang="stylus" scoped>
</style>
