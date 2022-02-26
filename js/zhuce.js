$(function () {
    $(".register_").on("click", function () {
        //手机号验证
        var phone = $(".phone_")[0].value;
        var phone1 = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
        if (!phone1.test(phone)) {
            alert('手机号格式输入不正确')
            $(".phone_").css("border-color", "red")
        }
        //图片验证
        var picture = $(".picture_")[0].value
        var picture1 = /^[a-zA-Z0-9]{4}$/
        if (!picture1.test(picture)) {
            alert('验证码不正确')
            $(".picture_").css("border-color", "red")
        }
        //手机验证码
        var test = $(".test_")[0].value
        var test1 = /^[0-9]{4}$/
        if (!picture1.test(picture)) {
            alert('手机验证码不正确')
            $(".test_").css("border-color", "red")
        }
        //用户名
        var name = $(".name_")[0].value
        var name1 = /^[a-zA-Z0-9_-]{4,16}$/
        if (!name1.test(name)) {
            alert('用户名不正确,用户名由4~6位字母数字组成')
            $(".name_").css("border-color", "red")
        }
        //密码
        var psaa = $(".pass_")[0].value
        var pass1 = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/
        if (!pass1.test(pass)) {
            alert('密码格式不正确')
            $(".pass_").css("border-color", "red")
        }
        //确认密码
        var pass11 = $(".pass1_")[0].value
        if (pass11 != pass) {
            alert('两次输入密码不一致')
        }
    })
    $(".test_bt").on("click", function () {
        var index = 60
        var timer = null
        timer = setInterval(function () {
            index--
            $(".test_bt").html(index + 's')
            $(".test_bt").prop("disabled", "disabled")
            if (index <= 0) {
                index = 60
                $(".test_bt").html(index + 's')
                clearInterval(timer)
                $(".test_bt").removeAttr("disabled")

            }
        }, 1000)
    })





})