//屏蔽滚动条
function unScroll() {
    var top = $(document).scrollTop();
    $(document).on('scroll.unable',function (e) {
        $(document).scrollTop(top);
    })
}
  //去除屏蔽滚动条
function removeUnScroll() {
    $(document).unbind("scroll.unable");
}
console.log(1)

$(window).load(function(){
    $(".btn-play").click(function(){
        $(".banner-video").css("display","block")
        $(".fullmask").css("display","block")
    })
    $(".banner-div div").click(function(){
        $(".banner-video").css("display","none")
        $(".fullmask").css("display","none")
    })
})
//滚轮事件
window.onscroll=function(){
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    //服务部分
    console.log(t)
    var elem = $("#service");
    if(t == 0){
        $(".wrap>div").attr("class","head_wrap");
    }
    if(t>0){
        $(".wrap>div").attr("class","head_wrap bga");
    }
    if(t>500){
        $(".news-item-1").attr("class","news-item news-item-1 fadeup in");
    }
    if(t>500){
        $(".news-item-2").attr("class","news-item news-item-2 fadeup in");
    } 
    if(t>500){
        $(".news-item-3").attr("class","news-item news-item-3 fadeup in");
    }
    if(t<500){
        $(".news-item-1").attr("class","news-item news-item-1 fadeup ");
    }
    if(t<500){
        $(".news-item-2").attr("class","news-item news-item-2 fadeup ");
    } 
    if(t<500){
        $(".news-item-3").attr("class","news-item news-item-3 fadeup ");
    }
    if(t>1000){
        printer()
    }
    if(t<1000){
        numberp = 0
        document.getElementById("des").innerHTML = ""
    }                     
}