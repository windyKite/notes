button.addEventListener('click',(e) => {
    let request = new XMLHttpRequest()
    request.open('get','http://localhost:8888/xxx')
    request.send()
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                let object = window.JSON.parse(request.responseText)
                userName.textContent = object.name
                age.textContent = object.age
            } else if(request.status >= 400){
                alert('请求失败')
            }
        }
    }
})