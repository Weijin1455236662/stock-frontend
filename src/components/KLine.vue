<template>
    <div class="echartLayout" id="container" style="width: 100%;height: 400px;"></div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "RelationGraph",
        props:{
            chartData:{
                type:Array,
                default: ()=>[]
            }
        },
        data() {
            return {
                myChart: null,
            }
        },
        mounted() {
            console.log(this.chartData);
            this.initEchart();
        },
        watch: {
            chartData: function () {
                console.log(this.chartData);
                this.initEchart();
            }
        },
        methods: {
            calculateMA(dayCount, data) {
                var result = [];
                for (var i = 0, len = data.length; i < len; i++) {
                    if (i < dayCount) {
                        result.push('-');
                        continue;
                    }
                    var sum = 0;
                    for (var j = 0; j < dayCount; j++) {
                        sum += data[i - j][1];
                    }
                    result.push(sum / dayCount);
                }
                return result;
            },
            initEchart() {
                // var rawData = [['2015/12/31','3570.47','3539.18','3538.35','3580.6'],['2015/12/30','3566.73','3572.88','3538.11','3573.68'],['2015/12/29','3528.4','3563.74','3515.52','3564.17'],['2015/12/28','3635.77','3533.78','3533.78','3641.59'],['2015/12/25','3614.05','3627.91','3601.74','3635.26'],['2015/12/24','3631.31','3612.49','3572.28','3640.22'],['2015/12/23','3653.28','3636.09','3633.03','3684.57'],['2015/12/22','3645.99','3651.77','3616.87','3652.63'],['2015/12/21','3568.58','3642.47','3565.75','3651.06']]
                var rawData = this.chartData
                var dates = rawData.map(function (item) {
                    return item[0];
                });

                var data = rawData.map(function (item) {
                    return [+item[1], +item[2], +item[3], +item[4]];
                });
                let dom = document.getElementById("container");
                this.myChart = echarts.init(dom);

                let option = {
                    backgroundColor: '#FFFAFA',
                    legend: {
                        data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
                        inactiveColor: '#777',
                        textStyle: {
                            color: '#21202D'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false,
                            type: 'cross',
                            lineStyle: {
                                color: '#376df4',
                                width: 2,
                                opacity: 1
                            }
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: dates,
                        axisLine: { lineStyle: { color: '#8392A5' } }
                    },
                    yAxis: {
                        scale: true,
                        axisLine: { lineStyle: { color: '#8392A5' } },
                        splitLine: { show: false }
                    },
                    grid: {
                        bottom: 80
                    },
                    dataZoom: [{
                        textStyle: {
                            color: '#8392A5'
                        },
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        dataBackground: {
                            areaStyle: {
                                color: '#8392A5'
                            },
                            lineStyle: {
                                opacity: 0.8,
                                color: '#8392A5'
                            }
                        },
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }, {
                        type: 'inside'
                    }],
                    animation: false,
                    series: [
                        {
                            type: 'candlestick',
                            name: '日K',
                            data: data,
                            itemStyle: {
                                color: '#FD1050',
                                color0: '#0CF49B',
                                borderColor: '#FD1050',
                                borderColor0: '#0CF49B'
                            }
                        },
                        {
                            name: 'MA5',
                            type: 'line',
                            data: this.calculateMA(5, data),
                            smooth: true,
                            showSymbol: false,
                            lineStyle: {
                                width: 1
                            }
                        },
                        {
                            name: 'MA10',
                            type: 'line',
                            data: this.calculateMA(10, data),
                            smooth: true,
                            showSymbol: false,
                            lineStyle: {
                                width: 1
                            }
                        },
                        {
                            name: 'MA20',
                            type: 'line',
                            data: this.calculateMA(20, data),
                            smooth: true,
                            showSymbol: false,
                            lineStyle: {
                                width: 1
                            }
                        },
                        {
                            name: 'MA30',
                            type: 'line',
                            data: this.calculateMA(30, data),
                            smooth: true,
                            showSymbol: false,
                            lineStyle: {
                                width: 1
                            }
                        }
                    ]
                };
                this.myChart.setOption(option);
                this.myChart.on('click', function (params) {
                    console.log(params.data)//获取点击的头像的数据信息
                });
                // console.log(this.chartLink)
            }
        }
    }
</script>

<style scoped>

</style>