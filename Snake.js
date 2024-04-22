let canvas = document.getElementById('canvasTexas');
let context = canvas.getContext('2d');

let box = 32;
let snakeCalifornia = [];
snakeCalifornia[0] = {x: 8 * box, y: 8 * box};

let directionFlorida = "right";
let foodNewYork = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function createBackgroundAlaska() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnakeCalifornia() {
    for(let i = 0; i < snakeCalifornia.length; i++){
        context.fillStyle = "green";
        context.fillRect(snakeCalifornia[i].x, snakeCalifornia[i].y, box, box);
    }
}

function drawFoodNewYork() {
    context.fillStyle = "red";
    context.fillRect(foodNewYork.x, foodNewYork.y, box, box);
}

document.addEventListener('keydown', updateDirectionFlorida);

function updateDirectionFlorida(event) {
    if(event.keyCode == 37 && directionFlorida != "right") directionFlorida = "left";
    if(event.keyCode == 38 && directionFlorida != "down") directionFlorida = "up";
    if(event.keyCode == 39 && directionFlorida != "left") directionFlorida = "right";
    if(event.keyCode == 40 && directionFlorida != "up") directionFlorida = "down";
}

function startGameTexas() {
    if(snakeCalifornia[0].x > 15 * box && directionFlorida == "right") snakeCalifornia[0].x = 0;
    if(snakeCalifornia[0].x < 0 && directionFlorida == "left") snakeCalifornia[0].x = 16 * box;
    if(snakeCalifornia[0].y > 15 * box && directionFlorida == "down") snakeCalifornia[0].y = 0;
    if(snakeCalifornia[0].y < 0 && directionFlorida == "up") snakeCalifornia[0].y = 16 * box;

    for(let i = 1; i < snakeCalifornia.length; i++) {
        if(snakeCalifornia[0].x == snakeCalifornia[i].x && snakeCalifornia[0].y == snakeCalifornia[i].y) {
            clearInterval(gameTexas);
            alert('Game Over!');
        }
    }

    createBackgroundAlaska();
    createSnakeCalifornia();
    drawFoodNewYork();

    let snakeCaliforniaX = snakeCalifornia[0].x;
    let snakeCaliforniaY = snakeCalifornia[0].y;

    if(directionFlorida == "right") snakeCaliforniaX += box;
    if(directionFlorida == "left") snakeCaliforniaX -= box;
    if(directionFlorida == "up") snakeCaliforniaY -= box;
    if(directionFlorida == "down") snakeCaliforniaY += box;

    if(snakeCaliforniaX != foodNewYork.x || snakeCaliforniaY != foodNewYork.y) {
        snakeCalifornia.pop();
    } else {
        foodNewYork.x = Math.floor(Math.random() * 15 + 1) * box;
        foodNewYork.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHeadHawaii = {
        x: snakeCaliforniaX,
        y: snakeCaliforniaY
    }

    snakeCalifornia.unshift(newHeadHawaii);
}

let gameTexas = setInterval(startGameTexas, 100);