'use strict';

/** 
 * SHS 네임스페이스
 * 리빙센스 스페이스 웹 사이트에 사용되는 자바스크립트의 최상위 클래스 입니다.
 * @author 유현우(2021.01.06)
 * @namespace SHS 
 */
var SHS = SHS || {};

/**
 * SHS.Web 네임스페이스
 * 리빙센스 스페이스 웹 사이트에 사용되는 Web 클래스 입니다.
 * @namespace SHS.Web
 */
SHS.Web = SHS.Web || {};

/**
 * SHS.Web.Common 네임스페이스
 * 리빙센스 스페이스 웹 사이트에서 사용되는 Common 클래스 입니다.
 * @class SHS.Web.Common
 */
SHS.Web.Common = SHS.Web.Common || {};

/**
 * SHS.Web.Common 클래스를 참조하는 글로벌 멤버 변수
 * @interface comm
 */
var comm = SHS.Web.Common;
 comm = {

    /**
     * 사용자 로그인시 사용되는 공통 메서드 입니다.
     * @param {string} userId 회원 아이디
     * @param {string} password 회원 비밀번호
     */
    login: function(userId, password) {
        var uid = userId;
        var pwd = password;
        $.ajax(function() {
            //API에 접근해서 데이터를 보내고, 결과값을 받는다.
        });
    },

    /**
     * 사용자 로그아웃시 사용되는 공통 메서드 입니다.
     * @param {string} userNo 회원 번호
     */
    logOut: function(userNo) {
        var uno = userNo;
        $.ajax(function() {
            //API에 접근해서 유저번호 데이터를 보내고, 결과값을 받는다.
        });
    },

    /**
     * 회원가입
     * @param {Object[]} userInfo 가입 정보
     */
    signUp: function(userInfo) {},

    /**
     * 회원탈퇴
     * @param {string} userNo 회원 번호
     */
    signOut: function(userNo) {},

    /**
     * 공지사항 목록 가져오기
     */
    noticeList: function() {},

    /**
     * FAQ 목록 가져오기
     */
    faq: function() {},

    /**
     * 마이보드 정보 가져오기
     * @param {string} userNo 회원 번호
     */
    myBoardInfo: function(userNo){},
}