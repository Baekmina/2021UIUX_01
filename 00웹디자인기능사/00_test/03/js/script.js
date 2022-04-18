// submenu
$(".menu>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(300)
})
$(".menu>li").mouseout(function(){
    $(".submenu").stop().slideUp(300);
})


// slide
let num = 0;

function slideLeft(){
    num++;
    if(num == 4){
        num=1;
        $(".slide").css({left:0});
    }

    $(".slide").animate({left:-100*num+"%"},300)
}

setInterval(slideLeft,2000)


// popup
$(".popup").click(function(e){
    e.preventDefault();
    $(".popView").fadeIn();
})
$(".close").click(function(){
    $(".popView").hide();
})