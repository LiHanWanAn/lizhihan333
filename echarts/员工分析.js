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
    console.log(y4);
}
function Lzh5() {
    var y5 = JSON.parse(sessionStorage['y5']);
    console.log(y5);
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
            data: ['Line 1', 'Line 2']
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
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Line 1',
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
                data: [140, 232, 101, 264, 90, 340, 250]
            },
            {
                name: 'Line 2',
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
                data: [120, 282, 111, 234, 220, 340, 310]
            }
        ]
    };

    option && myChart.setOption(option);
}