document.addEventListener("DOMContentLoaded", function () {
    // Initialize resources and army properties
    let foodCount = 50; // Initialize the food supply to 50
    let armySpeed = 1.0; // The initial army speed (default value)
    let unitSpeedReduction = 0; // Speed reduction caused by units
    let resourceSpeedReduction = 0; // Speed reduction caused by resources
    let numHorses = 0; // Number of horses in the army

    // Get references to the elements on the page
    const foodCounter = document.getElementById("food-counter");
    const soldierBtn = document.getElementById("soldier-btn");
    const archerBtn = document.getElementById("archer-btn");
    const goblinBtn = document.getElementById("goblin-btn");
    const skeletonBtn = document.getElementById("skeleton-btn");
    const backToMapBtn = document.getElementById("back-to-map-btn");

    // Event listeners for recruiting units
    soldierBtn.addEventListener("click", function () {
        if (foodCount >= 10) {
            foodCount -= 10;
            unitSpeedReduction += 0.01; // Example: Soldier slows down the army by 1%
            updateFoodCounter();
            updateUnitCount();
            updateArmySpeed();
        } else {
            alert("Not enough food!");
        }
    });

    archerBtn.addEventListener("click", function () {
        if (foodCount >= 15) {
            foodCount -= 15;
            unitSpeedReduction += 0.02; // Example: Archer slows down the army by 2%
            updateFoodCounter();
            updateUnitCount();
            updateArmySpeed();
        } else {
            alert("Not enough food!");
        }
    });

    goblinBtn.addEventListener("click", function () {
        if (foodCount >= 8) {
            foodCount -= 8;
            unitSpeedReduction += 0.015; // Example: Goblin slows down the army by 1.5%
            updateFoodCounter();
            updateUnitCount();
            updateArmySpeed();
        } else {
            alert("Not enough food!");
        }
    });

    skeletonBtn.addEventListener("click", function () {
        if (foodCount >= 12) {
            foodCount -= 12;
            unitSpeedReduction += 0.02; // Example: Skeleton slows down the army by 2%
            updateFoodCounter();
            updateUnitCount();
            updateArmySpeed();
        } else {
            alert("Not enough food!");
        }
    });

    // Back to Map button event listener
    backToMapBtn.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    // Function to update the food counter display
    function updateFoodCounter() {
        foodCounter.textContent = foodCount;
    }

    // Function to update the unit count display
    function updateUnitCount() {
        const soldierCountDisplay = document.getElementById("soldier-count");
        const archerCountDisplay = document.getElementById("archer-count");
        const goblinCountDisplay = document.getElementById("goblin-count");
        const skeletonCountDisplay = document.getElementById("skeleton-count");

        soldierCountDisplay.textContent = soldierCount;
        archerCountDisplay.textContent = archerCount;
        goblinCountDisplay.textContent = goblinCount;
        skeletonCountDisplay.textContent = skeletonCount;
    }

    // Function to update the army's overall speed
    function updateArmySpeed() {
        // Calculate the overall army speed, taking into account unit and resource speed reductions
        // The formula is: armySpeed = 1.0 - unitSpeedReduction - resourceSpeedReduction
        // 1.0 represents the initial army speed (100%)
        armySpeed = 1.0 - unitSpeedReduction - resourceSpeedReduction;

        // If there are horses in the army, negate their speed reduction effect
        if (numHorses > 0) {
            armySpeed += (numHorses * 0.01); // Example: Each horse increases the army speed by 1%
        }

        // Ensure the army speed does not go below a minimum value (optional)
        // if (armySpeed < 0.5) {
        //     armySpeed = 0.5;
        // }

        // Apply the updated army speed to the game (e.g., move the player and army at this speed)
        // Code to update the game with the new army speed...
    }
});
