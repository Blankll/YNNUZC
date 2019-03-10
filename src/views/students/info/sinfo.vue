<template>
  <el-card>
    <div class="title">学生个人基本信息</div>
    <table class="table table-bordered">
      <tr>
        <th>姓名</th>
        <td>撒地方大师傅</td>
        <th>性别</th>
        <td>男</td>
        <th>籍贯</th>
        <td>云南昆明</td>
        <td rowspan="3">
          <img src="@/assets/img/user.jpg" alt="" class="user-img">
        </td>
      </tr>
      <tr>
        <th>民族</th>
        <td>信息学院</td>
        <th>政治面貌</th>
        <td>团员</td>
        <th></th>
        <td></td>
      </tr>
      <tr>
        <th>学院</th>
        <td>信息学院</td>
        <th>专业</th>
        <td>软件工程</td>
        <th>学号</th>
        <td>1643205000XXX</td>
      </tr>
    </table>
  </el-card>
</template>
<style lang="stylus" scoped>
.el-card
  max-width 1000px
  margin 0 auto
  .title
    text-align center
    line-height 34px
    font-size 20px
    font-weight bold
    margin-bottom 15px
  .user-img
    width 80px
    height 108px
</style>
