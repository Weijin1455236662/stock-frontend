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
      <el-submenu index="2" class="industry" :popper-append-to-body="true">
        <template slot="title"><i class="icon el-icon-s-data"></i>行业</template>
        <el-menu-item v-for="(industry, index) in industries" :key="index" class="industry-item" :index="'/industry/'+industry">
          <i class="icon el-icon-s-data"></i>{{industry}}
        </el-menu-item>
      </el-submenu>
      <el-menu-item class="predict" index="/predict"><i class="icon el-icon-s-marketing"></i>预测</el-menu-item>
    </el-menu>
    <div class="searchWrap">
      <el-input
        class="search"
        v-model="searchContent"
        placeholder="输入要搜索的数字代码..."
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
    import {search} from "../api/api";

    export default {
        name: "TopBar",
        data(){
            return{
                activeIndex: '1',
                industries: ['采掘','传媒','电气设备','电子','房地产','纺织服装','非银金融','钢铁','公用事业','国防军工','化工','机械设备','计算机','家用电器','建筑材料','建筑装饰','交通运输','农林牧渔','汽车','轻工制造','商业贸易','食品饮料','通信','休闲服务','医药生物','银行','有色金属'],
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
                window.location.href = keyPath[keyPath.length - 1];
                // this.$router.push(keyPath[keyPath.length - 1]).catch(err =>{
                //     console.log(err);
                // });
            },
            handleCN: function () {
                console.log('我捕获了');
            },
            search: function(){
                let number = /^[0-9]+$/
                if(this.searchContent==='' || !number.test(this.searchContent)){
                    this.$message({
                        message: '请输入正确的股票代码！',
                        type: 'error'
                    })
                }else{
                    search(this.searchContent).then(res=>{
                        if(res.content.sid > 0){
                            window.location.href = '/stock/' + res.content.sid;
                        }else{
                            this.$message({
                                message: '股票代码不属于沪深300股！',
                                type: 'error'
                            })
                        }
                    })
                }
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
    border: 1px solid #000000;
    border-radius: 4px;
    width: 20%;
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
  .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title{
    height: 24px !important;
  }
  .el-menu--popup{
    padding: 0 0 6px!important;
  }
</style>