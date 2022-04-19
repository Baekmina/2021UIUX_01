// submenu
$(".menu>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown();
})
$(".menu>li").mouseout(function(){
    $(".submenu").stop().slideUp();
})


// slide
let num = 0;
let depth = 0;

function slideFade(){
    num++;
    depth++;
    if(num == 4){
        num = 1;
        
    }
    $(".slide>div").eq(num).css({opacity:0,"z-index":depth}).animate({opacity:1},1000)
}

setInterval(slideFade,3000)



// popup
$(".popup").click(function(){
    $(".popView").fadeIn();
})
$(".close").click(function(){
    $(".popView").hide();
})