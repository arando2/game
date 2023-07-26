// This event listener ensures the code runs when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const character = document.getElementById("character");
    let positionX = window.innerWidth / 2; // Spawn the character at the center horizontally
    let positionY = window.innerHeight - character.offsetHeight; // Spawn the character at the bottom vertically
    const speed = 1.5; // Adjust this value to control the character's movement speed (half of the previous speed)

    const keysPressed = {}; // Store the state of keys being pressed

    // Function to handle the character's movement
    function moveCharacter() {
        // Update character position based on keys being pressed
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

        // Keep the character within the game container
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

        // Update the character's position on the screen
        character.style.left = positionX + "px";
        character.style.top = positionY + "px";

        // Request the next animation frame for smooth movement
        requestAnimationFrame(moveCharacter);
    }

    // Set keysPressed to true when a key is pressed and false when it's released
    document.addEventListener("keydown", function (event) {
        keysPressed[event.key] = true;
    });

    document.addEventListener("keyup", function (event) {
        keysPressed[event.key] = false;
    });

    // Handle opening the army manager screen
    const armyManagerBtn = document.getElementById("army-manager-btn");
    armyManagerBtn.addEventListener("click", function () {
        window.location.href = "army.html"; // Redirect to the army manager page
    });

    // Start the movement animation loop
    requestAnimationFrame(moveCharacter);
});
