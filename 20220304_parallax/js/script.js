// let layer = document.querySelector(".layer"); // 전체 중에 첫번째
let layer = document.querySelectorAll(".layer"); // 전체에서 내가 하고 싶은 순서를 뒤에 [0] 붙이기.

window.addEventListener("scroll",function(){
    console.log(window.pageYOffset); // pageYOffset : scroll 내렸을 때 남은 간격의 값

    // 주어.style.transform = translateY()
    let scrollTop = window.pageYOffset;
    // -scrollTop : 마이너스는 이미지가 빨리 올라갈 수 있도록 함.

    layer.forEach(function(item,index){
        console.log(item.dataset.speed); //dataset = html에서 data- 
        let speed = item.dataset.speed;
        // item.style.transform = "translateY("+ scrollTop +"px)";
        // item.style.transform = `translateY(${scrollTop/speed*4}px)`; //속도를 더 늦추기 위해 * 사용
        item.style.transform = `translate3d(0,${scrollTop/speed*4}px,0)`; 
        //parallax같은 사이트를 만들때는 3d사용
        // `0,${},0` 맨 앞에 있는 0은 x축으로 움직일 수 있게함. 왼쪽은 -scrollTop으로 만들면 됨.
    });

});