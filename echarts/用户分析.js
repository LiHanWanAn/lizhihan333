//匿名函数的自调用
// !function (形参) {
    
// }(实参);
//
    var xhr = new XMLHttpRequest();
    xhr.open("post","http://47.95.13.193/smartShop-1.0-SNAPSHOT/analysis_charts/astanly/analysis_charts/custanly/",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send("chart_num:1");
    xhr.onreadystatechange = function () {
        if (xhr.status==200&&xhr.readyState==4) {
            var res = xhr.response;
            res = JSON.parse(res);
            console.log(res)
        }
    }