Page({
    seachall: function(event){
        console.log(event)
        var request = new XMLHttpRequest();
        var timeout = fale;
        var timer = setTimeout(function(){
            timeout = true;
            request.abort();
        },time);
        request.open("GET","www.baidu.com");
        request.onreadystatechange = function(){
            if(request.readyState!==4) return;
            if(timeout) return;
            clearTimeout(timer);
            if(request.status ===200){
                callback( request.responseText);               
            }
        }
        request.send(null)
        console.log(request);
    }
    }

)