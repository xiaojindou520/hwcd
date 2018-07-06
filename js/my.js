$(document).ready(function(){
    //导航
    $('.menu ul li').mouseenter(function () {
        $(this).find('ul').stop().slideDown();
        $(this).find('.mline').stop().animate({width:'100%'});
    });
    $('.menu ul li').mouseleave(function () {
        $(this).find('ul').stop().slideUp();
        $(this).find('.mline').stop().animate({width:'0'});
    });

    //移动端导航
    $("ul.menum").hide();
    $(".drop").click(function () {
        $(".mainbox").animate({
            left:"-100%"
        },function () {
            $(".mainbox").hide();
        });
        $(".header").animate({
            width:"0"
        });
        $("ul.menum").show().animate({
            left:"0"
        });
    });

    $(".meclose").click(function () {
        $(".mainbox").show().animate({
            left:"0"
        });
        $(".header").animate({
            width:"100%"
        });
        $("ul.menum").animate({
            left:"100%"
        },function () {
            $("ul.menum").hide();
            $(".navbar").show();
        });
    });

    //移动端二级导航
    $('ul.menum li span').not(".colse").click(function () {
        $(this).closest('li').find('ul').slideToggle("liner");
        this.flag?$(this).html("+"):$(this).html("-");
        this.flag = !this.flag;
    });

    //PRJECTS搜索下拉
    $('.sel').click(function (e) {
        e.stopPropagation();
        $('.sel ul.abc').slideUp();
        $(this).find('ul.abc').stop().slideToggle();
        $(document).click(function () {
            $('.sel ul.abc').slideUp();
        })
    });

    $('.sel ul.abc li').click(function () {
       var txt = $(this).text();
       $(this).closest('.sel').find('.seltit').text(txt);
    });


    //projects img
    setTimeout(gao,50);
    function gao() {
        var ph = $('.proimg').height();
        $('.proboxbox').css('height',ph+'px');
    }
    $(window).resize(function () {          //当浏览器大小变化时
        var ph = $('.proimg').height();
        $('.proboxbox').css({
            height:ph+'px',
            overflow:'hidden'
        });
        /*$('.probox').css({
            position: 'relative',
            top: '50%',
            transform: 'translateY(-50%)'
        })*/
    });

    //projects hover
    $('#resText').on('mouseenter','.proj',function () {
        $(this).find('.zezao').stop().fadeIn();
    });
    $('#resText').on('mouseleave','.proj',function () {
        $(this).find('.zezao').stop().fadeOut();
    });

    //events hover
    $('.news').on('mouseenter',function () {
        $(this).find('.zezao').stop().fadeIn();
    });
    $('.news').on('mouseleave',function () {
        $(this).find('.zezao').stop().fadeOut();
    });


    //press RELEASES

    setTimeout(gao2,50)
    function gao2() {
        var rh = $('.press_pic img').height();
        $('.press_font').css('height',rh+'px');
    }

    $(window).resize(function () {          //当浏览器大小变化时
        var rh = $('.press_pic img').height();
        $('.press_font').css({
            height:rh+'px',
            overflow:'hidden'
        });
    });

    //标签页
    var tabtit = $(".tabtit"),
        tabcon = $(".tbtb"),
        index = 1;
    for(var i=0;i<tabtit.length;i++){
        tabtit[i].index = i;
        tabtit[i].onclick = function () {
            tabtit[index].className = "tabtit";
            tabcon[index].style.display = "none";
            this.className = "tabtit hh";
            tabcon[this.index].style.display = "block";
            index = this.index;
            console.log(this.index)
        }
    }
    $('.ewm').hide();
    $('.black').hide();
    $('.mowechart').hide();
    //二维码
    /*
    $('#ewm').click(function (e) {
        $('.ewm').stop().fadeIn();
        e.stopPropagation();
    });
    $(document).click(function () {
       $('.ewm').fadeOut();
    });
    $(document).on("click",".black",function () {
        $('.mowechart,.black').stop().fadeOut();
    });


    $('#wechart').click(function (e) {
        $('.black,.mowechart').css("opacity","1");
        $('.black').stop().fadeIn();
        $('.mowechart').show();
        $('.mowechart').addClass('bounceInDown animated');
        e.stopPropagation();
    })*/

    //下拉菜单
    $('.slide').hover(function () {
        $(this).find('dl').stop().slideDown("liner");
        console.log(1);
    },function () {
        $(this).find('dl').stop().slideUp("liner");
    })
});
//禁止右键
document.oncontextmenu = function(){
    return false;
}
//禁止选中
document.onselectstart = function(){
    return false;
}



