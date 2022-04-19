// kakao api

// $.ajax({
//     url:'https://dapi.kakao.com/v2/search/web',
//     type:'GET',
//     dataType:'json',
//     data:{query:"코로나"},
//     beforeSend:onBefore,
//     success:onSuccess,
//     error:onError,
// })

// function onBefore(xhr){
//     xhr.setRequestHeader(
//         'Authorization', 'KakaoAK 7f69c3e2fd32d6a14370c3ed9b0108a1',
//     )
// }
// function onSuccess(v){
//     console.log(v)
// }
// function onError(xhr,status,error){
//     console.log(xhr,status,error)
// }



$(".search-form").submit(onSubmit);
function onSubmit(e) {
    e.preventDefault(); // 검색창에서 엔터 눌렀을 때 반짝하는 것을 막아줌
    // document.querySelector("input[name='query']").value // 자바스크립트
    let query = $(this).find("input[name='query']").val().trim();
    // trim : 문자의 양 옆 공간을 없애주는 것

    axios
        .get(
            'https://dapi.kakao.com/v2/search/web?size=50',
            {
                params: { query: query },
                headers: { Authorization: 'KakaoAK 7f69c3e2fd32d6a14370c3ed9b0108a1' },
            }
        )
        .then(onResult)
        .catch(onError);
}

function onResult(v){
    console.log(v.data);
    let r = v.data;
    let rDoc = r.documents;
    let txt = "";

    // rDoc.forEach(function(item,index){});
    rDoc.forEach(function(item,index){
        txt += `<div class="col-6 col-md-4 mb-3">
                    <h5><a href="${item.url}" target="_blank">${item.title}</a></h5>
                    <p>${item.contents}</p>
                </div>`
    });
    
    $(".lists").html(txt)
}

function onError(err){
    console.log(err);
}
