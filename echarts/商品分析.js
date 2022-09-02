//匿名函数的自调用
// !function (形参) {

// }(实参);
//
lzh_1();
lzh_1_01();
function lzh_1() {
    var xhr = new XMLHttpRequest();
    var obj = {
        chart_num: 1
    }
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            var res = xhr.response;
            res = JSON.parse(res);
            console.log(res)
        }
    }
    xhr.open("post", "http://127.0.0.1:8080/shapan/analysis_charts/comanly/", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(obj));
    
}
function lzh_1_01(params) {
    var dom = document.getElementById('lzh_1_01');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {}
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}
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