$(document).ready(function () {

    // $('.eventList').click(function () {
    //     $('.eventList').removeClass('on')
    //     $(this).addClass('on')
    // })

    $('.chartMenuList').click(function () {
        $('.chartMenuList').removeClass('on')
        $(this).addClass('on')
    })

    $('.chartBox .btnToggle a').click(function () {
        $('.chartBox .btnToggle a').removeClass('on')
        $(this).addClass('on')
    })

    $('.toggleBox').click(function () {
        if($(this).hasClass('on')){
            $(this).removeClass('on')
        }else{
            $(this).addClass('on')
        }
    })

    $('.toggleBtn span.off').click(function () {
        $(this).closest('.toggleBtn').children('.toggleBox').removeClass('on')
    })

    $('.toggleBtn span.on').click(function () {
        $(this).closest('.toggleBtn').children('.toggleBox').addClass('on')
    })

    
});

$(document).on("click", ".eventList", function (e) {
    $('.eventList').removeClass('on')
    $(this).addClass('on')
});
