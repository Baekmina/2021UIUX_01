$(document).ready(function(){ // 스크립트가 맨 위에서 실행하기 때문임.
    // tab 이미지
    $(".thumb li").click(function(){
        let i = $(this).index();
        console.log(i)
        $("#image p").hide();
        $("#image p").eq(i).show();
        // $("#image p").hide().eq(i).show(); // 주어가 같을 경우
    })


    // 버튼적용
    let current = 0;
    let dClick = true;
    
    $(".right").click(function(){
        current++;
        if(current == 3) current = 0; // 3이 되면 0으로 계속 값을 잡아주는 것.
        console.log(current)
        move();
    });

    $(".left").click(function(){
        current--;
        if(current == -1) current = 2; // 2, 1, 0 으로 값이 나옴.
        console.log(current);
        move();
    })

    function move(){
        // $(".thumb ul").css("left",current * -760);
        // $(".thumb ul").css({left : current * -760});
        
        let cNum = current * -760;

        $(".thumb ul").stop().animate({left:cNum},300)
            // stop : 더블클릭을 하면 계속 움직이기 때문에
            // 맨 끝 300은 duration 값임. 0.3s랑 똑같음.
        
    }

})