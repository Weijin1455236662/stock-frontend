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
          <strong class="goodLevel"> {{content.goodLevel}} </strong>
          <span>的股票会上涨</span>
          <br/>
          <span>该行业内，股票EPS涨幅</span>
          <strong class="badLevel"> {{content.badLevel}} </strong>
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
            <el-col :span="4">
              <span>股票代码: </span>
              <strong>{{content.dominateStock.code}}</strong>
            </el-col>
            <el-col :span="4" :offset="2">
              <span>股票名称: </span>
              <strong>{{content.dominateStock.name}}</strong>
            </el-col>
            <el-col :span="24">
              <span>日k变化: </span>
            </el-col>
            <el-col :span="24" style="border: 2px solid #000000;height: 400px">
<!--              加完图把上面↑ style删了，哈哈哈哈-->
              <h1>这里是日k图</h1>
            </el-col>
          </el-row>
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
    export default {
        name: "Industry",
        data(){
            return{
                name: '',
                content:{
                    goodLevel: "50%",
                    badLevel: "-50%",
                    dominateStock:{
                        name: "xxx",
                        code: "xxx",
                        dailyK: [
                            ["2015-01-23","123","-123.98","123","123"],
                            ["2015-01-23","123","-123.98","123","123"],
                            ["2015-01-23","123","-123.98","123","123"],
                            ["2015-01-23","123","-123.98","123","123"],
                            ["2015-01-23","123","-123.98","123","123"]
                        ]//日期、开盘、闭盘、最高、最低；要一年的
                    },
                    stocks:["123456","234567","345678"]
                }
            }
        },
        mounted() {
            this.name = this.$route.params.name;
        },
        methods: {
            goStock: function (code) {
                // todo 暂不实现
                // 根据code获取sid再跳转
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
</style>