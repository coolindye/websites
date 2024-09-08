// JavaScript functionality

const minHeightSlider = document.getElementById("minHeight");
const maxHeightSlider = document.getElementById("maxHeight");
const minHeightValue = document.getElementById("minHeightValue");
const maxHeightValue = document.getElementById("maxHeightValue");
const submitBtn = document.getElementById("submitBtn");
const resultText = document.getElementById("resultText");
const confettiContainer = document.getElementById("confettiContainer");

// Update the height values as the sliders move
minHeightSlider.oninput = function() {
    minHeightValue.textContent = this.value + " cm";
};

maxHeightSlider.oninput = function() {
    maxHeightValue.textContent = this.value + " cm";
};

// Function to calculate the percentage of the population based on the height range
function calculatePopulationPercentage(minHeight, maxHeight) {
    // Simple mockup of population percentage calculation (random for demo)
    // Replace with real logic or API call
    const randomPercentage = Math.floor(Math.random() * 30) + 20; // Random between 20-50%
    return randomPercentage;
}

// Function to trigger confetti animation
function triggerConfetti() {
    confettiContainer.innerHTML = ''; // Clear any existing confetti
    for (let i = 0; i < 100; i++) {
        const piece = document.createElement("div");
        piece.classList.add("piece");
        confettiContainer.appendChild(piece);
    }
}

// Handle submit button click
submitBtn.onclick = function() {
    const minHeight = minHeightSlider.value;
    const maxHeight = maxHeightSlider.value;

    if (parseInt(minHeight) >= parseInt(maxHeight)) {
        resultText.textContent = "Invalid range! Minimum height must be less than maximum height.";
        resultText.style.color = '#ff6b6b'; // Show in red
        return;
    }

    const percentage = calculatePopulationPercentage(minHeight, maxHeight);
    resultText.textContent = `${percentage}% of the population fits your criteria!`;
    resultText.style.color = '#52b788'; // Green for valid result

    // Trigger confetti
    triggerConfetti();
};
