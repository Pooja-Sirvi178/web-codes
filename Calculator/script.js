const screen = document.querySelector(".screen");
let currentScreen = '';

//get number and display on screen
function getNumber(number) {
    currentScreen += number;
    screen.innerText = currentScreen;
}

//get operator and display on screen
function getOperator(operator) {
    currentScreen += `${operator}`;
    screen.innerText = currentScreen;
}

//perform calculation
function calculateResult() {
    try {
        currentScreen = eval(currentScreen);
        screen.innerText = currentScreen;
    } catch {
        screen.innerText = "Error";
    }
}

//clear the screen
function clearScreen() {
    currentScreen = '';
    screen.innerText = currentScreen;
}

//go back one step
function backSpace() {
    currentScreen = currentScreen.slice(0, -1);
    screen.innerText = currentScreen;
}
