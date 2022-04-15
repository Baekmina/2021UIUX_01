// submenu
$(".menu>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(300);
})
$(".menu>li").mouseout(function(){
    $(".submenu").stop().slideUp(300)
})


// slide
let num = 0;

function slideLeft(){
    num++;
    console.log(num)
    if(num == 4 ){
        num = 1;
        $(".slider").css({left:0})
    }
    $(".slider").stop().animate({left:-100 * num +"%"},300)
}

setInterval(slideLeft,2000)


// tab menu
$(".tab>div").click(function(e){
    e.preventDefault();
    let i = $(this).index();
    
    $(".tab>div").removeClass("active");
    $(this).addClass("active")

    $(".content li").hide().eq(i).fadeIn();
})


// popup
$(".popView").hide();
$(".popup").click(function(e){
    e.preventDefault();
    $(".popView").fadeIn();
})
$(".close").click(function(){
    $(".popView").hide();
})
