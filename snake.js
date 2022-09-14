
let canvas = document.getElementById("snake");
let ctx = canvas.getContext("2d");

let snakeX = 200;
let snakeY = 200;
let direction = '';

function drawBackground(){
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 400, 400);
}
function drawSnake(){
ctx.fillStyle = "blue";
ctx.fillRect(snakeX, snakeY, 20, 20);
}

function update() {
    if(direction == 'right'){
    snakeX += 20;
    } else if(direction == 'left'){
        snakeX -= 20;
    }else if(direction == 'down'){
        snakeY += 20;
    }else if(direction == 'up'){
        snakeY -= 20;
    }

    drawBackground();
    drawSnake();
}

function changeDirection(event){
    if(event.code == 'ArrowUp'){
        direction = 'up';
    }if(event.code == 'ArrowDown'){
        direction = 'down';
    }if(event.code == 'ArrowRight'){
        direction = 'right';
    }if(event.code == 'ArrowLeft'){
        direction = 'left';
    }

}


drawBackground();
drawSnake();

setInterval(update, 25)
addEventListener('keydown', changeDirection);
 
