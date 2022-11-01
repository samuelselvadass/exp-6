function change(value){
    let container=document.getElementById('container').style
    let bgColor = document.getElementById('bgColor').value
    let textColor= document.getElementById('textColor').value
    let radius = document.getElementById('radius').value+ '%'
    let height = document.getElementById('height').value+ 'px'
    let width = document.getElementById('width').value+ 'px'

    container.background=bgColor
    container.color=textColor
    container.borderRadius=radius
    container.height=height
    container.width=width
    
}