<template>
  <div class="home">
    <div class="titleWrap">
      <el-row>
        <el-col :span="16" :offset="4">
          <h1>综报预测</h1>
          <hr/>
        </el-col>
      </el-row>
    </div>
    <div class="bodyWrap">
      <el-row>
        <el-col :span="14" :offset="5">
          <strong>综报输入</strong>
          <hr/>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="inputWrap" :span="14" :offset="5">
          <span v-html="'股票代码: '"></span>
          <el-input
              class="input"
              size="medium"
              v-model="code"
              placeholder="请输入股票代码"
              @change="validateCode()">
          </el-input>
          <span class="error" v-if="!canCommit"> {{codeError}}</span>
        </el-col>
        <el-col class="inputWrap" :span="14" :offset="5">
          <span v-html="'季&#12288;&#12288;度: '"></span>
          <el-input
              class="input"
              size="medium"
              type="number"
              max="4"
              min="1"
              placeholder="请输入季度"
              v-model="quarter">
          </el-input>
          <span class="error" v-if="!canCommit"> {{quarterError}}</span>
        </el-col>
        <el-col class="inputWrap" :span="14" :offset="5">
          <span v-html="'统计截止日期: '"></span>
          <el-date-picker
              size="medium"
              placeholder="请选择日期"
              v-model="statDate">
          </el-date-picker>
          <span class="error" v-if="!canCommit"> {{statDateError}}</span>
        </el-col>
        <el-col class="inputWrap" :span="14" :offset="5">
          <span v-html="'净&#8194;利&#8194;润: '"></span>
          <el-input
              class="input"
              size="medium"
              type="number"
              placeholder="请输入净利润"
              v-model="netProfit">
          </el-input>
          <span class="error" v-if="!canCommit"> {{netProfitError}}</span>
        </el-col>
        <el-col class="inputWrap" :span="14" :offset="5">
          <span v-html="'每股收益: '"></span>
          <el-input
              class="input"
              size="medium"
              type="number"
              placeholder="请输入每股收益"
              v-model="eps">
          </el-input>
          <span class="error" v-if="!canCommit"> {{epsError}}</span>
        </el-col>
        <el-col class="inputWrap" :span="14" :offset="5">
          <span v-html="'总&#8194;股&#8194;本: '"></span>
          <el-input
              class="input"
              size="medium"
              type="number"
              placeholder="请输入总股本"
              v-model="totalShare">
          </el-input>
          <span class="error" v-if="!canCommit"> {{totalShareError}}</span>
        </el-col>
        <el-col class="inputWrap" :span="14" :offset="5">
          <el-button class="commitButton" size="small" @click="commit">提交</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="resultWrap" v-if="showResult">
      <el-row>
        <el-col :span="14" :offset="5">
          <strong>预测结果</strong>
          <hr/>
        </el-col>
        <el-col :span="14" :offset="5">
          {{analysis}}
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    import {search, predict} from "../api/api";

    export default {
        name: "Predict",
        data(){
            return{
                code: '',
                quarter: '',
                statDate: '',
                netProfit: '',
                eps: '',
                totalShare: '',
                codeError: '',
                quarterError: '',
                statDateError: '',
                netProfitError: '',
                epsError: '',
                totalShareError: '',
                canCommit: true,
                showResult: false,
                analysis: ''
            }
        },
        methods: {
            validateCode: function () {
                search(this.code).then(res=>{
                    if(res.content.sid > 0){
                        this.codeError = '';
                    }else{
                        this.codeError = '股票代码不属于沪深300股！';
                        this.canCommit = false;
                    }
                })
            },
            commitAble: function () {
                let commitAble = true;
                if(this.code === ''){
                    commitAble = commitAble && false;
                    this.codeError = '请输入股票代码！';
                } else if(this.code.length !== 6){
                    commitAble = commitAble && false;
                    this.codeError = '股票代码长度应该为6位！';
                } else {
                    commitAble = commitAble && true;
                    this.codeError = '';
                }
                if(this.quarter === ''){
                    commitAble = commitAble && false;
                    this.quarterError = '请输入季度！';
                } else if(this.quarter < 1 || this.quarter > 4){
                    commitAble = commitAble && false;
                    this.quarterError = '季度应在1-4之间！';
                } else {
                    commitAble = commitAble && true;
                    this.quarterError = '';
                }
                if(this.statDate === ''){
                    commitAble = commitAble && false;
                    this.statDateError = '请输入统计截止时间！';
                }else {
                    commitAble = commitAble && true;
                    this.statDateError = '';
                }
                if(this.netProfit === ''){
                    commitAble = commitAble && false;
                    this.netProfitError = '请输入净利润！';
                }else {
                    commitAble = commitAble && true;
                    this.netProfitError = '';
                }
                if(this.eps === ''){
                    commitAble = commitAble && false;
                    this.epsError = '请输入每股收益！';
                }else {
                    commitAble = commitAble && true;
                    this.epsError = '';
                }
                if(this.totalShare === ''){
                    commitAble = commitAble && false;
                    this.totalShareError = '请输入总股本！';
                }else {
                    commitAble = commitAble && true;
                    this.totalShareError = '';
                }
                this.canCommit = commitAble;
            },
            commit: function () {
                this.showResult = false;
                this.commitAble();
                this.validateCode();
                if(this.canCommit){
                    let data = {
                        code: this.code,
                        quarter: this.quarter,
                        statDate: this.date2String(this.statDate),
                        netProfit: this.netProfit,
                        eps: this.eps,
                        totalShare: this.totalShare
                    }
                    predict(data).then(res=>{
                        if (res.success){
                            this.analysis = res.content.analysis;
                            this.showResult = true;
                        }
                    })
                }
            },
            date2String: function (date) {
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                if (month < 10) {
                    month ="0" + month;
                }
                if (day < 10) {
                    day ="0" + day;
                }
                return year + "-" + month + "-" + day;
            }
        }
    }
</script>

<style scoped>
  .home{
    text-align: left;
    margin-bottom: 60px;
  }
  .bodyWrap{
    margin-top: 20px;
    padding-bottom: 10px;
  }
  .inputWrap{
    margin-top: 10px;
    padding-bottom: 10px;
  }
  .input{
    width: 40%;
  }
  .error{
    color: #ff0000;
    font-size: 12px;
  }
  .commitButton{
    background-color: #000000;
    color: #ffffff;
  }
  .commitButton:hover{
    background-color: #000000;
    color: #ffffff;
  }
  .commitButton:focus{
    background-color: #000000;
    color: #ffffff;
  }
  .commitButton:active{
    border: 1px solid #000000;
  }
  .resultWrap{
    margin-top: 20px;
    padding-bottom: 10px;
  }
</style>