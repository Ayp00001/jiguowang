if (window.XMLHttpRequest) {
    var as = new XMLHttpRequest()
} else {
    var as = new ActiveXObject('Microsoft.XMLHTTP')
}
as.open('get', 'http://192.168.31.110:3000/play/category', true)
as.send()
as.onreadystatechange = function () {
    if (as.readyState == 4) {
        if (as.status == 200) {
            var ad = JSON.parse(as.responseText)
            console.log(ad);
            var html_ = template('mb', {
                value: ad.live,
            })

            list.innerHTML = html_

            var asd = JSON.parse(as.responseText)
            var html_ = template('mb', {
                value: asd.personal_care,
            })
            list1.innerHTML = html_
            var asd = JSON.parse(as.responseText)
            var html_ = template('mb', {
                value: asd.outdoor,
            })
            list2.innerHTML = html_

            var asd = JSON.parse(as.responseText)
            var html_ = template('mb', {
                value: asd.smart_wear,
            })
            list3.innerHTML = html_

            var asd = JSON.parse(as.responseText)
            var html_ = template('mb', {
                value: asd.trip,
            })
            list4.innerHTML = html_

            var html_ = template('mb', {
                value: asd.digital,
            })
            list5.innerHTML = html_
        }
    }

}

// var a=990
// var load_=document.getElementsByClassName('load')[0]
// function asd(){
//     a+=495
//     list.style.height=a+'px'
// }

