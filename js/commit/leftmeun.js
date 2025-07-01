$(document).ready(function(){       
       
    $('.m_menuBtn').click(function(){
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        $('#leftMenu').addClass('active')
    })
 
    $('.m_closeBtn').click(function(){
        document.getElementsByTagName("body")[0].style.overflow = "auto";
        $('#leftMenu').removeClass('active')
    })

});