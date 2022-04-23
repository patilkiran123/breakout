const grid = document.querySelector('.grid')
const blockWidth = 100 
const blockHeight = 20
const boardWidth = 460
let timerId

const userStart = [230,10]
let currentPosition = userStart
const ballStart = [270,40]
let ballCurrentPosition = ballStart

// create block
class Block {
    constructor(x,y) {
        this.bottomLeft = [x,y]
        this.bottomRight = [x + blockWidth , y ]
        this.topLeft = [x , y + blockHeight]
        this.topRight = [x + blockWidth, y + blockHeight]
    }
}

// all my blocks
const blocks = [
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),
    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),
    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210)
]

// draw all my block
function addBlocks(){
    for(let i=0;i<blocks.length;i++){
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'
        grid.appendChild(block) 
    }
}
addBlocks()

// make user
const user = document.createElement('div')
user.classList.add('user')
grid.appendChild(user)
userCordinate()

// user position
function userCordinate(){
    user.style.left = currentPosition[0]+'px'
    user.style.bottom = currentPosition[1]+'px'
}

// move user
function moveUser(e){
    switch (e.key){
        case 'ArrowLeft':
            if(currentPosition[0] > 0){
            currentPosition[0] -= 10
            userCordinate()
            }
            break;
        case 'ArrowRight':
            if(currentPosition[0] < boardWidth){
            currentPosition[0] += 10
            userCordinate()
            }
            break;
    }
}
document.addEventListener('keydown',moveUser)

// make ball
const ball = document.createElement('div')
ball.classList.add('ball')
grid.appendChild(ball)
ballCordinate()

// ball position
function ballCordinate(){
    ball.style.left = ballCurrentPosition[0]+'px'
    ball.style.bottom = ballCurrentPosition[1]+'px'
}

// move ball
function moveBall(){
    ballCurrentPosition[0] += 2
    ballCurrentPosition[1] +=2
    ballCordinate()
}
timerId = setInterval(moveBall, 30)

// check for collision