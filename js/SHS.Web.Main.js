'use strict';

/**
 * SHS.Web.Main 네임스페이스
 * 리빙센스 스페이스 웹 사이트에서 사용되는 Main 클래스 입니다.
 * @class SHS.Web.Main
 */
SHS.Web.Main = SHS.Web.Main || {};

/**
 * SHS.Web.Main 클래스를 참조하는 글로벌 멤버 변수
 * @interface main
 */
var main = SHS.Web.Main;
main = {

    alertContent: function () {
        var result = '';
        var resultStr = '';
        $.ajax({
            method: "get",
            url: "/api/main_notice_list",
            async: false,
            success: function (data) {
                result = data;
                // alert(data[0].cctv_ip)
            }, // success 
            error: function (xhr, status) {
                // alert(xhr + " : " + status);
            },
        });

        var pattern = new RegExp('<img[^<>]*>');
        var patternImg = new RegExp('data[^<>]*');
        var pattern1 = new RegExp('<span[^<>]*>[^<>]*</span>');
        var pattern2 = new RegExp('<h[^<>]*>[^<>]*</h[^<>]*>');
        var pattern3 = new RegExp('<p[^<>]*>[^<>]*</p>');


        for (var i = 0; i < result.length; i++) {
            var thumbnail = pattern.exec(""+result[i].content+"")
            var content = pattern1.exec(""+result[i].content+"")
            var thumbnail = pattern.exec(""+result[i].content+"")
            var content = pattern1.exec(""+result[i].content+"")
            if(thumbnail==null){
                thumbnail1 = [''];
                var split = ['./static/imgs/common/mhn_mini_logo.png']
            }
            else{
                var thumbnail1 = patternImg.exec(""+thumbnail+"")
                var src = thumbnail1[0];
                var split = src.split('"');
            }
            if(content==null){
                content = pattern2.exec(""+result[i].content+"")
                if(content==null){
                    content = pattern3.exec(""+result[i].content+"")
                    if(content==null){
                        content='';
                    }
                }
            }
            if(result[i].type=='소식'){
                var type = '보도자료'
                var color = '#3fa9f5'
            }
            else if(result[i].type=='공지'){
                var type = '공지사항'
                var color = '#00979c'
            }
            else if(result[i].type=='포스트'){
                var type = '포스트'
                var color = '#00d337'
            }
            else{
                var type = '없 음'
                var color = '#595757'
            }
            // if(content[1]==null){
            //     var content1 = '<span>더보기</span>'
            // }
            // else{
            //     var content1 = "<br>"+content[1]+"<span>더보기</span>"
            // }
            var date = new Date(result[i].notice_date)
            if (date.getMonth() < 9 && date.getDate() > 9) {
                date = date.getFullYear() + '.0' + (date.getMonth() + 1) + '.' + date.getDate();
            }
            else if (date.getMonth() < 9 && date.getDate() <= 9) {
                date = date.getFullYear() + '.0' + (date.getMonth() + 1) + '.0' + date.getDate();
            }
            else if(date.getMonth() >= 9 && date.getDate() <= 9){
                date = date.getFullYear() + '.' + (date.getMonth() + 1) + '.0' + date.getDate();
            }
            else if(date.getMonth() >= 9 && date.getDate() > 9) {
                date = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
            }
            resultStr += "<div class='communityCard' data-idx="+result[i].notice_idx+" data-num="+result[i].notice_num+" style='cursor: pointer;'>\
                <div class='thumbnail' style='background:url("+split[0]+"); background-size: cover; background-position: 50% 50%;'></div>\
                <div class='communityDiv'>\
                    <div class='noticeType' style='background-color:"+color+";'><p>"+type+"</p></div>\
                    <div class='title'><h1>"+ result[i].title + "</h1></div>\
                    <div class='content'>"+content+"</div>\
                    <div class='date'><p>"+date+"</p></div>\
                </div>\
            </div>"
        }
        return resultStr
    },

    notice_save_idx: function (idx, num) {
        var data = { idx: idx, num:num};
        $.ajax({
            method: "post",
            url: "/api/user_notice_save_idx",
            dataType: 'json',
            data: data,
            success: function (data) {
            }, // success 
            error: function (xhr, status) {
                // alert(xhr + " : " + status);
            }
        })
    },
}