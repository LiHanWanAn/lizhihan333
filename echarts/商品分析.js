//匿名函数的自调用
// !function (形参) {

// }(实参);
//
var xhr = new XMLHttpRequest();
xhr.open("post", "http://47.95.13.193/smartShop-1.0-SNAPSHOT/analysis_charts/astanly/analysis_charts/custanly/", true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send("chart_num:1");
xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
        var res = xhr.response;
        res = JSON.parse(res);
        console.log(res)
    }
}

function changeTime() {
    var date = new Date();
    var fullyear = date.getFullYear();
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var ss = date.getSeconds() <10 ? "0" + date.getSeconds() : date.getSeconds();
    var time = [fullyear,month,currentDate,hh,mm,ss]
    var d = document.getElementsByClassName("time")[0];
    d.innerHTML=time[0]+'年'+time[1]+'月'+time[2]+'日'+time[3]+'时'+time[4]+'分'+time[5]+'秒'
}
var newtime = window.setInterval(changeTime,1000);