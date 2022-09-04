function changeTime() {
    var date = new Date();
    var fullyear = date.getFullYear();
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var ss = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    var time = [fullyear, month, currentDate, hh, mm, ss]
    var d = document.getElementsByClassName("time")[0];
    d.innerHTML = time[0] + '年' + time[1] + '月' + time[2] + '日' + time[3] + '时' + time[4] + '分' + time[5] + '秒'
}
var newtime = window.setInterval(changeTime, 1000);

lzh(1);
var y1 = window.setTimeout(Lzh1, 1000);
lzh(2);
var y2 = window.setTimeout(Lzh2, 1000);
lzh(3);
var y3 = window.setTimeout(Lzh3, 1000);
lzh(4);
var y4 = window.setTimeout(Lzh4, 1000);
lzh(5);
var y5 = window.setTimeout(Lzh5, 1000);
var y5_1 = window.setTimeout(Lzh5_1, 1000);
var y5_2 = window.setTimeout(Lzh5_2, 1000);
lzh(6);
function lzh(a) {
    var xhr = new XMLHttpRequest();
    var obj = {
        chart_num: a
    }
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            var res = xhr.response;
            sessionStorage['y' + a] = res;
            // res = JSON.parse(res);
            return res;
        }
    }
    xhr.open("post", "http://127.0.0.1:8080/shapan/analysis_charts/astanly/", false);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(obj));
}
function Lzh1() {
    var y1 = JSON.parse(sessionStorage['y1']);
    var arr1 = document.getElementsByClassName("ZJ_P2");
    var arr2 = document.getElementsByClassName("L_ZJ_p2");
    arr1[0].innerHTML = y1.今日销售额
    arr1[1].innerHTML = y1.今日客单价
    arr1[2].innerHTML = y1.今日交易数
    arr1[3].innerHTML = (y1.今日销售额 / y1.今天上班员工数).toFixed(2);
    arr2[0].innerHTML = y1.本周销售额
    arr2[1].innerHTML = y1.本月销售额
    arr2[2].innerHTML = y1.本周客单价
    arr2[3].innerHTML = y1.本月客单价
    arr2[4].innerHTML = y1.本周交易数
    arr2[5].innerHTML = y1.本月交易数
    arr2[6].innerHTML = (y1.本周销售额 / y1.本周上班员工数).toFixed(2);
    arr2[7].innerHTML = (y1.本月销售额 / y1.本月上班员工数).toFixed(2);
}
function Lzh2() {
    var y2 = JSON.parse(sessionStorage['y2']);
    var dom = document.getElementsByClassName('b1')[0]
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var option;
    option = {
        legend: { textStyle: { color: "#00ffff" } },
        tooltip: {},
        dataset: {
            source: [
                y2.source[0],
                y2.source[1],
                y2.source[2],
                y2.source[3],
                y2.source[4],
                y2.source[5],
                y2.source[6]
            ]
        },
        xAxis: { type: 'category', axisLabel: { show: true, textStyle: { color: "#00ffff" } } },
        tooltip: {},
        yAxis: { axisLabel: { show: true, textStyle: { color: "#00ffff" } } },
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    };
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
    window.addEventListener('resize', myChart.resize);
}
function Lzh3() {
    var y3 = JSON.parse(sessionStorage['y3']);
    var chartDom = document.getElementsByClassName('b2')[0];
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        xAxis: {
            type: 'value',
            axisLabel: { textStyle: { color: "#00ffff" } }
        },
        yAxis: {
            type: 'category',
            data: [y3.source[1][0], y3.source[2][0]],
            axisLabel: { textStyle: { color: "#00ffff" } }
        },
        series: [
            {
                data: [y3.source[1][1], y3.source[2][1]],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ]
    };

    option && myChart.setOption(option);
}
function Lzh4() {
    var y4 = JSON.parse(sessionStorage['y4']);
    var d0 = document.getElementsByClassName('b5ds')[0];
    var d1 = document.getElementsByClassName('b5ds')[1];
    d0.innerHTML = y4.导购互动行为次数;
    d1.innerHTML = y4.员工工作干扰次数;
}
function Lzh5() {
    var y5 = JSON.parse(sessionStorage['y5']);
    var arr11 = [y5.source1[1][0], y5.source1[2][0], y5.source1[3][0], y5.source1[4][0], y5.source1[5][0], y5.source1[6][0]];
    var arr12 = [y5.source1[1][1], y5.source1[2][1], y5.source1[3][1], y5.source1[4][1], y5.source1[5][1], y5.source1[6][1]];
    var arr13 = [y5.source1[1][2], y5.source1[2][2], y5.source1[3][2], y5.source1[4][2], y5.source1[5][2], y5.source1[6][2]];
    var arr14 = [y5.source1[7][0], y5.source1[8][0], y5.source1[9][0], y5.source1[10][0], y5.source1[11][0], y5.source1[12][0]];
    var arr15 = [y5.source1[7][1], y5.source1[8][1], y5.source1[9][1], y5.source1[10][1], y5.source1[11][1], y5.source1[12][1]];
    var arr16 = [y5.source1[7][2], y5.source1[8][2], y5.source1[9][2], y5.source1[10][2], y5.source1[11][2], y5.source1[12][2]];
    var chartDom = document.getElementsByClassName("b4")[0];
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        color: ['#80FFA5', '#00DDFF'],
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['销售次数', '导购互动'],
            textStyle: {
                color: 'aqua',
                fontsize: 12
            }
        },
        toolbox: {
            feature: {

            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: arr11,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'aqua'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'aqua'
                    }
                }
            }
        ],
        series: [
            {
                name: '导购互动',
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(92, 146, 31,0.5)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(136, 255, 0,0.5)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: arr13
            },
            {
                name: '销售次数',
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(128, 255, 165,0.5)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(1, 191, 236,0.5)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: arr12
            }
        ]
    };

    option && myChart.setOption(option);
}
function Lzh5_1() {
    var y5 = JSON.parse(sessionStorage['y5']);
    var arr21 = [y5.source2[1][0], y5.source2[2][0], y5.source2[3][0], y5.source2[4][0], y5.source2[5][0], y5.source2[6][0]];
    var arr22 = [y5.source2[1][1], y5.source2[2][1], y5.source2[3][1], y5.source2[4][1], y5.source2[5][1], y5.source2[6][1]];
    var arr23 = [y5.source2[1][2], y5.source2[2][2], y5.source2[3][2], y5.source2[4][2], y5.source2[5][2], y5.source2[6][2]];
    var arr24 = [y5.source2[7][0], y5.source2[8][0], y5.source2[9][0], y5.source2[10][0], y5.source2[11][0], y5.source2[12][0]];
    var arr25 = [y5.source2[7][1], y5.source2[8][1], y5.source2[9][1], y5.source2[10][1], y5.source2[11][1], y5.source2[12][1]];
    var arr26 = [y5.source2[7][2], y5.source2[8][2], y5.source2[9][2], y5.source2[10][2], y5.source2[11][2], y5.source2[12][2]];
    var chartDom = document.getElementsByClassName("b4")[1];
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        color: ['#80FFA5', '#00DDFF'],
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['销售额', '导购互动'],
            textStyle: {
                color: 'aqua',
                fontsize: 12
            }
        },
        toolbox: {
            feature: {

            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: arr21,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'aqua'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'aqua'
                    }
                }
            }
        ],
        series: [
            {
                name: '导购互动',
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(92, 146, 31,0.5)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(136, 255, 0,0.5)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: arr23
            },
            {
                name: '销售额',
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(128, 255, 165,0.5)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(1, 191, 236,0.5)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: arr22
            }
        ]
    };

    option && myChart.setOption(option);
}
function Lzh5_2() {
    var y5 = JSON.parse(sessionStorage['y5']);
    console.log(y5);
    var arr11 = [y5.source1[1][0], y5.source1[2][0], y5.source1[3][0], y5.source1[4][0], y5.source1[5][0], y5.source1[6][0]];
    var arr12 = [y5.source1[1][1], y5.source1[2][1], y5.source1[3][1], y5.source1[4][1], y5.source1[5][1], y5.source1[6][1]];
    var arr13 = [y5.source1[1][2], y5.source1[2][2], y5.source1[3][2], y5.source1[4][2], y5.source1[5][2], y5.source1[6][2]];
    var arr14 = [y5.source1[7][0], y5.source1[8][0], y5.source1[9][0], y5.source1[10][0], y5.source1[11][0], y5.source1[12][0]];
    var arr15 = [y5.source1[7][1], y5.source1[8][1], y5.source1[9][1], y5.source1[10][1], y5.source1[11][1], y5.source1[12][1]];
    var arr16 = [y5.source1[7][2], y5.source1[8][2], y5.source1[9][2], y5.source1[10][2], y5.source1[11][2], y5.source1[12][2]];
    var arr21 = [y5.source2[1][0], y5.source2[2][0], y5.source2[3][0], y5.source2[4][0], y5.source2[5][0], y5.source2[6][0]];
    var arr22 = [y5.source2[1][1], y5.source2[2][1], y5.source2[3][1], y5.source2[4][1], y5.source2[5][1], y5.source2[6][1]];
    var arr23 = [y5.source2[1][2], y5.source2[2][2], y5.source2[3][2], y5.source2[4][2], y5.source2[5][2], y5.source2[6][2]];
    var arr24 = [y5.source2[7][0], y5.source2[8][0], y5.source2[9][0], y5.source2[10][0], y5.source2[11][0], y5.source2[12][0]];
    var arr25 = [y5.source2[7][1], y5.source2[8][1], y5.source2[9][1], y5.source2[10][1], y5.source2[11][1], y5.source2[12][1]];
    var arr26 = [y5.source2[7][2], y5.source2[8][2], y5.source2[9][2], y5.source2[10][2], y5.source2[11][2], y5.source2[12][2]];
    var arr30 = [
        (arr22[0] / arr12[0]).toFixed(2),
        (arr22[1] / arr12[1]).toFixed(2),
        (arr22[2] / arr12[2]).toFixed(2),
        (arr22[3] / arr12[3]).toFixed(2),
        (arr22[4] / arr12[4]).toFixed(2),
        (arr22[5] / arr12[5]).toFixed(2),
    ]
    console.log(arr30)
    var chartDom = document.getElementsByClassName("b4")[2];
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        color: ['#80FFA5', '#00DDFF'],
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['客单价', '导购互动'],
            textStyle: {
                color: 'aqua',
                fontsize: 12
            }
        },
        toolbox: {
            feature: {

            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: arr21,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'aqua'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'aqua'
                    }
                }
            }
        ],
        series: [
            {
                name: '导购互动',
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(92, 146, 31,0.5)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(136, 255, 0,0.5)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: arr23
            },
            {
                name: '客单价',
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(128, 255, 165,0.5)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(1, 191, 236,0.5)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: arr30
            }
        ]
    };

    option && myChart.setOption(option);
}