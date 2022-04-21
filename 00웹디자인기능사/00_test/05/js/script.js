// submenu
$(".menu>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(300)
}).mouseout(function(){
    $(this).find(".submenu").stop().slideUp(300)
})


// slide
let num = 0;
let depth = 0;

function slideFade(){
    num++;
    depth++;
    if(num == 4){
        num = 1;
        $(".slide").css({top:0})
    }
    $(".slide-item").eq(num).css({opacity:0,"z-index":depth})
    $(".slide-item").eq(num).animate({opacity:1},300)
}

setInterval(slideFade,3000)


// tabmenu
$(".tabmenu>div").click(function(e){
    e.preventDefault();
    let i = $(this).index();

    $(".tabmenu>div").removeClass("active");
    $(this).addClass("active");

    $(".content>ul").hide().eq(i).fadeIn();
})


// popup
$(".popup").click(function(){
    $(".popView").fadeIn();
})
$(".close").click(function(){
    $(".popView").hide();
})
