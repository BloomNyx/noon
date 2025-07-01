$(document).ready(function(){       
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5; // 동작의 구현이 시작되는 위치
    var navbarHeight = $('.header').outerHeight(); // 영향을 받을 요소를 선택

    // 스크롤시에 사용자가 스크롤했다는 것을 알림
    $(window).scroll(function(event){
        didScroll = true;
    });

    // hasScrolled()를 실행하고 didScroll 상태를 재설정
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    // 동작을 구현
    function hasScrolled() {
        // 접근하기 쉽게 현재 스크롤의 위치를 저장한다.
        var st = $(this).scrollTop();
        
        // 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
        if(Math.abs(lastScrollTop - st) <= delta){
            return;
        }
        
        // 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.header').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        // lastScrollTop 에 현재 스크롤위치를 지정한다.
        lastScrollTop = st;
    }

    $(document).on("click", ".logo", function () {
        location.href = '/'
    });
    $(document).on("click", ".header_company", function () {
        location.href = '/company'
    });
    $(document).on("click", ".header_noonai", function () {
        location.href = '/noonai'
    });
    $(document).on("click", ".header_itsolution", function () {
        location.href = '/itsolution'
    });
    $(document).on("click", ".header_community", function () {
        location.href = '/community'
    });
    $(document).on("click", ".header_contact", function () {
        location.href = '/contact'
    });
    $(document).on("click", ".header_notice", function () {
        location.href = '/notice'
    });
    $(document).on("click", ".header_qna", function () {
        location.href = '/qna'
    });

    /* 추가로 웹페이지의 스크롤을 내렸을때를 감지해 코드를 실행시키는 함수입니다.
    $(window).scroll(function(){ 
    if($(window).scrollTop() == $(document).height() - $(window).height()){ 
        // 실행할 함수
    } 
    });
    */
});