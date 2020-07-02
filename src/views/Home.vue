<template>
  <div class="home">
    <div class="industryWrap">
      <el-row>
        <el-col :span="16" :offset="4">
          <strong>行业大全</strong>
          <hr/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16" :offset="4">
          <el-button class="industryButton" v-for="(industry, index) in industries" :key="index" @click="goIndustry(industry)">{{industry}}</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="rankWrap">
      <el-row>
        <el-col :span="16" :offset="4">
          <strong>热门股票</strong>
          <hr/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16" :offset="4">
          <div class="table-wrapper">
            <table class="fl-table">
              <thead>
                <tr>
                  <th v-for="(attribute, index) in attributes" :key="index">{{attribute}}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(stock, index) in stockList" :key="index">
                  <td>{{index + 1}}</td>
                  <td class="clickable" @click="goStock(stock.sid)">{{stock.code}}</td>
                  <td class="clickable" @click="goStock(stock.sid)">{{stock.name}}</td>
                  <td class="clickable" @click="goIndustry(stock.industry)">{{stock.industry}}</td>
                  <td>{{stock.yoy}}</td>
                </tr>
              </tbody>
            </table>
          </div>        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Home',
    data(){
        return{
            industries: ['采掘','传媒','电气设备','电子','房地产','纺织服装','非银金融','钢铁','公用事业','国防军工','化工','机械设备','计算机','家用电器','建筑材料','建筑装饰','交通运输','农林牧渔','汽车','轻工制造','商业贸易','食品饮料','通信','休闲服务','医药生物','银行','有色金属'],
            attributes: ['排名','股票代码','名称','行业','涨幅'],
            stockList: [{
                sid: 1,
                code: 600000,
                name: "xxx",
                yoy: "50%",//涨幅
                industry: "银行"
            },{
                sid: 2,
                code: 600001,
                name: "xxx",
                yoy: "50%",//涨幅
                industry: "银行"
            },{
                sid: 3,
                code:600002,
                name:"xxx",
                yoy:"50%",//涨幅
                industry:"银行"
            },{
                sid: 4,
                code:600003,
                name:"xxx",
                yoy:"50%",//涨幅
                industry:"银行"
            },{
                sid: 5,
                code:600004,
                name:"xxx",
                yoy:"50%",//涨幅
                industry:"银行"
            },{
                sid: 6,
                code:600005,
                name:"xxx",
                yoy:"50%",//涨幅
                industry:"银行"
            },{
                sid: 7,
                code:600006,
                name:"xxx",
                yoy:"50%",//涨幅
                industry:"银行"
            },{
                sid: 8,
                code:600007,
                name:"xxx",
                yoy:"50%",//涨幅
                industry:"银行"
            },{
                sid: 9,
                code:600008,
                name:"xxx",
                yoy:"50%",//涨幅
                industry:"银行"
            },{
                sid: 10,
                code:600009,
                name:"xxx",
                yoy:"50%",//涨幅
                industry:"银行"
            }
            ]
        }
    },
    methods:{
        goIndustry: function (name) {
            window.location.href = '/industry/' + name;
        },
        goStock: function(sid){
            window.location.href = '/stock/' + sid;
        }
    }
}
</script>

<style scoped>
  .home{
    text-align: left;
  }
  .industryWrap{
    margin-top: 20px;
    padding-bottom: 10px;
  }
  .industryButton.el-button{
    width: 11%;
    font-size: 10px;
    border-radius: 0;
  }
  .industryButton.el-button:hover{
    color: #ffffff;
    background-color: #000000;
  }
  .industryButton.el-button:focus{
    color: #ffffff;
    background-color: #000000;
  }
  .industryButton.el-button:active{
    color: #ffffff;
    background-color: #000000;
    border-color: #000000;
  }
  .el-button+.el-button{
    margin-left: 0;
  }
  .rankWrap{
    margin-top: 20px;
    padding-bottom: 10px;
  }
  .table-wrapper{
    margin: 10px 0 70px;
    box-shadow: 0 15px 50px rgba( 0, 0, 0, 0.2 );
  }

  .fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
  }

  .fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;
  }

  .fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
  }

  .fl-table thead th {
    color: #ffffff;
    background: #4FC3A1;
  }


  .fl-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
  }

  .fl-table tr:nth-child(even) {
    background: #F8F8F8;
  }

  /* Responsive */

  @media (max-width: 767px) {
    .fl-table {
      display: block;
      width: 100%;
    }
    .table-wrapper:before{
      content: "Scroll horizontally >";
      display: block;
      text-align: right;
      font-size: 11px;
      color: white;
      padding: 0 0 10px;
    }
    .fl-table thead, .fl-table tbody, .fl-table thead th {
      display: block;
    }
    .fl-table thead th:last-child{
      border-bottom: none;
    }
    .fl-table thead {
      float: left;
    }
    .fl-table tbody {
      width: auto;
      position: relative;
      overflow-x: auto;
    }
    .fl-table td, .fl-table th {
      padding: 20px .625em .625em .625em;
      height: 60px;
      vertical-align: middle;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
      width: 120px;
      font-size: 13px;
      text-overflow: ellipsis;
    }
    .fl-table thead th {
      text-align: left;
      border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
      display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
      background: none;
    }
    .fl-table tr:nth-child(even) {
      background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
      background: #F8F8F8;
      border-right: 1px solid #E6E4E4;
    }
    .fl-table tr td:nth-child(even) {
      border-right: 1px solid #E6E4E4;
    }
    .fl-table tbody td {
      display: block;
      text-align: center;
    }
  }
  .clickable{
    cursor: pointer;
  }
  .clickable:hover{
    color: #409eff;
    text-decoration: underline;
  }
</style>
