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
    pagination: {
        el: '.swiper-pagination',
    },

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