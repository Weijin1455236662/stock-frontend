<template>
  <div>
    <el-container>
      <el-header>
        <h1 class="big-logo">{{cName}}</h1>
      </el-header>
      <el-container>
        <el-aside width="30%" class="aside">
          <el-row class="horizontal">
            <el-col :span="12" :offset="8" >
              <h2>高管信息</h2>
              <li v-for="person in managers" :key="person">{{person}}</li>
            </el-col>
          </el-row>
        </el-aside>
        <el-main class="main">
          <quarterly-report :reports="reports"></quarterly-report>

          <div class="graph">
            <Transaction :chart-data="trans" v-if="isGet"></Transaction>
          </div>

          <div class="stocksWrap">
            <el-row>
              <el-col :span="14" :offset="5">
                <strong>推荐意见</strong>
                <hr/>
                <h1>{{recommand}}</h1>
              </el-col>
            </el-row>
          </div>
        </el-main>
      </el-container>
      <el-footer>

      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import QuarterlyReport from "../components/QuarterlyReport";
  import Transaction from "../components/Transaction";
  import {getStock,getTransaction} from "../api/api.js"
  export default {
        name: "Stock",
        components:{QuarterlyReport,Transaction},
      data(){
        return{
          cName:"",
          id:1,
          modules: [1,2,3],
          managers:["姜昱华（董事）","江辉（董事）","魏进（董事）","陈泳霖（董事）"],
          reports:[],
          recommand:"",
          trans:[],
          isGet:false
        }
      },
    mounted() {
          this.id=this.$route.params.id;
          getStock(this.id).then(res=>{
            console.log(res);
            this.managers = res.content.stockHolders;
            this.reports = res.content.reports;
            this.recommand = res.content.analysis
            this.cName = res.content.name
          })
          getTransaction(this.id).then(res=>{
            console.log("成交量",res);
            this.trans =res.content;
            this.isGet = true
          })
    }
  }
</script>

<style scoped lang="scss">

  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }
  .logo {
    margin-left: 20px;
  }
  .main{
    margin-top: 50px;
  }
  .aside{
    margin-top: 80px;
  }
  .big-logo-container {
    padding-top: 50px;
  }

  h1 {
    font-size: 3em;
    margin-left: 10px;
  }
  .horizontal{
    text-align: left;
  }
  li{
    margin: 12px 0px;
  }
  .graph{
    text-align: center;
  }
  .stocksWrap{
    margin-top: 20px;
    padding-bottom: 10px;
  }
</style>