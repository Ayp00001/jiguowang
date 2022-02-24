if (window.XMLHttpRequest) {
    var as = new XMLHttpRequest()
} else {
    var as = new ActiveXObject('Microsoft.XMLHTTP')
}
as.open('get', 'http://192.168.31.110:3000/play/hot', true)
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

            var asdf = JSON.parse(as.responseText)
            console.log(asdf);
            var html_ = template('mb', {
                value: asdf,
            })
            list1.innerHTML = html_
        }
    }

}


function asd(){
    document.getElementById("list1").removeAttribute("hidden")
    console.log('ss');
}

