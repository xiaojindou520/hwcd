$(document).ready(function(){

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

    //首页产品图片
    $('.ireslist').hover(function () {
        $(this).find('.mousebg').stop().fadeIn("");
        //console.log(1);
    },function () {
        $(this).find('.mousebg').stop().fadeOut("");
    });

    //下拉菜单
    $("#s1").mouseenter(function () {
        $(".subg").stop().slideDown();
        $(".submenu").hide();
        $("#ss1").show();
    });
    $("#s2").mouseenter(function () {
        $(".subg").stop().slideDown();
        $(".submenu").hide();
        $("#ss2").show();
    });
    $(".subg").mouseleave(function () {
        $(this).slideUp();
    });

    //搜索栏
    $("#open").click(function () {
        $(".search").show();
        $(".search").animate({
            top:'41',
        },"")
    });
    $("#close").click(function () {
        $(".search").animate({
            top:'-100',
        },"",function () {
            $(this).hide();
        })
    });
});
//禁止右键
document.oncontextmenu = function(){
    return false;
};
//禁止选中
document.onselectstart = function(){
    return false;
};



