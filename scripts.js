const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function square(){
    ctx.beginPath()
    ctx.rect(20, 50, 150, 150)
    ctx.fillStyle = "#ff5555"
    ctx.fillRect(20, 50, 150, 150)
    ctx.closePath()
}

function circle(){
    ctx.beginPath()
    ctx.arc(100,300,80,0,2*Math.PI)
    ctx.fillStyle = "#00e7ed"
    ctx.fill()
    ctx.closePath()
}
function triangle(){
    ctx.beginPath();
    ctx.moveTo(300,42)
    ctx.lineTo(300 + 160/2 ,42 + 160)
    ctx.lineTo(300 - 160/2 ,42 + 160)
    ctx.fillStyle = "#ffe04a"
    ctx.fill()
    ctx.closePath()
}
function hexagon(){
    ctx.beginPath()
    ctx.moveTo(400,500)
    ctx.fillStyle = "#fe0e0f"
    ctx.fill() 
    ctx.closePath()
}

function rectangle(){
    ctx.beginPath()
    ctx.rect(500, 350, 300, 120)
    ctx.fillStyle = "#00ce52"
    ctx.fillRect(500, 350, 300, 120)
    ctx.closePath()   
}

square()
circle()
triangle()
rectangle()

hexagon()
pentagon()