document.addEventListener("DOMContentLoaded", () => {
    const gameArea = document.getElementById("game-area");
    const snake = document.getElementById("snake");
    const apple = document.getElementById("apple");

    let snakeX = 0;
    let snakeY = 0;
    let appleX = 0;
    let appleY = 0;
    let snakeSpeed = 100;
    let snakeDirection = "right";
    let snakeLength = 1;

    function placeApple() {
        appleX = Math.floor(Math.random() * 20) * 20;
        appleY = Math.floor(Math.random() * 20) * 20;
        apple.style.left = appleX + "px";
        apple.style.top = appleY + "px";
    }

    function moveSnake() {
        switch (snakeDirection) {
            case "right":
                snakeX += 20;
                break;
            case "left":
                snakeX -= 20;
                break;
            case "up":
                snakeY -= 20;
                break;
            case "down":
                snakeY += 20;
                break;
        }

        snake.style.left = snakeX + "px";
        snake.style.top = snakeY + "px";

        if (snakeX === appleX && snakeY === appleY) {
            snakeLength++;
            placeApple();
        }
    }

    function gameLoop() {
        moveSnake();

        if (snakeX < 0 || snakeX >= 400 || snakeY < 0 || snakeY >= 400) {
            alert("Game Over");
            return;
        }

        setTimeout(gameLoop, snakeSpeed);
    }

    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowUp":
                if (snakeDirection !== "down")
                    snakeDirection = "up";
                break;
            case "ArrowDown":
                if (snakeDirection !== "up")
                    snakeDirection = "down";
                break;
            case "ArrowLeft":
                if (snakeDirection !== "right")
                    snakeDirection = "left";
                break;
            case "ArrowRight":
                if (snakeDirection !== "left")
                    snakeDirection = "right";
                break;
        }
    });

    placeApple();
    gameLoop();
});
