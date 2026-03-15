let car = document.getElementById("car")
let enemy1 = document.getElementById("enemy1")
let enemy2 = document.getElementById("enemy2")
let scoreText = document.getElementById("score")
let startBtn = document.getElementById("startBtn")

let carX = 160
let enemy1Y = -200
let enemy2Y = -400
let score = 0
let speed = 5

function moveCarLeft(){
carX -= 100
if(carX < 70) carX = 70
car.style.left = carX + "px"
}

function moveCarRight(){
carX += 100
if(carX > 270) carX = 270
car.style.left = carX + "px"
}

document.addEventListener("keydown", function(e){

if(e.key === "ArrowLeft"){
moveCarLeft()
}

if(e.key === "ArrowRight"){
moveCarRight()
}

})

document.getElementById("leftBtn").onclick = moveCarLeft
document.getElementById("rightBtn").onclick = moveCarRight

function moveEnemies(){

enemy1Y += speed
enemy2Y += speed

enemy1.style.top = enemy1Y + "px"
enemy2.style.top = enemy2Y + "px"

if(enemy1Y > 600){
enemy1Y = -200
score++
}

if(enemy2Y > 600){
enemy2Y = -400
score++
}

scoreText.innerHTML = "Score: " + score

let carLeft = car.offsetLeft

if(
(enemy1Y > 500 && carLeft === enemy1.offsetLeft) ||
(enemy2Y > 500 && carLeft === enemy2.offsetLeft)
){
alert("Game Over! Score: " + score)
location.reload()
}

if(score % 10 === 0){
speed += 0.5
}

}

startBtn.onclick = function(){

startBtn.style.display = "none"

setInterval(moveEnemies,50)

}
