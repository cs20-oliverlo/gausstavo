// Script.js

// HTML Elements
let calcBtn = document.getElementById("calc-btn");
let sumOut = document.getElementById("sum-out");

// Add Event Listener
calcBtn.addEventListener("click", calcSum);

// Event Function
function calcSum() {
    // Print integers 1 to 100
    let total = 0;
    let input = document.getElementById("n-in").value;
    
    for (let n = 1; n <= input; n++) {
        total = total + n;
    }

    // Output the Total
    sumOut.innerHTML = total;
}