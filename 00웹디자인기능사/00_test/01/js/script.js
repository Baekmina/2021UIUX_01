// submenu
$(".menu>li").mouseover(function(){
    $(this).find(".submenu").stop().fadeIn();
    // $(".submenu>li").stop().fadeIn(300);
})
$(".menu").mouseout(function(){
    $(this).find(".submenu").stop().fadeOut();
    // $(".submenu>li").stop().fadeOut(300)
})

// slide
let num = 0;
let depth = 0;

function slideFade(){
    num++;
    depth++;
    if(num == 3){
        num=1;
        $(".slide").css({top:0})
    }
    $(".slide .slide_item").eq(num).css({opacity:0,"z-index":depth})
    $(".slide .slide_item").eq(num).animate({opacity:1},3000)
}

setInterval(slideFade,3000)


// tab menu
$(".tab>div").click(function(e){
    e.preventDefault();
    let i = $(this).index();
    $(".tab>div").removeClass("active");
    $(this).addClass("active");

    $(".content ul").hide().eq(i).show();
})


// popup
$(".popup").click(function(e){
    e.preventDefault();
    $(".popView").show();
})
$(".close").click(function(){
    $(".popView").hide();
})