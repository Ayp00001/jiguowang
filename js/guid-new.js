if (window.XMLHttpRequest) {
    var as = new XMLHttpRequest()
} else {
    var as = new ActiveXObject('Microsoft.XMLHTTP')
}
as.open('get', 'http://192.168.31.110:3000/guid/new', true)
as.send()
as.onreadystatechange = function () {
    if (as.readyState == 4) {
        if (as.status == 200) {
            var ad = JSON.parse(as.responseText)
            console.log(ad);
            var html_ = template('mb', {
                value: ad,
            })
            list.innerHTML = html_
        }
    }

}


var a=1022
var load_=document.getElementsByClassName('load')[0]
function asd(){
    a+=511
    list.style.height=a+'px'
}

