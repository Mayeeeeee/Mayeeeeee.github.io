/**
 * Created by Leon on 2017/11/8.
 */
$(document).ready(function () {
    $("#h").css("width",$(window).width());
    var welcome_m = $("#welcome_m");
    $("#welcome").css("height",$(window).height());
    welcome_m.css("top",$(window).height()/2-welcome_m.height()/2+"px");

    /*var ux =$("#UX");
    ux.css("height",$(window).height()-150+"px");
    $("#uxm").css("margin-top",$(window).height()/2-$("#uxm").height()/2-50);*/
    $("#g").click(function () {
        $('html,body').animate({scrollTop:'0'}, 600);
    });
    $("#ghome").click(function () {
        $('html,body').animate({scrollTop: '0'}, 600);
    });
    $("#gux").click(function () {
        $('html,body').animate({scrollTop:$('#UX').offset().top}, 600);
    });
    $("#gothers").click(function () {
        $('html,body').animate({scrollTop:$('#other').offset().top}, 600);
    });
    $("#gabout").click(function () {
        $('html,body').animate({scrollTop:$('#about').offset().top}, 600);
    });
    $("#g2").click(function () {
        $('html,body').animate({scrollTop:'0'}, 600);
    });
    $("#ghome2").click(function () {
        $('html,body').animate({scrollTop: '0'}, 600);
    });
    $("#gux2").click(function () {
        $('html,body').animate({scrollTop:$('#UX').offset().top}, 600);
    });
    $("#gothers2").click(function () {
        $('html,body').animate({scrollTop:$('#other').offset().top}, 600);
    });
    $("#g3").click(function () {
        $('html,body').animate({scrollTop:'0'}, 600);
    });
    $("#ghome3").click(function () {
        $('html,body').animate({scrollTop: '0'}, 600);
    });
    $("#gux3").click(function () {
        $('html,body').animate({scrollTop:$('#UX').offset().top}, 600);
    });
    $("#gothers3").click(function () {
        $('html,body').animate({scrollTop:$('#other').offset().top}, 600);
    });
    $(window).scroll(function () {
        if($(window).scrollTop()<100){
            $("#g").css("display","none")
        }else {
            $("#g").css("display","inline")
        }
    });

});

