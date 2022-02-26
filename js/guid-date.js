$(function () {
    $(".xin1").on("click", function () {
        $(".pos").css("display", "block")
        return false
    })
    $("body").on("click", function () {
        $(".pos").css("display", "none")
        return false
    })
    var a=15
    $('.qwe').on('click',function(){
        a++
        $('.asdf').html(a)
        $('.zxcv').hide().siblings('img').show()
    })
})

