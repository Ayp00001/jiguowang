var swiper = new Swiper('.swipter-container', {
    slidesPerView: 1,
    paginationClickable: true,
    observer: true,
    observeParents: true
})
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 水平切换选项
    autoplay: true,
    loop: true, // 循环模式选项

    // 如果需要分页器
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
})




// ajxa

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
            list_1.innerHTML = html_

            var asdf = JSON.parse(as.responseText)
            console.log(asdf);
            var html_1 = template('mbm', {
                value: asdf,
            })
            list_hop.innerHTML = html_1

            var kw = JSON.parse(as.responseText)
            console.log(kw);
            var html_2 = template('mb2', {
                value: kw,
            })
            list_kuwan.innerHTML = html_2
        }
    }

}