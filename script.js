const container = document.getElementById('container')
const numOfSquares = document.getElementById("numOfSquares")

// numOfSquares.classList.add()


function drawSketchPad(n) {
for (let i = 0; i < n**2; i++){

    squareSize = 800 / n
    const div = document.createElement('div'); // Create a new div
    div.classList.add('grid-square'); // Add a class to style the square
    div.classList.add('grid-square'); // Add a class to style the square
    div.style.height = `${squareSize}px`
    div.style.width = `${squareSize}px`
    container.appendChild(div); // Append the div to the container
}
}

function clearPad() {
    const divs = document.querySelectorAll('.grid-square'); // Only select grid-square divs
    divs.forEach(div => div.remove()); // Loop through and remove each div
}

function promptNumOfSquares() {
    let _numOfSquares;
    while (true) {
        let __numOfSquares = prompt("How many number of squares would you like per side?");

        // Validate input
        if (__numOfSquares === null) {
            return null; // Handle the case when the user cancels the prompt
        }

        _numOfSquares = Number(__numOfSquares); // Convert the input to a number

        // Check if the input is a valid number and within the range
        if (isNaN(_numOfSquares) || _numOfSquares < 1) {
            alert("Please enter a number greater than 0.");
        } else if (_numOfSquares > 80) {
            alert("Please enter a number smaller than or equal to 80.");
        } else {
            break; // Valid input, exit the loop
        }
    }

    return _numOfSquares; // Return the valid input
}

numOfSquares.addEventListener("click", function(){
    clearPad()
    drawSketchPad(promptNumOfSquares())
}) 

drawSketchPad(16)