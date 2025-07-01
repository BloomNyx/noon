$(document).ready(function(){       
    $(document).on("click", ".footer_logo", function () {
        location.href = '/'
    });

    $(document).on("click", ".topBtn", function () {
        var offset = $('body').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
});