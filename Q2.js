let car= document.getElementById('car')
car.style.left='5px'
let timer = null
function start(){
    car.style.left= (parseInt(car.style.left)+5) + 'px'
    console.log(car.style.left);
    timer =setTimeout(start,25)
}
function stop(){
    clearTimeout(timer)
}
function reset(){
    car.style.left = '5px'
    stop()
}
