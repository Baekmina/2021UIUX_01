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

axios
.get(
    'https://dapi.kakao.com/v2/search/vclip',
    {
        params:{query:'BTS'},
        headers:{Authorization:'KakaoAK 7f69c3e2fd32d6a14370c3ed9b0108a1'},
    }
)
.then(onResult)
.catch(onError);


function onResult(v){
    console.log(v.data);
    let r = v.data;
    let rDoc = r.documents;
    let txt = "";

    // rDoc.forEach(function(item,index){});
    rDoc.forEach(function(item,index){
        txt += `<div class="col-6 mb-3">
                    <h5><a href="${item.url}" target="_blank">${item.title}</a></h5>
                    <p><img src="${item.thumbnail}" class="w-100"></p>
                </div>`
    });
    
    $(".lists").html(txt)
}

function onError(err){
    console.log(err);
}
