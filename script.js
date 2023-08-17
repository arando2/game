document.addEventListener("DOMContentLoaded", function () {
    const character = document.getElementById("character");
    let positionX = window.innerWidth / 2;
    let positionY = window.innerHeight - character.offsetHeight;
    const speed = 1.5;
    const keysPressed = {};

    function moveCharacter() {
        if (keysPressed["w"]) {
            positionY -= speed;
        }
        if (keysPressed["a"]) {
            positionX -= speed;
        }
        if (keysPressed["s"]) {
            positionY += speed;
        }
        if (keysPressed["d"]) {
            positionX += speed;
        }

        if (positionX < 0) {
            positionX = 0;
        } else if (positionX > window.innerWidth - character.offsetWidth) {
            positionX = window.innerWidth - character.offsetWidth;
        }

        if (positionY < 0) {
            positionY = 0;
        } else if (positionY > window.innerHeight - character.offsetHeight) {
            positionY = window.innerHeight - character.offsetHeight;
        }

        character.style.left = positionX + "px";
        character.style.top = positionY + "px";
        requestAnimationFrame(moveCharacter);
    }

    document.addEventListener("keydown", function (event) {
        keysPressed[event.key] = true;
    });

    document.addEventListener("keyup", function (event) {
        keysPressed[event.key] = false;
    });

    requestAnimationFrame(moveCharacter);
});
