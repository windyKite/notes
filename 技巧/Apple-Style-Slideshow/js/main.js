let buttons = $('.container .buttons ul li')
let n = 0
let size = buttons.length
for(let i = 0; i < size; i++){
    $(buttons[i]).on('click',function(e){
        let index = i
        let slideWidth = i * -920
        slide(slideWidth)
        activeButton(i)
        n = index
    })
}

let timer = setTimer()


$('.images').on('mouseenter',function(){
    window.clearInterval(timer)
})
$('.images').on('mouseleave',function(){
    timer = setTimer()
})



function slide(slideWidth){
    $('.images').css({
        transform: `translateX(${slideWidth}px)`
    })
}
function activeButton(i){
    buttons.eq(i).addClass('active').siblings('.active').removeClass('active')
}

function setTimer(){
    return setInterval(function(){
        buttons.eq(n%size).trigger('click')
        n += 1
    },2500)
}
