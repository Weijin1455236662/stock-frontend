<template>
  <div class="home">
    <el-row>
      <el-col :span="24">
        <em>欢迎来到主页</em>
      </el-col>
    </el-row>
    <el-row class="vertical">
      <el-col class="moduleWrap" :span="6"  :offset="3">
        <h1>这里是模块1</h1>
        <li>企业1</li>
        <li>企业2</li>
      </el-col>
      <el-col class="moduleWrap" :span="6">
        <h1>这里是模块2</h1>
        <li>企业1</li>
        <li>企业2</li>
      </el-col>
      <el-col class="moduleWrap" :span="6">
        <h1>这里是模块3</h1>
        <li>企业1</li>
        <li>企业2</li>
      </el-col>
    </el-row>
    <el-row class="horizontal">
      <el-col :span="18" :offset="3" v-for="(number,index) in modules" :key="index">
        <h1>这里是模块{{number}}</h1>
        <li>企业1</li>
        <li>企业2</li>
      </el-col>
    </el-row>

  </div>
</template>

<script>

export default {
    name: 'Home',
    data(){
        return{
            modules: [1,2,3]
        }
    },
    components: {}
}
</script>

<style>
  .moduleWrap{
    border-left: 1px solid #DCDFE6;
    border-right: 1px solid #DCDFE6;
  }
  .moduleWrap:first-child{
    border-left: 0;
  }
  .moduleWrap:last-child{
    border-right: 0;
  }
  .horizontal{
    text-align: left;
  }
</style>
