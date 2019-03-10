<template>
  <el-card>
    <el-form :inline="true" ref="form" :model="filterClassForm" label-width="50px" size="small">
      <el-form-item>
        <el-button type="primary" plain @click="addMclassInfo" class="addBtn">添加班级管理员</el-button>
      </el-form-item>
      <el-form-item label="年份">
        <el-select v-model="filterClassForm.region" placeholder="全部">
          <el-option :label="item" :value="item" v-for="item in nowDateArr" :key="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学院">
        <el-select v-model="filterClassForm.region" :placeholder="fplaceholder" :disabled="fdisabled">
          <el-option label="区域一" value="shanghai" v-for="item in facultyList" :key="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="班级">
        <el-select v-model="filterClassForm.region" :placeholder="cplaceholder" :disabled="cdisabled">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="filterSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="mfacultyTable" border :height="tableHeight" v-loading="loading">
      <el-table-column type="index" width="50" align="center"></el-table-column>
      <el-table-column prop="id" label="id" width="80" align="center"></el-table-column>
      <el-table-column prop="scope" label="权限" align="center"></el-table-column>
      <el-table-column prop="ynnu_id" label="账号" width="180" align="center"></el-table-column>
      <el-table-column prop="password" label="密码" width="150" align="center"></el-table-column>
      <el-table-column prop="faculty_id" label="学院" align="center"></el-table-column>
      <el-table-column prop="class_id" label="班级" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" width="220" align="center">
        <template>
          <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
          <el-button type="primary" size="mini">查看</el-button>
          <el-button type="warning" size="mini">编辑</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="showAddMclassDialog" title="添加学校管理员" width="30%">
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
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showAddMclassDialog = false">取 消</el-button>
        <el-button type="primary" @click="addMclassSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </el-card>
</template>
<script>
export default {
  data () {
    return {
      scope: localStorage.getItem('scope'),
      nowDateArr: [],
      fplaceholder: '全部',
      fdisabled: false,
      cplaceholder: '全部',
      cdisabled: false,
      facultyList: [
        { name: '信息学院', id: 1 }
      ], // 全部学院列表
      classList: [], // 所属学院的班级列表 数据联动
      tableHeight: window.innerHeight - 200, // 设置table固定高度为浏览器窗口高度减去导航部分高度
      showAddMclassDialog: false,
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
      },
      filterClassForm: {
      }
    }
  },
  methods: {
    getNowYear () {
      // 获取当前年份并赋值数组
      const date = new Date()
      let year = date.getFullYear()
      for (let i = 2019; i <= year; i++) {
        this.nowDateArr.push(i)
      }
    },
    getScopeDis () {
      if (this.scope === 2) {
        // 学院管理员
        this.fdisabled = true
        this.fplaceholder = '' // 当前用户所著学院
        this.cdisabled = false
        // 班级列表
      } else if (this.scope === 3 || this.scope === 5) {
        // 班级或自评小组
        this.fdisabled = true
        this.fplaceholder = '' // 当前用户所著学院
        this.cdisabled = true
        this.cplaceholder = '' // 当前用户所在班级
      }
      // else {
      //   this.fdisabled = false
      //   this.fplaceholder = '' // 全部学院列表
      //   this.cdisabled = false
      //   this.cplaceholder = '' // 全部班级列表
      // }
      console.log(this.scope)
    },
    // 请求管理员列表数据
    getMschoolTable () {
      this.$axios
        .get('/api/zongce/admin/1')
        .then(res => {
          this.MschoolTable = res.data
          this.loading = false
        })
        .catch(err => {
          console.log(err)
        })
    },
    addMclassInfo () {
      this.showAddMclassDialog = true
    },
    addMclassSubmit () {
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
    },
    filterSubmit () {
      // 查询按钮
    }
  },
  mounted () {
    this.getMschoolTable()
    this.getNowYear()
    this.getScopeDis()
  }
}
</script>
<style lang="stylus" scoped>
</style>
