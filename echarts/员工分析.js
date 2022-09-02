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
lzh(4);
lzh(5);
lzh(6);

function lzh(a) {
    var xhr = new XMLHttpRequest();
    var obj = {
        chart_num: a
    }
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            var res = xhr.response;
            sessionStorage['y'+a] = res;
            // res = JSON.parse(res);
        }
        return res;
    }
    xhr.open("post", "http://127.0.0.1:8080/shapan/analysis_charts/astanly/", false);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(obj));
}
function Lzh1() {
    var y1 = JSON.parse(sessionStorage['y1']);
    var arr1=document.getElementsByClassName("ZJ_P2");
    var arr2=document.getElementsByClassName("L_ZJ_p2");
    arr1[0].innerHTML=y1.今日销售额
    arr1[1].innerHTML=y1.今日客单价
    arr1[2].innerHTML=y1.今日交易数
    arr1[3].innerHTML=(y1.今日销售额/y1.今天上班员工数).toFixed(2);
    arr2[0].innerHTML=y1.本周销售额
    arr2[1].innerHTML=y1.本月销售额
    arr2[2].innerHTML=y1.本周客单价
    arr2[3].innerHTML=y1.本月客单价
    arr2[4].innerHTML=y1.本周交易数
    arr2[5].innerHTML=y1.本月交易数
    arr2[6].innerHTML=(y1.本周销售额/y1.本周上班员工数).toFixed(2);
    arr2[7].innerHTML=(y1.本月销售额/y1.本月上班员工数).toFixed(2);
}
function Lzh2() {
    var y2 = JSON.parse(sessionStorage['y2']);
    console.log(y2)
}