<template>
  <div class="home">
    <div class="titleWrap">
      <el-row>
        <el-col :span="16" :offset="4">
          <h1>{{name}}行业</h1>
          <hr/>
        </el-col>
      </el-row>
    </div>
    <div class="analysisWrap">
      <el-row>
        <el-col :span="14" :offset="5">
          <strong>行业综述</strong>
          <hr/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14" :offset="5">
          <span>该行业内，股票EPS涨幅</span>
          <strong class="goodLevel"> {{content.goodlevel}} </strong>
          <span>的股票会上涨</span>
          <br/>
          <span>该行业内，股票EPS涨幅</span>
          <strong class="badLevel"> {{content.badlevel}} </strong>
          <span>的股票会下降</span>
        </el-col>
      </el-row>
    </div>
    <div class="dominateStockWrap">
      <el-row>
        <el-col :span="14" :offset="5">
          <strong>龙头股</strong>
          <hr/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14" :offset="5">
          <el-row>
            <el-col :span="6">
              <span>股票代码: </span>
              <strong>{{content.dominateStock.code}}</strong>
            </el-col>
            <el-col :span="16" :offset="2">
              <span>股票名称: </span>
              <strong>{{content.dominateStock.name}}</strong>
            </el-col>
            <el-col class="dailyK" :span="24">
              <span>日k变化: </span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="16" :offset="4">
          <RelationGraph :chart-data="content.dominateStock.dailyk"></RelationGraph>
        </el-col>
      </el-row>
    </div>
    <div class="stocksWrap">
      <el-row>
        <el-col :span="14" :offset="5">
          <strong>股票列表</strong>
          <hr/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14" :offset="5">
          <el-button class="stock" type="text" v-for="(stock, index) in content.stocks" :key="index" @click="goStock(stock)">
            {{stock}}
          </el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    import {getIndustry, search} from "../api/api";
    import RelationGraph from "../components/KLine";

    export default {
        name: "Industry",
        components: {RelationGraph},
        data(){
            return{
                name: '',
                content:{
                    goodlevel: '',
                    badlevel: '',
                    dominateStock:{
                        name: '',
                        code: '',
                        dailyk: []
                    },
                    stocks:[]
                }
            }
        },
        mounted() {
            this.name = this.$route.params.name;
            getIndustry(this.name).then(res=>{
                if(res.success){
                    this.content = res.content;
                }else{
                    this.$message({
                        message: '服务器错误，请稍后再试！',
                        type: 'error'
                    });
                }
            })
        },
        methods: {
            goStock: function (code) {
                search(code).then(res=>{
                    if(res.content.sid>0){
                        window.location.href = '/stock/' + res.content.sid;
                    }else{
                        this.$message({
                            message: '该股票不存在！',
                            type: 'error'
                        });
                    }
                });
                return code;
            }
        }
    }
</script>

<style scoped>
  .home{
    text-align: left;
    margin-bottom: 60px;
  }
  .analysisWrap{
    margin-top: 20px;
    padding-bottom: 10px;
  }
  .goodLevel{
    font-size: 48px;
    color: red;
  }
  .badLevel{
    font-size: 48px;
    color: green;
  }
  .dominateStockWrap{
    margin-top: 20px;
    padding-bottom: 10px;
  }
  .dailyK{
    margin-top: 10px;
  }
  .stocksWrap{
    margin-top: 20px;
    padding-bottom: 10px;
  }
  .stock{
    width: 12%;
    color: #000000;
    text-decoration: underline;
    font-size: 18px;
  }
  .el-button+.el-button{
    margin-left: 0;
  }
</style>