$(function () {
    $(".xin").on("click", function () {
        $(".pos").css("display", "block")
        return false
    })
    $("body").on("click", function () {
        $(".pos").css("display", "none")
        return false
    })
})

