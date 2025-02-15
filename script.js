 document.addEventListener("DOMContentLoaded", () => {
    let coins = parseInt(localStorage.getItem("coins")) || 0;
    let energy = parseInt(localStorage.getItem("energy")) || 100;

    const coinsDisplay = document.getElementById("coins");
    const energyDisplay = document.getElementById("energy");
    const tapButton = document.getElementById("tap-button");
    const buyEnergyButton = document.getElementById("buy-energy");
    const buyMillionButton = document.getElementById("buy-million");

    function updateDisplay() {
        coinsDisplay.textContent = coins;
        energyDisplay.textContent = energy;
        localStorage.setItem("coins", coins);
        localStorage.setItem("energy", energy);
    }

    tapButton.addEventListener("click", () => {
        if (energy > 0) {
            coins += 1;
            energy -= 1;
            updateDisplay();
        }
    });

    buyEnergyButton.addEventListener("click", () => {
        if (coins >= 50) {
            coins -= 50;
            energy += 50;
            updateDisplay();
        }
    });

    buyMillionButton.addEventListener("click", () => {
        coins += 1000000;
        updateDisplay();
    });

    updateDisplay();
});
