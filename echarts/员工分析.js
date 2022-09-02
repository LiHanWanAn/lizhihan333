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

lzh(1,astanly01);
function lzh(a,b) {
    var xhr = new XMLHttpRequest();
    var obj = {
        chart_num: a
    }
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            var res = xhr.response;
            res = JSON.parse(res);
            console.log(res)
        }
    }
    xhr.open("post", "http://127.0.0.1:8080/shapan/analysis_charts/astanly/", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(obj));
    return b=res;
}
