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

    //产品分类菜单
    $(".catemenu dt").click(function () {
        $(".catemenu dd").stop().slideUp();
        $(".catemenu dt span").css("transform","rotate(0deg)");
        $(this).closest("dl").find("dd").stop().slideDown();
        $(this).find("span").css("transform","rotate(180deg)")
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

    //产品图片展示
    $(".prospic ul li:first").css("border","#333 solid 1px");
    $(".prospic ul li").mouseenter(function () {
        var src1 = $(this).find("img").attr("src");
        //console.log(src);
        $(this).css("border","#333 solid 1px").siblings().css("border","#fff solid 1px");
        $(".propic").find("img").attr("src",src1);
    });

    //颜色规格选择
    $(".yanse ul li span").click(function () {
        $(this).css("border","#333 solid 1px").parent().siblings().find("span").css("border","#f5f5f5 solid 1px");
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



