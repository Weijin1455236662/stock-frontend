<template>
  <div class="topBarWrap">
    <el-menu
      :default-active="activeIndex"
      class="topBar"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#000000"
    >
      <el-menu-item class="home" index="/home"><i class="icon el-icon-s-home"></i>首页</el-menu-item>
      <el-submenu index="2" class="industry">
        <template slot="title"><i class="icon el-icon-s-data"></i>行业</template>
        <el-menu-item v-for="(industry, index) in industries" :key="index" class="industry-item" :index="'/industry/'+industry.id">
          <i class="icon el-icon-s-data"></i>{{industry.name}}
        </el-menu-item>
      </el-submenu>
      <el-menu-item class="predict" index="/predict"><i class="icon el-icon-s-marketing"></i>预测</el-menu-item>
    </el-menu>
    <div class="searchWrap">
      <el-input
        class="search"
        v-model="searchContent"
        placeholder="输入要搜索的代码..."
        @keydown.13.native="search"
        @keydown.229="handleCN">
      </el-input>
      <el-button class="searchEnter" @click="search">
        <i class="el-icon-search"></i>
      </el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TopBar",
        data(){
            return{
                activeIndex: '1',
                industries: [{
                    id: 1,
                    name: '银行'
                }, {
                    id: 2,
                    name: '飞机'
                }],
                searchContent: ''
            }
        },
        mounted(){
            let path = this.$route.path;
            let mode = window.location.href.split('mode=');
            if (mode.length > 1 && mode[1] !== ''){
                path = path + '?mode=' + mode[1][0];
            }
            this.activeIndex = path;
        },
        methods: {
            handleSelect(key, keyPath) {
                // window.location.href = keyPath[keyPath.length - 1];
                this.$router.push(keyPath[keyPath.length - 1]).catch(err =>{
                    console.log(err);
                });
            },
            handleCN: function () {
                console.log('我捕获了');
            },
            search: function(){
                alert('想搜' + this.searchContent + '? 能搜到有鬼。');
            }
        }
    }
</script>

<style >
  .topBarWrap{
    position: relative;
  }
  .topBar .el-menu-item.home{
    margin-left: 35%;
    width: 10%;
    font-size: 16px;
  }
  .industry{
    width: 10%;
  }
  .industry .el-submenu__title{
    font-size: 16px;
  }
  .el-menu-item.predict{
    width: 10%;
    font-size: 16px;
  }
  .icon{
    font-size: 14px;
    margin-right: 4px;
  }
  .searchWrap{
    position: absolute;
    top: 10px;
    right: 2%;
    display: flex;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
  }
  .search .el-input__inner{
    border: 0;
    border-radius: 3px 0 0 3px;
  }
  .el-button.searchEnter{
    color: #ffffff;
    background-color: #000000;
    border: 1px solid #000000;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .el-button.searchEnter:hover{
    color: #ffffff;
    background-color: #000000;
    border: 1px solid #000000;
  }
  .el-button.searchEnter:focus{
    color: #ffffff;
    background-color: #000000;
    border: 1px solid #000000;
  }
</style>